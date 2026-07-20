import { PageHeader, Breadcrumb } from "../components/PageHeader";
import { SERVICES } from "../lib/constants";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Check,
  Globe2,
  LineChart,
  Handshake,
  Compass,
  Package,
  Truck,
  FileCheck,
} from "lucide-react";
import { m, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal, RevealStagger, RevealItem } from "../components/Reveal";
import { optimizeImageUrl, generateSrcset } from "../lib/utils";

const SERVICE_ICONS = [Globe2, LineChart, Handshake];
const STEP_ICONS = {
  "01": Compass,
  "02": Package,
  "03": Truck,
  "04": FileCheck,
};

const ParallaxImage = ({ src, alt }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1, 1.05]);
  return (
    <div ref={ref} className="aspect-[4/3] overflow-hidden relative">
      <m.img
        src={optimizeImageUrl(src, { width: 1200, quality: 75 })}
        srcSet={generateSrcset(src)}
        sizes="(max-width: 1024px) 100vw, 50vw"
        alt={alt}
        width={1200}
        height={900}
        loading="lazy"
        decoding="async"
        style={{ y, scale }}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/25 via-transparent to-transparent" />
    </div>
  );
};

const ServiceRow = ({ s, i }) => {
  const Icon = SERVICE_ICONS[i] || Globe2;
  const reverse = i % 2 === 1;
  return (
    <m.article
      data-testid={`service-detail-${i}`}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center group ${
        reverse ? "lg:[&>div:first-child]:order-2" : ""
      }`}
    >
      <div className="lg:col-span-6 relative">
        <svg
          className="absolute inset-0 -m-4 pointer-events-none opacity-30"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          style={{ width: "calc(100% + 32px)", height: "calc(100% + 32px)" }}
        >
          <rect
            x="0.5"
            y="0.5"
            width="99"
            height="99"
            fill="none"
            stroke="#C48D3F"
            strokeWidth="0.3"
            strokeDasharray="1 2"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        <ParallaxImage src={s.image} alt={s.title} />
      </div>

      <div className="lg:col-span-6">
        <div className="flex items-start gap-6 mb-6">
          <m.div
            initial={{ rotate: -8, scale: 0.8, opacity: 0 }}
            whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="w-16 h-16 border border-[#E5E0D8] flex items-center justify-center bg-[#FDFBF7] group-hover:bg-[#C48D3F] group-hover:border-[#C48D3F] group-hover:rotate-6 transition-all duration-500"
          >
            <Icon
              size={22}
              className="text-[#C48D3F] group-hover:text-[#FDFBF7] transition-colors duration-500"
            />
          </m.div>

          <div className="flex-1">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="font-serif-display text-6xl lg:text-7xl leading-none text-[#C48D3F]/25 group-hover:text-[#C48D3F]/70 transition-colors duration-700"
            >
              0{i + 1}
            </m.div>
          </div>
        </div>

        <h2 className="font-serif-display text-4xl lg:text-5xl text-[#1A1A1A] tracking-tight leading-tight mb-5">
          {s.title}
        </h2>
        <p className="text-[#4A4A4A] leading-relaxed mb-8">{s.desc}</p>

        <ul className="space-y-3 mb-8">
          {[
            "Dedicated relationship managers",
            "Pre-shipment inspection and quality conformance",
            "Transparent contract documentation",
          ].map((p, k) => (
            <m.li
              key={p}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + k * 0.1 }}
              className="flex items-start gap-3 text-sm text-[#1A1A1A]"
            >
              <span className="w-5 h-5 rounded-full bg-[#C48D3F]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check size={11} className="text-[#C48D3F]" />
              </span>
              {p}
            </m.li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 text-sm border-b border-[#1A1A1A] pb-1 hover:border-[#C48D3F] hover:text-[#C48D3F] hover:gap-4 transition-all duration-500"
        >
          Discuss your requirement <ArrowUpRight size={14} />
        </Link>
      </div>
    </m.article>
  );
};

const Services = () => {
  const steps = [
    {
      n: "01",
      t: "Discover",
      d: "Understand your specification, volume and timeline.",
    },
    { n: "02", t: "Source", d: "Match origins, lock pricing, secure quality." },
    { n: "03", t: "Move", d: "Coordinate inland, port and ocean logistics." },
    {
      n: "04",
      t: "Settle",
      d: "Documentation, payment and post-shipment support.",
    },
  ];

  return (
    <div data-testid="services-page">
      <Breadcrumb current="Services" />
      <PageHeader
        eyebrow="Our Services"
        title="Information. Execution. Settlement."
        subtitle="Three things our counterparties expect from us — and three things we deliver, every single contract."
      />

      <section className="px-6 md:px-12 lg:px-24 pb-24 lg:pb-32 space-y-24 lg:space-y-32">
        {SERVICES.map((s, i) => (
          <ServiceRow key={s.title} s={s} i={i} />
        ))}
      </section>

      <section className="bg-[#2C4C3B] text-[#FDFBF7] px-6 md:px-12 lg:px-24 py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#C48D3F]/8 blur-3xl animate-blob pointer-events-none" />
        <div
          className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-[#FDFBF7]/5 blur-3xl animate-blob pointer-events-none"
          style={{ animationDelay: "3s" }}
        />

        <Reveal className="relative max-w-3xl">
          <div className="text-[10px] tracking-[0.3em] uppercase text-[#C48D3F] mb-6">
            Engagement model
          </div>
          <h2 className="font-serif-display text-4xl lg:text-5xl tracking-tight leading-tight">
            How we work with <em className="italic text-[#C48D3F]">you.</em>
          </h2>
        </Reveal>

        <div className="relative mt-16 lg:mt-20">
          <div className="hidden lg:block absolute left-0 right-0 top-8 h-px">
            <m.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              style={{
                transformOrigin: "left",
                backgroundImage:
                  "linear-gradient(to right, #C48D3F 50%, transparent 50%)",
                backgroundSize: "12px 1px",
                backgroundRepeat: "repeat-x",
              }}
              className="h-full"
            />
          </div>

          <RevealStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
            {steps.map((step, _i) => {
              const Icon = STEP_ICONS[step.n];
              return (
                <RevealItem key={step.n}>
                  <m.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    data-testid={`step-${step.n}`}
                    className="relative group"
                  >
                    <div className="hidden lg:flex absolute -top-1 left-0 w-16 h-16 items-center justify-center">
                      <span className="w-4 h-4 rounded-full bg-[#C48D3F] relative">
                        <span className="absolute inset-0 rounded-full bg-[#C48D3F] animate-ping opacity-40" />
                      </span>
                    </div>

                    <div className="pt-20 lg:pt-14 pl-0">
                      <div className="flex items-baseline gap-4 mb-4">
                        <div className="font-serif-display text-6xl text-[#C48D3F] leading-none transition-transform duration-500 group-hover:scale-110 origin-left inline-block">
                          {step.n}
                        </div>
                        {Icon && (
                          <div className="w-10 h-10 border border-[#FDFBF7]/25 flex items-center justify-center group-hover:border-[#C48D3F] group-hover:rotate-6 transition-all duration-500">
                            <Icon size={16} className="text-[#C48D3F]" />
                          </div>
                        )}
                      </div>
                      <div className="font-serif-display text-2xl mt-2 mb-3 group-hover:text-[#C48D3F] transition-colors duration-500">
                        {step.t}
                      </div>
                      <p className="text-sm text-[#FDFBF7]/75 leading-relaxed">
                        {step.d}
                      </p>
                    </div>
                  </m.div>
                </RevealItem>
              );
            })}
          </RevealStagger>
        </div>
      </section>
    </div>
  );
};

export default Services;
