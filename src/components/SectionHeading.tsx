interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => (
  <div className="text-center mb-12">
    <h2 className="font-display font-800 text-3xl md:text-4xl text-foreground mb-3">{title}</h2>
    {subtitle && <p className="font-body text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

export default SectionHeading;
