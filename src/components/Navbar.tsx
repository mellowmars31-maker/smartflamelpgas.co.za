import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Flame } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-background border-b-2 border-border shadow-industrial">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Smart Flame Innovation" className="h-10 w-10 object-contain" />
          <span className="font-display font-800 text-lg tracking-tighter text-foreground">
            Smart Flame
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-body font-semibold text-sm uppercase tracking-widest transition-colors hover:text-primary ${
                location.pathname === link.to ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:0698776794"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 font-display font-bold text-sm uppercase tracking-widest btn-depress"
          >
            <Phone size={16} /> Call Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t-2 border-border px-4 pb-6 pt-2 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`block py-3 font-body font-semibold text-sm uppercase tracking-widest border-b border-border ${
                location.pathname === link.to ? "text-primary" : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-3 pt-4">
            <a
              href="tel:0698776794"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-4 py-4 font-display font-bold text-sm uppercase tracking-widest btn-depress"
            >
              <Phone size={16} /> Call
            </a>
            <a
              href="https://wa.me/27698776794"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-whatsapp text-accent-foreground px-4 py-4 font-display font-bold text-sm uppercase tracking-widest btn-depress"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
