import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

type UseCase = {
  title: string;
  summary: string;
  bullets: string[];
};

type UseCasesSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: UseCase[];
};

export function UseCasesSection({
  eyebrow,
  title,
  description,
  items,
}: UseCasesSectionProps) {
  return (
    <section
      className="section-space scroll-mt-24 border-b border-slate-200/80"
      id="use-cases"
    >
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className="grid gap-4 lg:grid-cols-2">
          {items.map((item) => (
            <article
              className="rounded-md border border-slate-200 bg-white p-6"
              key={item.title}
            >
              <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.summary}</p>
              <ul className="mt-4 space-y-2">
                {item.bullets.map((bullet) => (
                  <li
                    className="flex items-start gap-2 text-sm text-slate-700"
                    key={bullet}
                  >
                    <span
                      aria-hidden="true"
                      className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-700"
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
