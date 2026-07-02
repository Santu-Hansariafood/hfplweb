import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? Math.min(1, scrolled / height) : 0);
      setVisible(scrolled > 400);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // circle circumference for progress ring: r = 22
  const R = 22;
  const C = 2 * Math.PI * R;

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          data-testid="scroll-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.94 }}
          className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 z-40 w-14 h-14 group"
        >
          {/* Ring progress */}
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r={R} fill="#1A1A1A" stroke="#E5E0D8" strokeWidth="2" />
            <circle
              cx="25"
              cy="25"
              r={R}
              fill="transparent"
              stroke="#C48D3F"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={C}
              strokeDashoffset={C - progress * C}
              style={{ transition: "stroke-dashoffset 120ms linear" }}
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center">
            <ArrowUp size={18} className="text-[#C48D3F] transition-transform duration-500 group-hover:-translate-y-0.5" />
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
