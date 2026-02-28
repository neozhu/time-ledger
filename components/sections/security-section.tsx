import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

type SecuritySectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  badges: string[];
  points: string[];
};

export function SecuritySection({
  eyebrow,
  title,
  description,
  badges,
  points,
}: SecuritySectionProps) {
  return (
    <section
      className="section-space scroll-mt-24 border-b border-slate-200/80"
      id="security"
    >
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <div className="rounded-md border border-slate-200 bg-white p-6">
            <ul className="grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
              {badges.map((badge) => (
                <li
                  className="rounded-sm border border-slate-200 bg-slate-50 px-3 py-2 text-center"
                  key={badge}
                >
                  {badge}
                </li>
              ))}
            </ul>
          </div>
          <ul className="space-y-3">
            {points.map((point) => (
              <li
                className="rounded-md border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700"
                key={point}
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
