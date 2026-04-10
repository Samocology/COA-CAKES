import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { CheckCircle, Star, ArrowRight, Sparkles } from "lucide-react";
import OrbitingFoodHero from "@/components/OrbitingFoodHero";
import cakesImg from "@/assets/cakes-pastries.jpg";
import conferenceImg from "@/assets/conference-dishes.jpg";
import eventImg from "@/assets/event-decor.jpg";
import spreadImg from "@/assets/catering-spread.jpg";

const services = [
  { title: "Cakes & Pastries", desc: "Handcrafted cakes for every celebration", image: cakesImg, link: "bespoke-cakes---pastries" },
  { title: "Conference Dishes", desc: "Professional catering for corporate events", image: conferenceImg, link: "premium-catering-services" },
  { title: "Event Planning & Decor", desc: "Full-service event design & management", image: eventImg, link: "event-planning---decor" },
];

const features = [
  "Premium handcrafted cakes for every occasion",
  "Professional catering with diverse menu options",
  "Full event planning and decoration services",
  "Experienced and passionate team of chefs",
  "Timely delivery and impeccable presentation",
  "Custom packages tailored to your budget",
];

const testimonials = [
  { name: "Adaeze O.", role: "Bride", text: "COA made our wedding cake a masterpiece! Every guest was amazed by both the design and taste." },
  { name: "Tunde A.", role: "Corporate Client", text: "Professional, punctual, and the food was outstanding. Our conference attendees loved it." },
  { name: "Funmi B.", role: "Birthday Party", text: "The event decoration was breathtaking. COA turned my vision into reality perfectly." },
];

const Index = () => (
  <Layout>
    <OrbitingFoodHero />

    {/* Services */}
    <section className="py-20">
      <div className="container mx-auto text-center">
        <span className="inline-block bg-secondary text-secondary-foreground text-xs font-semibold px-4 py-1.5 rounded-full mb-4">What We Offer</span>
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Premium Services</h2>
        <p className="text-muted-foreground mb-12 max-w-xl mx-auto text-sm">
          We offer a full range of catering and event services to make every moment special.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div key={s.title} className="group rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-52 overflow-hidden">
                <img src={s.image} alt={s.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-5 text-left">
                <h3 className="font-bold text-base mb-1">{s.title}</h3>
                <p className="text-muted-foreground text-xs mb-3">{s.desc}</p>
                <Link to={`/services#${s.link}`} className="text-primary text-xs font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <Button asChild className="mt-10 bg-primary text-primary-foreground rounded-full px-8 shadow-lg hover:shadow-xl transition-shadow">
          <Link to="/services">View All Services</Link>
        </Button>
      </div>
    </section>

    {/* Features */}
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto text-center">
        <span className="inline-block bg-secondary text-secondary-foreground text-xs font-semibold px-4 py-1.5 rounded-full mb-4">Why Choose Us</span>
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Everything You Need in One Place</h2>
        <p className="text-muted-foreground mb-12 max-w-xl mx-auto text-sm">
          From premium ingredients to flawless execution, we handle every detail.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {features.map((f) => (
            <div key={f} className="flex items-center gap-3 bg-background rounded-xl p-5 border border-border text-left hover:border-primary/30 hover:shadow-md transition-all duration-300">
              <CheckCircle className="w-5 h-5 text-primary shrink-0" />
              <span className="text-sm">{f}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-20">
      <div className="container mx-auto text-center">
        <span className="inline-block bg-secondary text-secondary-foreground text-xs font-semibold px-4 py-1.5 rounded-full mb-4">Testimonials</span>
        <h2 className="text-3xl md:text-4xl font-bold mb-2">What Our Clients Say</h2>
        <p className="text-muted-foreground mb-12 max-w-xl mx-auto text-sm">
          Don't just take our word for it — hear from our happy clients.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-background rounded-2xl border border-border p-6 text-left hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber text-amber" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4 italic leading-relaxed">"{t.text}"</p>
              <div>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Gallery preview */}
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto text-center">
        <span className="inline-block bg-secondary text-secondary-foreground text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
          <Sparkles className="w-3 h-3 inline mr-1" /> Our Work
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-2">A Taste of What We Do</h2>
        <p className="text-muted-foreground mb-12 max-w-xl mx-auto text-sm">
          Every event is a masterpiece. Here's a glimpse of our finest work.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[cakesImg, conferenceImg, eventImg, spreadImg].map((img, i) => (
            <div key={i} className="rounded-xl overflow-hidden aspect-square group">
              <img src={img} alt="Gallery" loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="gradient-cta py-20">
      <div className="container mx-auto text-center text-primary-foreground">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Get the best <span className="text-amber">Catering Services</span> today
        </h2>
        <p className="opacity-80 mb-8 text-sm max-w-lg mx-auto">Let us handle the details while you enjoy the moment. Premium quality, unforgettable experiences.</p>
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

export default Index;
