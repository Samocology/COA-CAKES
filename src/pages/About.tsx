import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, Eye, Target, Users, Quote } from "lucide-react";
import chefImg from "@/assets/about-chef-real.png";
import eventImg from "@/assets/event-decor.jpg";
import cakeImg from "@/assets/cakes-pastries.jpg";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "5k+", label: "Events Served" },
  { value: "1k+", label: "Happy Clients" },
  { value: "100%", label: "Satisfaction" },
];

const values = [
  { icon: Sparkles, title: "Premium Quality", desc: "Only the finest ingredients and materials for every creation" },
  { icon: Eye, title: "Attention to Detail", desc: "Every element is carefully crafted to perfection" },
  { icon: Target, title: "Client-Focused", desc: "Your vision drives everything we do, always" },
  { icon: Users, title: "Expert Team", desc: "Skilled professionals with passion and experience" },
];

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="gradient-cta py-20 text-primary-foreground">
      <div className="container mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/2 space-y-5">
          <span className="inline-block bg-primary-foreground/15 backdrop-blur-sm text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full border border-primary-foreground/20">About COA</span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            A soft premium brand with a heart for sweet <span className="text-amber">celebrations.</span>
          </h1>
          <p className="text-primary-foreground/80 text-sm leading-relaxed">
            COA Cakes was born from a passion for creating beautiful, delicious experiences. What started as a small kitchen operation has grown into one of the most trusted catering and event brands.
          </p>
          <Button asChild className="bg-amber hover:bg-amber-dark text-foreground rounded-full px-8 font-semibold shadow-lg">
            <Link to="/services">Explore Services</Link>
          </Button>
        </div>
        <div className="md:w-1/2">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img src={chefImg} alt="Our pastry chef at work" className="w-full h-80 object-cover" />
          </div>
        </div>
      </div>
    </section>

    {/* Mission */}
    <section className="py-20">
      <div className="container mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/2 group">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img src={eventImg} alt="Beautiful event setup" loading="lazy" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
        <div className="md:w-1/2 space-y-5">
          <span className="inline-block bg-secondary text-secondary-foreground text-xs font-semibold px-4 py-1.5 rounded-full">Our Mission</span>
          <h2 className="text-3xl font-bold">We turn cakes, pastries, and events into beautiful experiences.</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Our mission is simple: to make every celebration memorable. We combine creativity, quality ingredients, and exceptional service to deliver experiences that exceed expectations. Every cake we bake, every event we plan, and every dish we prepare tells a story.
          </p>
          <div className="bg-muted/50 rounded-xl p-5 border-l-4 border-amber">
            <Quote className="w-5 h-5 text-amber mb-2" />
            <p className="text-sm italic text-muted-foreground">"Every celebration deserves to be extraordinary. That's the COA promise."</p>
            <p className="text-xs font-semibold mt-2">— COA Founder</p>
          </div>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="gradient-cta py-16">
      <div className="container mx-auto">
        <div className="text-center text-primary-foreground mb-10">
          <h3 className="text-2xl font-bold">The sweet standard COA brings in every order.</h3>
          <p className="text-primary-foreground/70 text-sm mt-1">Numbers that speak for themselves</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-primary-foreground">
          {stats.map((s) => (
            <div key={s.label} className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10">
              <p className="text-4xl font-bold text-amber">{s.value}</p>
              <p className="text-sm opacity-80 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-20">
      <div className="container mx-auto text-center">
        <span className="inline-block bg-secondary text-secondary-foreground text-xs font-semibold px-4 py-1.5 rounded-full mb-4">Our Values</span>
        <h2 className="text-3xl font-bold mb-2">Eye-catching, professional, and beautifully thoughtful.</h2>
        <p className="text-muted-foreground mb-12 text-sm">Our core values drive everything we do.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {values.map((v) => (
            <div key={v.title} className="p-6 rounded-2xl border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-4">
                <v.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-sm mb-2">{v.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 space-y-5">
          <h2 className="text-3xl font-bold">Let COA create something lovely, classy and <span className="text-gradient">unforgettable</span> for your next event.</h2>
          <p className="text-muted-foreground text-sm">From wedding cakes to corporate events, we're ready to make your vision come to life.</p>
          <div className="flex gap-3">
            <Button asChild className="bg-amber hover:bg-amber-dark text-foreground rounded-full px-8 font-semibold shadow-lg">
              <Link to="/book">Book an Event</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 group">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img src={cakeImg} alt="Beautiful cake display" loading="lazy" className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
