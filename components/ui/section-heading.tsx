type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <header className="mb-8 max-w-3xl lg:mb-12">
      {eyebrow ? (
        <p className="reveal-item mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="reveal-item reveal-delay-1 text-balance text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl md:text-4xl">
        {title}
      </h2>
      <p className="reveal-item reveal-delay-2 mt-3 text-pretty text-base leading-7 text-slate-600 md:text-lg">
        {description}
      </p>
    </header>
  );
}
