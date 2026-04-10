import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

import foodWeddingCake from "@/assets/food-wedding-cake.jpg";
import foodPastries from "@/assets/food-pastries.jpg";
import foodCupcakes from "@/assets/food-cupcakes.jpg";
import foodJollof from "@/assets/food-jollof.jpg";
import foodSmallchops from "@/assets/food-smallchops.jpg";
import foodChocolate from "@/assets/food-chocolate.jpg";
import foodFruittart from "@/assets/food-fruittart.jpg";

import heroBg1 from "@/assets/hero-bg-1.jpg";
import heroBg2 from "@/assets/hero-bg-2.jpg";
import heroLanding from "@/assets/hero-landing.jpg";

const foodItems = [
  { src: foodWeddingCake, label: "Wedding Cakes" },
  { src: foodPastries, label: "Pastries" },
  { src: foodCupcakes, label: "Cupcakes" },
  { src: foodJollof, label: "Jollof Rice" },
  { src: foodSmallchops, label: "Small Chops" },
  { src: foodChocolate, label: "Chocolates" },
  { src: foodFruittart, label: "Fruit Tarts" },
  {
    src: "https://static.vecteezy.com/system/resources/thumbnails/030/664/237/small_2x/chinese-food-pu-pu-platter-with-metal-barbeque-free-photo.jpg",
    label: "Chinese Food",
  },
  {
    src: "https://i.pinimg.com/236x/a9/08/94/a90894d4d03d4ba8a322fd68548c76ee.jpg",
    label: "Shawarma",
  },
];

const backgrounds = [heroBg1, heroBg2, heroLanding, heroBg1, heroBg2, heroLanding, heroBg1];

const INTERVAL = 6500;
const ORBIT_SPEED = 0.0004;

// Scatter directions - all items flow DOWNWARD to lead user into content
const scatterDirections = [
  { x: -2.0, y: 3.5 },
  { x: 2.0, y: 3.0 },
  { x: -3.0, y: 2.5 },
  { x: 3.2, y: 2.8 },
  { x: -1.2, y: 4.0 },
  { x: 1.0, y: 3.8 },
  { x: 0, y: 4.5 },
  { x: -2.2, y: 3.0 },
  { x: 2.2, y: 4.0 },
];

