import { useState } from "react";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import spreadImg from "@/assets/catering-spread.jpg";

const contactInfo = [
  { icon: Phone, label: "+234 800 123 4567", href: "tel:+2348001234567" },
  { icon: Mail, label: "info@coacakes.com", href: "mailto:info@coacakes.com" },
  { icon: MapPin, label: "Lagos, Nigeria", href: "#" },
  { icon: Clock, label: "Mon - Sat: 8am - 8pm", href: "#" },
];

const serviceOptions = ["Cakes", "Catering", "Event", "Custom Order", "Training"];

const Contact = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", phone: "", email: "", message: ""
  });

  const toggleService = (s: string) => {
    setSelectedServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  };

  const handleSubmitEnquiry = () => {
    const text = `*New Enquiry from COA Website*%0A%0A*Name:* ${formData.firstName} ${formData.lastName}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email}%0A*Services:* ${selectedServices.join(", ") || "Not specified"}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/+2347048099890?text=${text}`, "_blank");
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-cta py-20 text-primary-foreground">
        <div className="container mx-auto text-center">
          <span className="inline-block bg-primary-foreground/15 backdrop-blur-sm text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full mb-5 border border-primary-foreground/20">Get in Touch</span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-3">
            Let's plan something sweet,<br />stylish and <span className="text-amber">unforgettable.</span>
          </h1>
          <p className="text-primary-foreground/80 text-sm max-w-xl mx-auto">
            Reach out for custom orders, event details, conference menus, and sweet packages. We'll make your dream a reality.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20">
        <div className="container mx-auto flex flex-col md:flex-row gap-12">
          <div className="md:w-2/3 space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-1">Send us your details</h2>
              <p className="text-muted-foreground text-sm">Share your event details and any important information to help us serve you better.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input placeholder="First name" className="rounded-xl h-12" value={formData.firstName} onChange={(e) => setFormData(p => ({ ...p, firstName: e.target.value }))} />
              <Input placeholder="Phone number" className="rounded-xl h-12" value={formData.phone} onChange={(e) => setFormData(p => ({ ...p, phone: e.target.value }))} />
              <Input placeholder="Last name" className="rounded-xl h-12" value={formData.lastName} onChange={(e) => setFormData(p => ({ ...p, lastName: e.target.value }))} />
              <Input placeholder="Email address" className="rounded-xl h-12" value={formData.email} onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))} />
            </div>
            <div>
              <label className="text-sm font-medium mb-3 block">What do you need?</label>
              <div className="flex flex-wrap gap-2">
                {serviceOptions.map((t) => (
                  <button
                    key={t}
                    onClick={() => toggleService(t)}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedServices.includes(t)
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "border border-border hover:border-primary/50 hover:bg-secondary"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <Textarea placeholder="Tell us more about your event..." className="rounded-xl min-h-[140px]" value={formData.message} onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))} />
            <Button onClick={handleSubmitEnquiry} className="bg-amber hover:bg-amber-dark text-foreground rounded-full px-8 font-semibold shadow-lg inline-flex items-center gap-2">
              <Send className="w-4 h-4" /> Submit Enquiry
            </Button>
          </div>

          <div className="md:w-1/3 space-y-8">
            <div className="bg-muted/50 rounded-2xl p-6 border border-border">
              <h3 className="text-lg font-bold mb-5">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((c) => (
                  <a key={c.label} href={c.href} className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary transition-colors">
                      <c.icon className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <span className="text-sm group-hover:text-primary transition-colors">{c.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-muted/50 rounded-2xl p-6 border border-border">
              <h3 className="text-lg font-bold mb-3">Opening Hours</h3>
              <div className="text-sm text-muted-foreground space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium text-foreground">8:00am - 8:00pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium text-foreground">9:00am - 6:00pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium text-foreground">Closed</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src={spreadImg} alt="Catering spread" loading="lazy" className="w-full h-48 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-cta py-20">
        <div className="container mx-auto text-center text-primary-foreground">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Let COA handle the sweet details while you enjoy the moment.</h2>
          <p className="text-primary-foreground/80 mb-8 text-sm max-w-lg mx-auto">From wedding cakes to birthdays, gift packages and corporate events, we're ready.</p>
          <div className="flex gap-3 justify-center">
            <Button asChild className="bg-amber hover:bg-amber-dark text-foreground rounded-full px-8 font-semibold shadow-lg">
              <Link to="/book">Book an Event</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-8 border-primary-foreground/30 text-foreground hover:bg-foreground hover:text-primary-foreground">
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
