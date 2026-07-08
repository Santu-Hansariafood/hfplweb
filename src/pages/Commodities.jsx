import { PageHeader, Breadcrumb } from "../components/PageHeader";
import { COMMODITIES, CATEGORIES } from "../lib/constants";
import { Link } from "react-router-dom";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { m } from "framer-motion";
import { Reveal, RevealStagger, RevealItem } from "../components/Reveal";

const SHAPES = [
  { shape: "shape-leaf", accent: "#C48D3F", ring: true }, // Maize
  { shape: "shape-portrait-lg", accent: "#2C4C3B", ring: false }, // Soya Bean
  { shape: "shape-squircle", accent: "#C48D3F", ring: false }, // Wheat
  { shape: "shape-diagonal", accent: "#2C4C3B", ring: true }, // Millet
  { shape: "shape-blob", accent: "#C48D3F", ring: false }, // Mustard
  { shape: "shape-tall-arch", accent: "#2C4C3B", ring: true }, // Broken Rice
];

const CommodityCard = ({ c, i }) => {
  const cfg = SHAPES[i % SHAPES.length];
  const reverse = i % 2 === 1;

  return (
    <m.article
      data-testid={`commodity-${c.slug}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
        delay: (i % 3) * 0.08,
      }}
      className="group relative py-16 lg:py-24 border-b border-[#E5E0D8] last:border-b-0"
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${reverse ? "lg:[&>div:first-child]:order-2" : ""}`}
      >
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative">
            {cfg.ring && (
              <svg
                className="absolute inset-0 spin-slower pointer-events-none"
                viewBox="0 0 400 400"
                style={{
                  width: "108%",
                  height: "108%",
                  left: "-4%",
                  top: "-4%",
                }}
              >
                <circle
                  cx="200"
                  cy="200"
                  r="190"
                  fill="none"
                  stroke={cfg.accent}
                  strokeOpacity="0.35"
                  strokeWidth="1"
                  strokeDasharray="4 12"
                />
              </svg>
            )}

            <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 bg-[#FDFBF7] border border-[#E5E0D8] px-4 py-1.5 shadow-sm">
              <span className="text-[9px] tracking-[0.3em] uppercase text-[#C48D3F] flex items-center gap-1.5">
                <Sparkles size={10} /> {c.category}
              </span>
            </div>

            <span
              className="absolute -bottom-2 -right-2 w-4 h-4 rounded-full z-20 animate-float"
              style={{ backgroundColor: cfg.accent }}
            />

            <div
              className={`${cfg.shape} w-[280px] h-[380px] sm:w-[320px] sm:h-[420px] lg:w-[360px] lg:h-[460px] relative shimmer-overlay bg-[#F2F0EA]`}
            >
              <img
                src={c.image}
                alt={c.name}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-1400 ease-custom group-hover:scale-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 lg:pl-8">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-serif-display text-6xl lg:text-7xl leading-none text-[#C48D3F]/25 group-hover:text-[#C48D3F]/50 transition-colors duration-700">
              0{i + 1}
            </span>
            <div className="h-px flex-1 max-w-[80px] bg-[#E5E0D8]" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#4A4A4A]">
              Traded
            </span>
          </div>

          <h3 className="font-serif-display text-4xl lg:text-6xl text-[#1A1A1A] mb-6 leading-[0.95] tracking-tight">
            {c.name}
          </h3>

          <p className="text-base lg:text-lg text-[#4A4A4A] leading-relaxed max-w-2xl mb-8">
            {c.blurb}
          </p>

          <div className="flex flex-wrap gap-2 mb-10">
            {[
              "Origin: India",
              "Spot & Forward",
              "FSSAI Compliant",
              "Bulk / Bagged",
            ].map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1.5 border border-[#E5E0D8] text-[#4A4A4A] hover:border-[#C48D3F] hover:text-[#C48D3F] transition-colors cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#1A1A1A] text-[#FDFBF7] text-sm tracking-wide relative overflow-hidden group/btn"
          >
            <span className="absolute inset-0 bg-[#C48D3F] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-custom" />
            <span className="relative flex items-center gap-3">
              Enquire about {c.name}
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
              />
            </span>
          </Link>
        </div>
      </div>
    </m.article>
  );
};

const Commodities = () => {
  return (
    <div data-testid="commodities-page">
      <Breadcrumb current="Commodity Trading" />
      <PageHeader
        eyebrow="Commodity Trading"
        title="The grains, seeds and supplements we move."
        subtitle="A commodity market facilitates trading in soft commodities — corn, wheat, oil seeds, soybeans. Hansaria operates in spot and forward markets across the subcontinent."
      />

      <section className="px-6 md:px-12 lg:px-24 pb-16">
        <div>
          {COMMODITIES.map((c, i) => (
            <CommodityCard key={c.slug} c={c} i={i} />
          ))}
        </div>
      </section>

      <section className="bg-[#F2F0EA] px-6 md:px-12 lg:px-24 py-24 lg:py-32 grain-overlay">
        <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12">
          <div className="lg:col-span-6">
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#C48D3F] mb-4">
              Product families
            </div>
            <h2 className="font-serif-display text-4xl lg:text-5xl text-[#1A1A1A] tracking-tight leading-tight">
              Four categories. One disciplined book.
            </h2>
          </div>
        </Reveal>
        <RevealStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E5E0D8]">
          {CATEGORIES.map((cat, i) => (
            <RevealItem key={cat.name}>
              <div
                data-testid={`cat-${i}`}
                className="bg-[#FDFBF7] p-8 lg:p-10 hover:bg-[#2C4C3B] hover:text-[#FDFBF7] transition-all duration-500 group h-full"
              >
                <div className="text-[10px] tracking-[0.3em] uppercase text-[#C48D3F] mb-4">
                  0{i + 1}
                </div>
                <h3 className="font-serif-display text-2xl text-[#1A1A1A] group-hover:text-[#FDFBF7] mb-5 transition-colors duration-500">
                  {cat.name}
                </h3>
                <ul className="space-y-2 text-sm text-[#4A4A4A] group-hover:text-[#FDFBF7]/85 transition-colors duration-500">
                  {cat.items.map((it) => (
                    <li key={it} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-[#C48D3F]" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>
    </div>
  );
};

export default Commodities;
