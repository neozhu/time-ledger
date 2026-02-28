import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

type ReliabilitySectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
};

export function ReliabilitySection({
  eyebrow,
  title,
  description,
  points,
}: ReliabilitySectionProps) {
  return (
    <section
      className="section-space scroll-mt-24 border-b border-slate-200/80"
      id="reliability"
    >
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <ul className="grid gap-4 md:grid-cols-2">
          {points.map((point, index) => (
            <li
              className={`reveal-item rounded-md border border-slate-200 bg-white p-6 text-sm leading-6 text-slate-700 ${
                index % 2 === 0 ? "reveal-delay-3" : "reveal-delay-4"
              }`}
              key={point}
            >
              {point}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