const OrbitingFoodHero = () => {
  const [centerIndex, setCenterIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState<number | null>(null);
  const [crossfade, setCrossfade] = useState(0);
  const [orbitAngle, setOrbitAngle] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const rafRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);
  const transitioningRef = useRef(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Track scroll progress for scatter effect
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const heroH = rect.height;
      // Progress: 0 when hero fully visible, 1 when hero scrolled past
      const progress = Math.max(0, Math.min(1, -rect.top / (heroH * 0.5)));
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Continuous smooth orbit animation
  useEffect(() => {
    const animate = (time: number) => {
      if (lastTimeRef.current) {
        const delta = time - lastTimeRef.current;
        setOrbitAngle((prev) => prev + ORBIT_SPEED * delta);
      }
      lastTimeRef.current = time;
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const smoothTransition = useCallback((toIndex: number) => {
    if (transitioningRef.current) return;
    if (toIndex === centerIndex) return;
    transitioningRef.current = true;
    setNextIndex(toIndex);
    setCrossfade(0);
    const start = performance.now();
    const duration = 800;
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      setCrossfade(eased);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCenterIndex(toIndex);
        setNextIndex(null);
        setCrossfade(0);
        transitioningRef.current = false;
      }
    };
    requestAnimationFrame(step);
  }, [centerIndex]);

  const rotate = useCallback(() => {
    smoothTransition((centerIndex + 1) % foodItems.length);
  }, [centerIndex, smoothTransition]);

  useEffect(() => {
    const timer = setInterval(rotate, INTERVAL);
    return () => clearInterval(timer);
  }, [rotate]);

  const getOrbitOpacity = (foodIdx: number) => {
    if (foodIdx === centerIndex && nextIndex === null) return 0;
    if (foodIdx === centerIndex && nextIndex !== null) return crossfade;
    if (foodIdx === nextIndex) return 1 - crossfade;
    return 1;
  };

  // Eased scroll progress for smoother scatter
  const easedScroll = scrollProgress < 0.5
    ? 4 * scrollProgress * scrollProgress * scrollProgress
    : 1 - Math.pow(-2 * scrollProgress + 2, 3) / 2;

  return (
    <section ref={sectionRef} className="relative h-[600px] md:h-[640px] overflow-hidden">
      {/* Background images with smooth crossfade */}
      {backgrounds.map((bg, i) => {
        let opacity = 0;
        if (i === centerIndex && nextIndex === null) opacity = 1;
        else if (i === centerIndex && nextIndex !== null) opacity = 1 - crossfade;
        else if (i === nextIndex) opacity = crossfade;
        return (
          <img
            key={i}
            src={bg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity, transition: 'none' }}
          />
        );
      })}
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(270,60%,20%,0.92)] via-[hsl(270,60%,25%,0.85)] to-[hsl(270,60%,30%,0.6)]" />

      <div className="relative container mx-auto h-full flex items-center">
        {/* Left: Text */}
        <div className="max-w-lg z-10 md:ml-12 lg:ml-20" style={{
          opacity: 1 - easedScroll * 0.6,
          transform: `translateY(${easedScroll * -30}px)`,
        }}>
          <span className="inline-block bg-primary-foreground/15 backdrop-blur-sm text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full mb-5 border border-primary-foreground/20">
            ✨ Premium Catering & Events
          </span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-primary-foreground">
            Bringing the sweetness to your{" "}
            <span className="text-amber">taste buds.</span>
          </h1>
          <p className="text-sm text-primary-foreground/80 mb-6 leading-relaxed max-w-md">
            We craft exceptional cakes, pastries, and catering experiences that make your celebrations truly unforgettable.
          </p>
          <div className="flex gap-3">
            <Button asChild className="bg-amber hover:bg-amber-dark text-foreground rounded-full px-6 font-semibold shadow-lg">
              <Link to="/book">Book an Event</Link>
            </Button>
            <Button asChild className="rounded-full px-6 bg-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground border-none font-semibold transition-colors duration-300">
              <Link to="/services">Our Services</Link>
            </Button>
          </div>
          <div className="mt-6 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-amber animate-pulse" />
            <span className="text-primary-foreground/70 text-xs font-medium transition-opacity duration-500" style={{ opacity: nextIndex !== null ? 0 : 1 }}>
              Now featuring: {foodItems[centerIndex].label}
            </span>
          </div>
        </div>

        {/* Right: Orbiting food display */}
        <div className="hidden md:flex flex-1 items-center justify-center relative">
          <div className="relative w-[400px] h-[400px]">
            {/* Center food item - current */}
            <div className="absolute left-1/2 top-1/2 z-20" style={{
              opacity: (nextIndex !== null ? 1 - crossfade : 1) * (1 - easedScroll),
              transform: `translate(-50%, -50%) scale(${(nextIndex !== null ? 1 - crossfade * 0.25 : 1) * (1 - easedScroll * 0.3)})`,
            }}>
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-amber shadow-2xl shadow-amber/30">
                <img src={foodItems[centerIndex].src} alt={foodItems[centerIndex].label} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-amber text-foreground text-[10px] font-bold px-3 py-1 rounded-full whitespace-nowrap shadow-md">
                {foodItems[centerIndex].label}
              </div>
            </div>
            {/* Center food item - next (fading in) */}
            {nextIndex !== null && (
              <div className="absolute left-1/2 top-1/2 z-[21]" style={{
                opacity: crossfade * (1 - easedScroll),
                transform: `translate(-50%, -50%) scale(${(0.75 + crossfade * 0.25) * (1 - easedScroll * 0.3)})`,
              }}>
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-amber shadow-2xl shadow-amber/30">
                  <img src={foodItems[nextIndex].src} alt={foodItems[nextIndex].label} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-amber text-foreground text-[10px] font-bold px-3 py-1 rounded-full whitespace-nowrap shadow-md">
                  {foodItems[nextIndex].label}
                </div>
              </div>
            )}

            {/* ALL items orbit continuously – scatter on scroll */}
            {foodItems.map((food, i) => {
              const angle = orbitAngle + (i * Math.PI * 2) / foodItems.length;
              const radius = 155;
              const orbitX = Math.cos(angle) * radius;
              const orbitY = Math.sin(angle) * radius;
              const scale = 0.85 + 0.15 * ((Math.sin(angle) + 1) / 2);
              const zIndex = Math.sin(angle) > 0 ? 15 : 5;
              const itemOpacity = getOrbitOpacity(i);

              // Scatter: items fly outward based on scroll
              const scatter = scatterDirections[i];
              const scatterX = orbitX + scatter.x * easedScroll * 300;
              const scatterY = orbitY + scatter.y * easedScroll * 300;
              const scatterScale = scale * (1 + easedScroll * 0.6);
              const scatterOpacity = itemOpacity * (1 - easedScroll * 0.8);

              return (
                <div
                  key={`orbit-${i}`}
                  className="absolute left-1/2 top-1/2 cursor-pointer"
                  style={{
                    transform: `translate(calc(-50% + ${scatterX}px), calc(-50% + ${scatterY}px)) scale(${scatterScale}) rotate(${easedScroll * scatter.x * 15}deg)`,
                    zIndex,
                    opacity: scatterOpacity,
                    transition: 'opacity 0.3s ease',
                    pointerEvents: itemOpacity < 0.1 ? 'none' : 'auto',
                  }}
                  onClick={() => smoothTransition(i)}
                >
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary-foreground/40 shadow-lg hover:border-amber hover:scale-110 transition-all duration-300">
                    <img src={food.src} alt={food.label} className="w-full h-full object-cover" />
                  </div>
                </div>
              );
            })}

            {/* Decorative rotating ring */}
            <div className="absolute inset-0 rounded-full border border-primary-foreground/10 animate-[spin_30s_linear_infinite]"
              style={{ opacity: 1 - easedScroll, transform: `scale(${1 + easedScroll * 0.5})` }} />
            <div className="absolute inset-4 rounded-full border border-dashed border-primary-foreground/8 animate-[spin_20s_linear_infinite_reverse]"
              style={{ opacity: 1 - easedScroll, transform: `scale(${1 + easedScroll * 0.3})` }} />
          </div>
        </div>
      </div>

      {/* Progress dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10" style={{ opacity: 1 - easedScroll * 2 }}>
        {foodItems.map((_, i) => (
          <button
            key={i}
            onClick={() => smoothTransition(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === centerIndex ? "w-6 bg-amber" : "w-1.5 bg-primary-foreground/40 hover:bg-primary-foreground/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default OrbitingFoodHero;