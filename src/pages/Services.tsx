import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { Cake, UtensilsCrossed, Palette, GraduationCap, CheckCircle, ArrowRight } from "lucide-react";
import cakesImg from "@/assets/cakes-pastries.jpg";
import cateringImg from "@/assets/premium-catering.jpg";
import eventImg from "@/assets/event-decor.jpg";
import spreadImg from "@/assets/catering-spread.jpg";

const services = [
  {
    icon: Cake,
    title: "Bespoke Cakes & Pastries",
    desc: "From elegant wedding cakes to delightful cupcakes, our master bakers create edible works of art tailored to your vision and taste preferences.",
    image: cakesImg,
    features: ["Custom cake designs", "Pastry platters", "Dessert tables", "Sugar art & fondant work"],
  },
  {
    icon: UtensilsCrossed,
    title: "Premium Catering Services",
    desc: "Our diverse menu offerings cater to every palate and occasion. From intimate dinners to grand corporate events, we deliver exceptional culinary experiences.",
    image: cateringImg,
    features: ["Buffet & plated service", "International cuisine", "Dietary accommodations", "Live cooking stations"],
  },
  {
    icon: Palette,
    title: "Event Planning & Decor",
    desc: "Transform any venue into a stunning masterpiece. Our event design team creates breathtaking atmospheres that perfectly complement your celebration.",
    image: eventImg,
    features: ["Floral & décor design", "Venue styling", "Theme coordination", "Lighting design"],
  },
  {
    icon: GraduationCap,
    title: "Surprises & Professional Training",
    desc: "Learn the art of baking and event planning from our experts. We also specialize in surprise party setups and unique celebration experiences.",
    image: spreadImg,
    features: ["Baking masterclasses", "Surprise party planning", "Corporate workshops", "Private lessons"],
  },
];

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.getElementById(location.hash.slice(1));
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [location]);

  return (
  <Layout>
    {/* Hero */}
    <section className="gradient-cta py-20 text-center text-primary-foreground">
      <div className="container mx-auto">
        <span className="inline-block bg-primary-foreground/15 backdrop-blur-sm text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full mb-5 border border-primary-foreground/20">Our Services</span>
        <h1 className="text-4xl md:text-5xl font-bold mb-3">Exceptional Services for<br />Unforgettable Moments</h1>
        <p className="text-primary-foreground/80 max-w-xl mx-auto text-sm">
          From exquisite cakes to complete event management, we bring your celebrations to life with passion and precision.
        </p>
      </div>
    </section>

    <div className="container mx-auto py-20 space-y-24">
      {services.map((s, i) => (
        <div key={s.title} id={s.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')} className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-12 items-center scroll-mt-24`}>
          <div className="md:w-1/2 group">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={s.image} alt={s.title} loading="lazy" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
          <div className="md:w-1/2 space-y-5">
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
              <s.icon className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">{s.title}</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            <ul className="space-y-3">
              {s.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Button asChild variant="outline" className="rounded-full px-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground mt-2">
              <Link to="/book" className="inline-flex items-center gap-2">
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      ))}
    </div>

    {/* CTA */}
    <section className="gradient-cta py-20">
      <div className="container mx-auto text-center text-primary-foreground">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Ready to Make Your Event Special?</h2>
        <p className="text-primary-foreground/80 mb-8 text-sm max-w-lg mx-auto">
          Let's discuss your vision and create something truly extraordinary together.
        </p>
        <div className="flex gap-3 justify-center">
          <Button asChild className="bg-amber hover:bg-amber-dark text-foreground rounded-full px-8 font-semibold shadow-lg">
            <Link to="/book">Book an Event</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full px-8 border-primary-foreground/30 text-foreground hover:bg-foreground hover:text-primary-foreground">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
  );
};

export default Services;
