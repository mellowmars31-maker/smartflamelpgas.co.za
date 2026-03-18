import { Star } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  { name: "Sipho", text: "Fastest refill in Pretoria East. Arrived in 30 mins." },
  { name: "Thandi", text: "Professional COC inspection. Very thorough and on time." },
  { name: "Johan", text: "Smart Flame fixed a leak two other guys couldn't find." },
  { name: "Ayesha", text: "Great price on the new gas stove installation." },
  { name: "Kabelo", text: "Called at 7am, gas delivered by 8. Excellent service!" },
  { name: "Lerato", text: "Very professional team. They explained everything clearly." },
  { name: "Pieter", text: "Best rates in Pretoria. Will definitely use again." },
  { name: "Naledi", text: "Got my COC certificate same day. Highly recommended." },
  { name: "Bongani", text: "Safe, reliable, and affordable. What more can you ask?" },
  { name: "Zanele", text: "They installed my full gas system in one day. Amazing!" },
  { name: "David", text: "Free inspection and honest advice. Rare to find these days." },
  { name: "Palesa", text: "Quick response and very friendly technicians." },
];

const Stars = ({ count = 5 }: { count?: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} size={14} className="fill-accent text-accent" />
    ))}
  </div>
);

const ReviewsSection = () => (
  <section className="py-20 lg:py-32 bg-muted">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Stars />
          <span className="font-display font-bold text-foreground">4.7/5</span>
        </div>
        <h2 className="font-display font-800 text-3xl md:text-4xl text-foreground mb-2">
          Trusted by 100+ Customers
        </h2>
        <p className="font-body text-muted-foreground">Real feedback from Pretoria homeowners and businesses</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
            className="bg-card p-6 industrial-border shadow-card"
          >
            <Stars />
            <p className="font-body text-foreground mt-3 mb-3 leading-relaxed">"{r.text}"</p>
            <p className="font-display font-bold text-sm text-primary">— {r.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewsSection;
