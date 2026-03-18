import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { RefreshCw, Wrench, FileCheck, Settings, Search, Flame, TrendingUp, PipetteIcon as Pipe, ArrowRight } from "lucide-react";
import installationImg from "@/assets/installation.jpg";
import inspectionImg from "@/assets/inspection.jpg";
import SectionHeading from "@/components/SectionHeading";

const services = [
  { icon: RefreshCw, title: "LPG Refills & Exchange", desc: "Never run out. We provide scheduled and emergency LPG gas deliveries and cylinder exchanges across Pretoria. Fast, reliable, and always on time.", image: null },
  { icon: Wrench, title: "Residential & Commercial Installations", desc: "Full gas system installations for homes and businesses. From single stove hookups to complete commercial kitchen fit-outs, all SAQCC certified.", image: installationImg },
  { icon: FileCheck, title: "COC Certificates", desc: "Certificate of Compliance for property sales, rentals, and insurance requirements. Same-day inspections available. Legal compliance guaranteed.", image: null },
  { icon: Settings, title: "Repairs & Maintenance", desc: "Expert gas appliance repairs and system maintenance. We fix leaks, faulty regulators, damaged piping, and more. Fast turnaround times.", image: null },
  { icon: Search, title: "Safety Inspections", desc: "Comprehensive gas safety inspections for residential and commercial properties. Free initial inspection with every installation service.", image: inspectionImg },
  { icon: TrendingUp, title: "Upgrades", desc: "Upgrade your outdated gas systems to modern, efficient equipment. Improve safety, reduce gas consumption, and stay compliant.", image: null },
  { icon: Pipe, title: "PEX Fittings", desc: "Modern, leak-proof PEX piping installations. Superior durability and flexibility compared to traditional copper piping. Maximum safety guaranteed.", image: null },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] as const } },
};

const ServicesPage = () => (
  <>
    <section className="bg-muted py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          title="Our Services"
          subtitle="Certified LPG gas solutions for every need. From quick refills to full commercial installations."
        />
      </div>
    </section>

    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8 space-y-16">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className={`grid grid-cols-1 ${s.image ? "lg:grid-cols-2" : ""} gap-8 items-center`}
          >
            <div className={`${s.image && i % 2 === 1 ? "lg:order-2" : ""}`}>
              <div className="flex items-center gap-3 mb-4">
                <s.icon size={28} className="text-primary icon-hover" />
                <h3 className="font-display font-800 text-2xl text-foreground">{s.title}</h3>
              </div>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 font-display font-bold text-sm uppercase tracking-widest btn-depress"
              >
                Request Service <ArrowRight size={16} />
              </Link>
            </div>
            {s.image && (
              <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <img src={s.image} alt={s.title} className="w-full h-64 lg:h-80 object-cover image-inset industrial-border" />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 lg:py-32 bg-primary">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="font-display font-800 text-3xl md:text-4xl text-primary-foreground mb-4">
          Ready to Get Started?
        </h2>
        <p className="font-body text-primary-foreground/80 mb-8">
          Contact us for a free quote. Average response time: 15 minutes.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 font-display font-bold text-sm uppercase tracking-widest btn-depress"
        >
          Contact Us <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  </>
);

export default ServicesPage;
