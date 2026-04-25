const SectionHeading = ({ kicker, title, subtitle, center = true }) => (
  <div className={center ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
  
    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary font-bold text-balance">{title}</h2>
    {subtitle && <p className="mt-4 text-muted-foreground text-base md:text-lg">{subtitle}</p>}
  </div>
);

export default SectionHeading;
