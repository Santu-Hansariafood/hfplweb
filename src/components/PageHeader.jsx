import { Link } from "react-router-dom";

export const PageHeader = ({ eyebrow, title, subtitle, image }) => {
  return (
    <section
      data-testid="page-header"
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden"
    >
      {image && (
        <>
          <div className="absolute inset-0 z-0">
            <img
              src={image}
              alt=""
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#FDFBF7]/85" />
          </div>
        </>
      )}
      <div className="relative z-10 px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
        <div className="lg:col-span-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-[#C48D3F]" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#C48D3F]">
              {eyebrow}
            </span>
          </div>
          <h1 className="font-serif-display text-5xl md:text-6xl lg:text-7xl text-[#1A1A1A] leading-[0.95] tracking-tight">
            {title}
          </h1>
        </div>
        {subtitle && (
          <div className="lg:col-span-4 lg:pl-8 lg:border-l lg:border-[#E5E0D8]">
            <p className="text-base text-[#4A4A4A] leading-relaxed">
              {subtitle}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export const Breadcrumb = ({ current }) => (
  <div className="px-6 md:px-12 lg:px-24 pt-28 pb-2">
    <div className="text-xs text-[#4A4A4A] tracking-wide">
      <Link to="/" className="hover:text-[#C48D3F] transition-colors">
        Home
      </Link>
      <span className="mx-2 text-[#C48D3F]">/</span>
      <span className="text-[#1A1A1A]">{current}</span>
    </div>
  </div>
);
