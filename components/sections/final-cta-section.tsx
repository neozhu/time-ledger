import { Container } from "@/components/ui/container";
import Image from "next/image";

type FinalCtaSectionProps = {
  title: string;
  description: string;
  ctas: string[];
  contactTitle: string;
  contacts: { label: string; value: string; href?: string; imageSrc?: string }[];
  positioning: {
    negativeTitle: string;
    negative: string[];
    positive: string;
  };
};

export function FinalCtaSection({
  title,
  description,
  ctas,
  contactTitle,
  contacts,
  positioning,
}: FinalCtaSectionProps) {
  const qrContact = contacts.find((contact) => contact.imageSrc);
  const textContacts = contacts.filter((contact) => !contact.imageSrc);

  return (
    <section className="section-space scroll-mt-24" id="final-cta">
      <Container>
        <div className="rounded-lg border border-slate-200 bg-white px-6 py-12 text-center md:px-14">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-7 text-slate-600 md:text-lg">
            {description}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            {ctas.map((cta, index) => (
              <button
                className={
                  index === 0
                    ? "h-11 w-full rounded-md bg-brand-700 px-6 text-sm font-semibold text-white transition-colors duration-200 hover:bg-brand-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700 sm:min-w-40 sm:w-auto"
                    : "h-11 w-full rounded-md border border-slate-300 bg-white px-6 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500 sm:min-w-40 sm:w-auto"
                }
                key={cta}
              >
                {cta}
              </button>
            ))}
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)]">
            <div className="rounded-md border border-slate-200 bg-slate-50 p-6 text-left">
              <p className="text-sm font-semibold text-slate-900">{contactTitle}</p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {textContacts.map((contact) => (
                  <li
                    className="flex min-h-28 flex-col justify-between rounded-sm border border-slate-200 bg-white px-4 py-3"
                    key={contact.label}
                  >
                    <p className="text-xs uppercase tracking-[0.1em] text-slate-500">
                      {contact.label}
                    </p>
                    {contact.href ? (
                      <a
                        className="mt-2 inline-block text-sm font-medium text-brand-800 underline-offset-2 transition-colors duration-200 hover:text-brand-900 hover:underline"
                        href={contact.href}
                        rel={
                          contact.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        target={contact.href.startsWith("http") ? "_blank" : undefined}
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="mt-2 text-sm font-medium text-slate-800">
                        {contact.value}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            {qrContact?.imageSrc ? (
              <aside className="flex items-center justify-center p-2 lg:p-0">
                <Image
                  alt={qrContact.label}
                  className="h-auto w-40 sm:w-48"
                  height={192}
                  src={qrContact.imageSrc}
                  width={192}
                />
              </aside>
            ) : null}
          </div>
          <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white text-left">
            <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
              <div className="bg-slate-50 p-5 md:p-6">
                <p className="text-sm font-semibold text-slate-900">
                  {positioning.negativeTitle}
                </p>
                <ul className="mt-3 space-y-2">
                  {positioning.negative.map((item) => (
                    <li
                      className="flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700"
                      key={item}
                    >
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-full bg-slate-400"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-brand-50 to-white p-5 md:p-6">
                <p className="text-sm font-semibold text-brand-700">核心定位</p>
                <p className="mt-2 text-base font-semibold leading-7 text-brand-800 md:text-lg">
                  {positioning.positive}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
