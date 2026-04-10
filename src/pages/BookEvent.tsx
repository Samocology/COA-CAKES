import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, MessageSquare, FileText, Handshake, PartyPopper, Send, Star } from "lucide-react";
import cakeImg from "@/assets/cakes-pastries.jpg";
import spreadImg from "@/assets/catering-spread.jpg";

const steps = [
  { icon: MessageSquare, title: "Contact Details", desc: <i>Help us get to know you... </i> },
  { icon: FileText, title: "Event Information", desc: <i>We discuss your vision, menu, and budget</i> },
  { icon: Handshake, title: "Agree & Deposit", desc: <i>Finalize details and secure your date</i> },
  { icon: PartyPopper, title: "Details & Budget", desc: <i>We deliver a flawless experience</i> },
];

const serviceOptions = ["Birthday Cakes", "Wedding Cakes", "Event Catering", "Conference Menus", "Pastry Platters", "Full Event Planning"];

const BookEvent = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    fullName: "", company: "", phone: "", email: "", date: "", eventType: "", guestCount: "", venue: "", details: "", budget: ""
  });

  const toggleService = (s: string) => {
    setSelectedServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  };

  const handleSubmitBooking = () => {
    const text = `*New Booking Request from COA Website*%0A%0A*Name:* ${formData.fullName}%0A*Company:* ${formData.company}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email}%0A*Date:* ${formData.date}%0A*Event Type:* ${formData.eventType}%0A*Guests:* ${formData.guestCount}%0A*Venue:* ${formData.venue}%0A*Services:* ${selectedServices.join(", ") || "Not specified"}%0A*Details:* ${formData.details}%0A*Budget:* ${formData.budget}`;
    window.open(`https://wa.me/+2347048099890?text=${text}`, "_blank");
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-booking py-20 text-center text-primary-foreground">
        <div className="container mx-auto max-w-2xl">
          <span className="inline-block bg-primary-foreground/15 backdrop-blur-sm text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full mb-5 border border-primary-foreground/20">Book Your Event</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Design a delicious experience for your next big <span className="text-amber">event.</span>
          </h1>
          <p className="text-primary-foreground/80 text-sm">
            From magnificent cakes and pastries to full-scale catering and event management, let COA make it spectacular.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-center text-2xl font-bold mb-10">How it Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={s.title} className="relative bg-background rounded-2xl p-6 text-center border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="absolute -top-3 -left-1 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shadow-md">
                  {i + 1}
                </div>
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-4">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="font-bold text-sm mb-1">{s.title}</p>
                <p className="text-xs text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20">
        <div className="container mx-auto flex flex-col md:flex-row gap-12">
          <div className="md:w-3/5 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-1">Event Booking Request</h2>
              <p className="text-muted-foreground text-sm">Fill out the form and our team will get back to you within 24 hours.</p>
            </div>

            <div className="space-y-8">
              <div className="bg-muted/30 rounded-2xl p-6 border border-border space-y-4">
                <h3 className="font-bold text-sm flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">1</span>
                  Contact Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Full name" className="rounded-xl h-12" value={formData.fullName} onChange={(e) => setFormData(p => ({ ...p, fullName: e.target.value }))} />
                  <Input placeholder="Company / Organization" className="rounded-xl h-12" value={formData.company} onChange={(e) => setFormData(p => ({ ...p, company: e.target.value }))} />
                  <Input placeholder="Phone number" className="rounded-xl h-12" value={formData.phone} onChange={(e) => setFormData(p => ({ ...p, phone: e.target.value }))} />
                  <Input placeholder="Email address" className="rounded-xl h-12" value={formData.email} onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))} />
                </div>
              </div>

              <div className="bg-muted/30 rounded-2xl p-6 border border-border space-y-4">
                <h3 className="font-bold text-sm flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">2</span>
                  Event Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input type="date" className="rounded-xl h-12" value={formData.date} onChange={(e) => setFormData(p => ({ ...p, date: e.target.value }))} />
                  <Input placeholder="Event type" className="rounded-xl h-12" value={formData.eventType} onChange={(e) => setFormData(p => ({ ...p, eventType: e.target.value }))} />
                  <Input placeholder="Expected guest count" className="rounded-xl h-12" value={formData.guestCount} onChange={(e) => setFormData(p => ({ ...p, guestCount: e.target.value }))} />
                  <Input placeholder="Venue / Location" className="rounded-xl h-12" value={formData.venue} onChange={(e) => setFormData(p => ({ ...p, venue: e.target.value }))} />
                </div>
              </div>

              <div className="bg-muted/30 rounded-2xl p-6 border border-border space-y-4">
                <h3 className="font-bold text-sm flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">3</span>
                  Services Required
                </h3>
                <div className="flex flex-wrap gap-2">
                  {serviceOptions.map((s) => (
                    <button
                      key={s}
                      onClick={() => toggleService(s)}
                      className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                        selectedServices.includes(s)
                          ? "bg-primary text-primary-foreground shadow-md"
                          : "border border-border hover:border-primary/50 hover:bg-secondary"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-muted/30 rounded-2xl p-6 border border-border space-y-4">
                <h3 className="font-bold text-sm flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">4</span>
                  Details & Budget
                </h3>
                <Textarea placeholder="Tell us about your goals, theme, dietary requirements, or any special requests..." className="rounded-xl min-h-[140px]" value={formData.details} onChange={(e) => setFormData(p => ({ ...p, details: e.target.value }))} />
                <Input placeholder="Estimated budget (e.g. ₦500,000 - ₦1,000,000)" className="rounded-xl h-12" value={formData.budget} onChange={(e) => setFormData(p => ({ ...p, budget: e.target.value }))} />
              </div>

              <Button onClick={handleSubmitBooking} className="w-full bg-primary text-primary-foreground rounded-full font-semibold py-6 shadow-lg hover:shadow-xl transition-shadow inline-flex items-center gap-2">
                <Send className="w-4 h-4" /> Submit Booking Request
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:w-2/5 space-y-6">
            <div className="bg-muted/50 rounded-2xl p-6 border border-border">
              <h3 className="text-lg font-bold mb-2">Why Book with COA?</h3>
              <div className="space-y-3 mt-4">
                {["24-hour response time", "Free consultation call", "Flexible payment plans", "100% satisfaction guarantee"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src={cakeImg} alt="Cake display" loading="lazy" className="w-full h-52 object-cover" />
              <div className="p-4 bg-background border border-t-0 border-border rounded-b-2xl">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber text-amber" />
                  ))}
                </div>
                <h4 className="font-bold text-sm">Cake Tasting Available</h4>
                <p className="text-xs text-muted-foreground mt-1">Complimentary cake tasting for confirmed bookings. Schedule yours today!</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg group">
              <img src={spreadImg} alt="Catering spread" loading="lazy" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BookEvent;
