const SectionHeading = ({ kicker, title, subtitle, center = true }) => (
  <div className={center ? "text-center max-w-3xl mx-auto" : "max-w-2xl"}>
    {kicker && (
      <div className={`flex items-center gap-3 mb-4 ${center ? "justify-center" : ""}`}>
        <span className="h-px w-8 bg-accent" />
        <span className="text-xs font-bold tracking-[0.4em] text-accent uppercase">{kicker}</span>
      </div>
    )}
    <h2 className="font-serif text-3xl md:text-5xl text-primary font-bold text-balance leading-tight">{title}</h2>
    {subtitle && <p className="mt-5 text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

export default SectionHeading;
