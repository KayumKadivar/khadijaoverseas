const SectionHeading = ({ kicker, title, subtitle, center = true }) => (
  <div className={center ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
    {kicker && (
      <div className={`inline-flex items-center gap-2 mb-3 ${center ? "justify-center" : ""}`}>
        <span className="text-xs font-semibold tracking-[0.25em] text-accent uppercase">{kicker}</span>
      </div>
    )}
    {center && (
      <div className="flex items-center justify-center gap-2 mb-3">
        <span className="h-px w-8 bg-accent/50" />
        <span className="text-accent">🌿</span>
        <span className="h-px w-8 bg-accent/50" />
      </div>
    )}
    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary font-bold text-balance">{title}</h2>
    {subtitle && <p className="mt-4 text-muted-foreground text-base md:text-lg">{subtitle}</p>}
  </div>
);

export default SectionHeading;
