import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

type CapabilityRow = {
  module: string;
  capability: string;
};

type CapabilityMatrixSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  headers: {
    module: string;
    capability: string;
  };
  rows: CapabilityRow[];
  ariaLabel: string;
};

export function CapabilityMatrixSection({
  eyebrow,
  title,
  description,
  headers,
  rows,
  ariaLabel,
}: CapabilityMatrixSectionProps) {
  return (
    <section
      className="section-space scroll-mt-24 border-b border-slate-200/80"
      id="capability-matrix"
    >
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className="overflow-x-auto rounded-md border border-slate-200 bg-white">
          <table
            className="min-w-[640px] w-full border-collapse text-left"
            aria-label={ariaLabel}
          >
            <thead>
              <tr className="bg-slate-50 text-xs uppercase tracking-[0.12em] text-slate-500">
                <th className="px-4 py-3 font-semibold">{headers.module}</th>
                <th className="px-4 py-3 font-semibold">{headers.capability}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr className="border-t border-slate-200" key={row.module}>
                  <th className="px-4 py-4 text-sm font-semibold text-slate-900">
                    {row.module}
                  </th>
                  <td className="px-4 py-4 text-sm text-slate-600">{row.capability}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}
