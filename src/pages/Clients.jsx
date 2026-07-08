import { PageHeader, Breadcrumb } from "../components/PageHeader";
import { CLIENTS } from "../lib/constants";
import { RevealStagger, RevealItem } from "../components/Reveal";

const HANDSHAKE =
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzZ8MHwxfHNlYXJjaHwzfHxidXNpbmVzcyUyMG1lZXRpbmclMjBjb3Jwb3JhdGUlMjBoYW5kc2hha2V8ZW58MHx8fHwxNzgyNzk2Mjc2fDA&ixlib=rb-4.1.0&q=85";

const Clients = () => {
  return (
    <div data-testid="clients-page">
      <Breadcrumb current="Clients" />
      <PageHeader
        eyebrow="Our Clients"
        title="Relationships built one contract at a time."
        subtitle="From integrated processors to single-mill family businesses — we serve the full spectrum of Indian agribusiness."
      />

      <section className="px-6 md:px-12 lg:px-24 pb-24 lg:pb-32">
        <RevealStagger className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-[#E5E0D8]">
          {CLIENTS.map((c, i) => (
            <RevealItem key={c}>
              <div
                data-testid={`client-${i}`}
                className="bg-[#FDFBF7] aspect-[4/3] flex items-center justify-center p-6 hover:bg-[#2C4C3B] hover:text-[#FDFBF7] transition-all duration-500 group cursor-pointer relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-[#C48D3F] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-custom" />
                <span className="font-serif-display text-xl lg:text-2xl text-[#1A1A1A] group-hover:text-[#FDFBF7] text-center relative z-10 transition-colors duration-500">
                  {c}
                </span>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>

      <section className="bg-[#F2F0EA] px-6 md:px-12 lg:px-24 py-24 lg:py-32 grain-overlay">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <img
              src={HANDSHAKE}
              alt=""
              loading="lazy"
              decoding="async"
              className="w-full h-[480px] object-cover"
            />
          </div>
          <div className="lg:col-span-6 space-y-6">
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#C48D3F]">
              Testimonial
            </div>
            <p className="font-serif-display text-3xl lg:text-4xl text-[#1A1A1A] italic leading-tight">
              &ldquo;Hansaria&rsquo;s desk doesn&rsquo;t just sell us a cargo —
              they tell us when not to buy. That&rsquo;s rare in this
              trade.&rdquo;
            </p>
            <div className="pt-6 border-t border-[#E5E0D8]">
              <div className="font-serif-display text-xl text-[#1A1A1A]">
                Head of Procurement
              </div>
              <div className="text-sm text-[#4A4A4A]">
                Leading South-Indian Feed Manufacturer
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
