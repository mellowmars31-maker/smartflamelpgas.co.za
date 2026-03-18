import { motion } from "framer-motion";
import { ShieldCheck, Users, Clock, Search, Flame, Award } from "lucide-react";
import inspectionImg from "@/assets/inspection.jpg";
import SectionHeading from "@/components/SectionHeading";
import ReviewsSection from "@/components/ReviewsSection";

const values = [
  { icon: ShieldCheck, title: "Safety First", desc: "Every installation and repair meets the highest South African safety standards." },
  { icon: Users, title: "Professionalism", desc: "Our certified technicians deliver expert service with respect and integrity." },
  { icon: Award, title: "Customer Satisfaction", desc: "100+ happy customers trust us for their gas needs in Pretoria." },
];

const whyUs = [
  { icon: Award, label: "Experienced & Certified" },
  { icon: Clock, label: "Fast Response Times" },
  { icon: ShieldCheck, label: "Fully Compliant" },
  { icon: Search, label: "Free Inspections" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] as const } },
};

const AboutPage = () => (
  <>
    <section className="bg-muted py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading title="About Smart Flame Innovation" />
      </div>
    </section>

    {/* Intro */}
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="font-display font-800 text-3xl text-foreground mb-4">Pretoria's Trusted LPG Provider</h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-4">
            Smart Flame Innovation is a Pretoria-based LPG gas solutions provider committed to delivering safe, reliable, and compliant gas services to homeowners and businesses across the region.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed">
            Our team of SAQCC-certified technicians brings years of experience in gas installations, maintenance, and safety compliance. We take pride in fast response times, transparent pricing, and workmanship that meets the highest industry standards.
          </p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <img src={inspectionImg} alt="Gas technician at work" className="w-full h-80 object-cover image-inset industrial-border" />
        </motion.div>
      </div>
    </section>

    {/* Mission */}
    <section className="py-20 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <Flame size={40} className="text-accent mx-auto mb-4" />
        <h2 className="font-display font-800 text-3xl text-foreground mb-4">Our Mission</h2>
        <p className="font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg">
          To provide safe, reliable, and fully compliant LPG gas solutions that protect families and empower businesses across Pretoria.
        </p>
      </div>
    </section>

    {/* Values */}
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading title="Our Values" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center p-8 industrial-border"
            >
              <v.icon size={36} className="text-primary mx-auto mb-4 icon-hover" />
              <h3 className="font-display font-bold text-lg text-foreground mb-2">{v.title}</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-20 lg:py-32 bg-primary">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="font-display font-800 text-3xl text-primary-foreground mb-10">Why Choose Us</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {whyUs.map((w) => (
            <div key={w.label} className="flex flex-col items-center gap-3">
              <w.icon size={32} className="text-primary-foreground icon-hover" />
              <span className="font-display font-bold text-sm uppercase tracking-widest text-primary-foreground">{w.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    <ReviewsSection />
  </>
);

export default AboutPage;
