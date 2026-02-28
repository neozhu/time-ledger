import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

type PainPoint = {
  title: string;
  description: string;
};

type PainPointsSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: PainPoint[];
};

export function PainPointsSection({
  eyebrow,
  title,
  description,
  items,
}: PainPointsSectionProps) {
  return (
    <section
      className="section-space scroll-mt-24 border-b border-slate-200/80"
      id="pain-points"
    >
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {items.map((item, index) => (
            <article
              className={`reveal-item rounded-md border border-slate-200 bg-white p-6 ${
                index === 0
                  ? "reveal-delay-3"
                  : index === 1
                    ? "reveal-delay-4"
                    : "reveal-delay-5"
              }`}
              key={item.title}
            >
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
