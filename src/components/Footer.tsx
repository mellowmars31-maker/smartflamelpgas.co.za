import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-secondary py-16">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-display font-800 text-xl text-secondary mb-4">Smart Flame Innovation</h3>
          <p className="font-body text-secondary/70 leading-relaxed">
            Pretoria's trusted LPG gas solutions provider. Certified installations, refills, and safety compliance.
          </p>
        </div>
        <div>
          <h4 className="font-display font-bold text-sm uppercase tracking-widest mb-4 text-secondary">Quick Links</h4>
          <div className="space-y-2">
            {[
              { to: "/", label: "Home" },
              { to: "/services", label: "Services" },
              { to: "/about", label: "About Us" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="block font-body text-secondary/70 hover:text-secondary transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display font-bold text-sm uppercase tracking-widest mb-4 text-secondary">Contact</h4>
          <div className="space-y-3 font-body text-secondary/70">
            <a href="tel:0698776794" className="flex items-center gap-2 hover:text-secondary"><Phone size={16} /> 069 877 6794</a>
            <a href="tel:0848081332" className="flex items-center gap-2 hover:text-secondary"><Phone size={16} /> 084 808 1332</a>
            <a href="mailto:princemukarati4@gmail.com" className="flex items-center gap-2 hover:text-secondary"><Mail size={16} /> princemukarati4@gmail.com</a>
            <div className="flex items-start gap-2"><MapPin size={16} className="mt-1 shrink-0" /> 171 Pitts Avenue, Weavind Park, Pretoria</div>
          </div>
        </div>
      </div>
      <div className="border-t border-secondary/20 mt-12 pt-8 text-center font-body text-secondary/50 text-sm">
        © {new Date().getFullYear()} Smart Flame Innovation. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
