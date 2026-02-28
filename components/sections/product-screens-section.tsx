import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import Image from "next/image";

type Screen = {
  title: string;
  caption: string;
  imageSrc: string;
};

type ProductScreensSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: Screen[];
  placeholderLabel: string;
};

export function ProductScreensSection({
  eyebrow,
  title,
  description,
  items,
  placeholderLabel: _placeholderLabel,
}: ProductScreensSectionProps) {
  return (
    <section
      className="section-space scroll-mt-24 border-b border-slate-200/80"
      id="screens"
    >
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className="grid gap-4 lg:grid-cols-3">
          {items.map((item) => (
            <article
              className="overflow-hidden rounded-md border border-slate-200 bg-white"
              key={item.title}
            >
              <div className="relative aspect-video w-full bg-slate-50">
                <Image
                  alt={item.title}
                  className="object-contain"
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  src={item.imageSrc}
                />
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
