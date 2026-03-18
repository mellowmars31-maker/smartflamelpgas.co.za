import { ShieldCheck, Zap, DollarSign } from "lucide-react";

const badges = [
  { icon: ShieldCheck, label: "SAQCC Gas Certified" },
  { icon: Zap, label: "Fast Response" },
  { icon: DollarSign, label: "Affordable Rates" },
];

const TrustBadges = () => (
  <div className="border-y-2 border-border py-8">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid grid-cols-3 gap-4">
        {badges.map((b) => (
          <div key={b.label} className="flex flex-col items-center gap-2 text-center">
            <b.icon size={28} className="text-primary icon-hover" />
            <span className="font-display font-bold text-xs md:text-sm uppercase tracking-widest text-foreground">
              {b.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default TrustBadges;
