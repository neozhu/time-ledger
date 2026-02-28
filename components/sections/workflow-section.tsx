import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

type WorkflowStep = {
  title: string;
  detail: string;
};

type WorkflowSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  steps: WorkflowStep[];
};

export function WorkflowSection({
  eyebrow,
  title,
  description,
  steps,
}: WorkflowSectionProps) {
  return (
    <section
      className="section-space scroll-mt-24 border-b border-slate-200/80"
      id="workflow"
    >
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" aria-label={title}>
          {steps.map((step, index) => (
            <li
              className="relative rounded-md border border-slate-200 bg-white p-5"
              key={step.title}
            >
              <span className="font-mono text-xs font-medium text-brand-700">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-base font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{step.detail}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
