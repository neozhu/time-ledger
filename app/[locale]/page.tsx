import { getTranslations } from "next-intl/server";
import { CapabilityMatrixSection } from "@/components/sections/capability-matrix-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PainPointsSection } from "@/components/sections/pain-points-section";
import { ProductScreensSection } from "@/components/sections/product-screens-section";
import { ReliabilitySection } from "@/components/sections/reliability-section";
import { SecuritySection } from "@/components/sections/security-section";
import { UseCasesSection } from "@/components/sections/use-cases-section";
import { WorkflowSection } from "@/components/sections/workflow-section";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Link } from "@/i18n/navigation";

type LocalePageProps = {
  params: Promise<{ locale: "zh" | "en" }>;
};

function BrandIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="#111111">
        <rect height="3" rx="1.5" width="16" x="4" y="3" />
        <rect height="17" rx="1.5" width="3" x="10" y="3" />
        <rect height="3" rx="1.5" width="10" x="10" y="17" />
      </g>
    </svg>
  );
}

export default async function LocaleLandingPage({ params }: LocalePageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "landing" });
  const nav = t.raw("nav") as { links: { href: string; label: string }[] };
  const hero = t.raw("hero") as {
    eyebrow: string;
    title: string;
    description: string;
    ctas: { label: string; href?: string }[];
    stats: { label: string; value: string }[];
  };
  const painPoints = t.raw("painPoints") as {
    eyebrow: string;
    title: string;
    description: string;
    items: { title: string; description: string }[];
  };
  const workflow = t.raw("workflow") as {
    eyebrow: string;
    title: string;
    description: string;
    steps: { title: string; detail: string }[];
  };
  const capabilityMatrix = t.raw("capabilityMatrix") as {
    eyebrow: string;
    title: string;
    description: string;
    ariaLabel: string;
    headers: { module: string; capability: string };
    rows: { module: string; capability: string }[];
  };
  const useCases = t.raw("useCases") as {
    eyebrow: string;
    title: string;
    description: string;
    items: { title: string; summary: string; bullets: string[] }[];
  };
  const screens = t.raw("screens") as {
    eyebrow: string;
    title: string;
    description: string;
    placeholderLabel: string;
    items: { title: string; caption: string; imageSrc: string }[];
  };
  const security = t.raw("security") as {
    eyebrow: string;
    title: string;
    description: string;
    badges: string[];
    points: string[];
  };
  const reliability = t.raw("reliability") as {
    eyebrow: string;
    title: string;
    description: string;
    points: string[];
  };
  const finalCta = t.raw("finalCta") as {
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
  const meta = t.raw("meta") as {
    siteName: string;
    languageLabel: string;
    switchToZh: string;
    switchToEn: string;
    skipToMain: string;
  };

  const switchLabel = locale === "zh" ? meta.switchToEn : meta.switchToZh;
  const switchLocale = locale === "zh" ? "en" : "zh";

  return (
    <main className="bg-app" id="main-content">
      <a
        className="sr-only z-30 rounded-sm bg-white px-3 py-2 text-sm font-medium text-slate-900 focus:not-sr-only focus:absolute focus:left-4 focus:top-4"
        href="#hero"
      >
        {meta.skipToMain}
      </a>
      <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <Container className="py-3 md:flex md:h-16 md:items-center md:justify-between md:py-0">
          <Link
            aria-label={meta.siteName}
            className="group inline-flex items-center gap-2 md:flex-none"
            href="/"
            locale={locale}
          >
            <BrandIcon className="transition-transform duration-300 ease-out group-hover:-translate-y-0.5" />
            <span className="text-sm font-semibold tracking-[0.1em] text-slate-900 uppercase transition-colors duration-300 group-hover:text-brand-800">
              {meta.siteName}
            </span>
          </Link>
          <div className="mt-3 flex items-center gap-3 md:mt-0 md:min-w-0 md:flex-1 md:justify-end">
            <nav
              aria-label={meta.languageLabel}
              className="min-w-0 flex-1 overflow-x-auto whitespace-nowrap [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:flex-none md:overflow-visible"
            >
              <div className="inline-flex items-center gap-4 pr-1 md:gap-6 md:pr-0">
                {nav.links.map((item) => {
                  const isExternal = item.href.startsWith("http");

                  return (
                    <a
                      className="inline-flex text-sm text-slate-600 transition-[color,transform] duration-200 hover:-translate-y-px hover:text-slate-900"
                      href={item.href}
                      key={item.href}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      target={isExternal ? "_blank" : undefined}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>
            </nav>
            <Link
              className="shrink-0 rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition-[background-color,border-color,transform,box-shadow] duration-200 hover:-translate-y-px hover:border-slate-400 hover:bg-slate-50 hover:shadow"
              href="/"
              locale={switchLocale}
            >
              {switchLabel}
            </Link>
          </div>
        </Container>
      </header>

      <Reveal delayMs={20} once={false}>
        <HeroSection {...hero} />
      </Reveal>
      <Reveal delayMs={40} once={false}>
        <PainPointsSection {...painPoints} />
      </Reveal>
      <Reveal delayMs={60} once={false}>
        <WorkflowSection {...workflow} />
      </Reveal>
      <Reveal delayMs={80} once={false}>
        <CapabilityMatrixSection {...capabilityMatrix} />
      </Reveal>
      <Reveal delayMs={100} once={false}>
        <UseCasesSection {...useCases} />
      </Reveal>
      <Reveal delayMs={120} once={false}>
        <ProductScreensSection {...screens} />
      </Reveal>
      <Reveal delayMs={140} once={false}>
        <SecuritySection {...security} />
      </Reveal>
      <Reveal delayMs={160} once={false}>
        <ReliabilitySection {...reliability} />
      </Reveal>
      <Reveal delayMs={180} once={false}>
        <FinalCtaSection {...finalCta} />
      </Reveal>
    </main>
  );
}
