import { PageHeader, Breadcrumb } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";
import { Calendar } from "lucide-react";

export const LegalPage = ({ eyebrow, title, subtitle, lastUpdated, sections, testId }) => {
  return (
    <div data-testid={testId}>
      <Breadcrumb current={title} />
      <PageHeader eyebrow={eyebrow} title={title} subtitle={subtitle} />

      <section className="px-6 md:px-12 lg:px-24 pb-24 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-32 space-y-8">
              <div className="border border-[#E5E0D8] p-5 bg-[#FDFBF7]">
                <div className="flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-[#C48D3F] mb-3">
                  <Calendar size={12} /> Last updated
                </div>
                <div className="font-serif-display text-lg text-[#1A1A1A]">{lastUpdated}</div>
              </div>

              <div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-[#C48D3F] mb-4">On this page</div>
                <ul className="space-y-2.5 text-sm">
                  {sections.map((s, i) => (
                    <li key={s.heading}>
                      <a
                        href={`#section-${i + 1}`}
                        className="text-[#4A4A4A] hover:text-[#C48D3F] transition-colors flex items-start gap-3 group"
                      >
                        <span className="text-[#C48D3F] group-hover:translate-x-1 transition-transform">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span>{s.heading}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          <article className="lg:col-span-9 space-y-16">
            {sections.map((s, i) => {
              const paragraphs = Array.isArray(s.body) ? s.body : [s.body];
              return (
                <Reveal key={s.heading} delay={i * 0.05}>
                  <section id={`section-${i + 1}`} data-testid={`legal-section-${i + 1}`} className="scroll-mt-32">
                    <div className="flex items-baseline gap-5 mb-6">
                      <span className="font-serif-display text-4xl lg:text-5xl text-[#C48D3F]/30 leading-none">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h2 className="font-serif-display text-2xl lg:text-3xl text-[#1A1A1A] leading-tight">
                        {s.heading}
                      </h2>
                    </div>
                    <div className="pl-0 lg:pl-16 space-y-4 text-[#4A4A4A] leading-relaxed text-base">
                      {paragraphs.map((p, k) => (
                        <p key={k}>{p}</p>
                      ))}
                    </div>
                  </section>
                </Reveal>
              );
            })}

            <div className="pl-0 lg:pl-16 pt-6 border-t border-[#E5E0D8]">
              <p className="text-xs text-[#4A4A4A]">
                Questions about this page? Write to{" "}
                <a href="mailto:info@hansariafood.com" className="text-[#C48D3F] hover:underline">
                  info@hansariafood.com
                </a>{" "}
                and our team will get back within one business day.
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};
