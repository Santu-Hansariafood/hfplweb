import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const parseValue = (val) => {
  const m = String(val).match(/^([^\d]*)(\d+(?:\.\d+)?)([a-zA-Z+%]*)$/);
  if (!m) return { prefix: "", num: 0, suffix: String(val) };
  return { prefix: m[1] || "", num: parseFloat(m[2]), suffix: m[3] || "" };
};

export const CountUp = ({ value, duration = 1600, className = "" }) => {
  const { prefix, num, suffix } = parseValue(value);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start;
    let raf;
    const step = (t) => {
      if (!start) start = t;
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(num * eased);
      if (p < 1) raf = requestAnimationFrame(step);
      else setDisplay(num);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, num, duration]);

  const formatted = Number.isInteger(num)
    ? Math.round(display).toLocaleString()
    : display.toFixed(1);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
};
