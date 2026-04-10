import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container mx-auto py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">C</span>
            </div>
            <span className="font-bold text-lg">
              <span className="text-primary-foreground">COA</span>{" "}
              <span className="text-amber">Cakes</span>
            </span>
          </div>
          <p className="text-sm opacity-70">
            Premium cakes, pastries, and event catering services for unforgettable celebrations.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <div className="space-y-2">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="block text-sm opacity-70 hover:opacity-100 transition-opacity"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <div className="space-y-2 text-sm opacity-70">
            <p>Bespoke Cakes</p>
            <p>Premium Catering</p>
            <p>Event Planning</p>
            <p>Professional Training</p>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Contact Info</h4>
          <div className="space-y-3 text-sm opacity-70">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+234 800 123 4567</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>info@coacakes.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Lagos, Nigeria</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-navy-foreground/10 py-4">
        <p className="text-center text-sm opacity-50">
          © 2026 COA Cakes, Pastries & More. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
