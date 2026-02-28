import { Container } from "@/components/ui/container";

type HeroStat = {
  label: string;
  value: string;
};

type HeroSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  ctas: {
    label: string;
    href?: string;
  }[];
  stats: HeroStat[];
};

export function HeroSection({
  eyebrow,
  title,
  description,
  ctas,
  stats,
}: HeroSectionProps) {
  return (
    <section
      className="section-space relative scroll-mt-24 overflow-hidden border-b border-slate-200/80"
      id="hero"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[url('/images/hero/hero-bg.svg')] bg-cover bg-center bg-no-repeat"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/35 to-white/55"
      />
      <Container className="relative z-10">
        <div className="animate-enter">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl text-balance text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-slate-600 md:text-lg md:leading-8">
            {description}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            {ctas.map((cta, index) => {
              const baseClass =
                index === 0
                  ? "h-11 w-full rounded-md bg-brand-700 px-6 text-sm font-semibold text-white transition-colors duration-200 hover:bg-brand-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700 sm:min-w-40 sm:w-auto"
                  : "h-11 w-full rounded-md border border-slate-300 bg-white px-6 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500 sm:min-w-40 sm:w-auto";

              if (cta.href) {
                return (
                  <a
                    className={`${baseClass} inline-flex items-center justify-center`}
                    href={cta.href}
                    key={cta.label}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {cta.label}
                  </a>
                );
              }

              return (
                <button className={baseClass} key={cta.label}>
                  {cta.label}
                </button>
              );
            })}
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <article
                className="rounded-md border border-slate-200 bg-white p-5"
                key={stat.label}
              >
                <p className="font-mono text-2xl font-semibold text-brand-800">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
