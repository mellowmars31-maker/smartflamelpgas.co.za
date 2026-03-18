import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, ArrowRight, Flame, Wrench, FileCheck, Settings, Search, TrendingUp, PipetteIcon as Pipe, RefreshCw } from "lucide-react";
import heroCylinders from "@/assets/hero-cylinders.jpg";
import TrustBadges from "@/components/TrustBadges";
import ReviewsSection from "@/components/ReviewsSection";
import SectionHeading from "@/components/SectionHeading";

const services = [
  { icon: RefreshCw, title: "LPG Refills", desc: "Scheduled and emergency gas deliveries across Pretoria." },
  { icon: Wrench, title: "Installations", desc: "Residential and commercial gas system installations." },
  { icon: FileCheck, title: "COC Certificates", desc: "Legal compliance for property sales and insurance." },
  { icon: Settings, title: "Repairs", desc: "Fast, reliable gas appliance and piping repairs." },
  { icon: Search, title: "Inspections", desc: "Comprehensive safety inspections and audits." },
  { icon: Flame, title: "Compliance", desc: "Full regulatory compliance and certification." },
  { icon: TrendingUp, title: "Upgrades", desc: "Modern system upgrades for efficiency and safety." },
  { icon: Pipe, title: "PEX Fittings", desc: "Leak-proof PEX piping for maximum safety." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.2, 0.8, 0.2, 1] as const },
  }),
};

const HomePage = () => (
  <>
    {/* Hero */}
    <section className="relative min-h-[80vh] flex items-center bg-muted overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroCylinders} alt="LPG gas cylinders" className="w-full h-full object-cover image-inset opacity-20" />
      </div>
      <div className="relative container mx-auto px-4 lg:px-8 py-20 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          className="max-w-2xl"
        >
          <h1 className="font-display font-800 text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Reliable LPG Solutions You Can Trust
          </h1>
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
            Certified gas installations and rapid refills across Pretoria. Safety isn't an option—it's our standard.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 font-display font-bold text-sm uppercase tracking-widest btn-depress"
            >
              Get a Quote <ArrowRight size={16} />
            </Link>
            <a
              href="tel:0698776794"
              className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 font-display font-bold text-sm uppercase tracking-widest industrial-border btn-depress"
            >
              <Phone size={16} /> Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>

    <TrustBadges />

    {/* Services Grid */}
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          title="Our Services"
          subtitle="From emergency refills to full commercial installations, we deliver certified LPG solutions."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-card p-8 industrial-border hover:border-primary transition-colors group"
            >
              <s.icon size={32} className="text-primary mb-4 icon-hover" />
              <h3 className="font-display font-bold text-lg mb-2 text-foreground">{s.title}</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary font-display font-bold text-sm uppercase tracking-widest hover:gap-3 transition-all"
          >
            View All Services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>

    <ReviewsSection />

    {/* CTA */}
    <section className="py-20 lg:py-32 bg-primary">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="font-display font-800 text-3xl md:text-4xl text-primary-foreground mb-4">
          Need Gas? We're One Call Away
        </h2>
        <p className="font-body text-primary-foreground/80 mb-8 max-w-lg mx-auto">
          Contact us now for a fast quote or emergency refill service across Pretoria.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="tel:0698776794"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 font-display font-bold text-sm uppercase tracking-widest btn-depress"
          >
            <Phone size={16} /> Call 069 877 6794
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 font-display font-bold text-sm uppercase tracking-widest btn-depress"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default HomePage;
