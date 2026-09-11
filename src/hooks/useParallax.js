import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "./useHashRoute";

/**
 * Parallax vertical sutil. Escreve apenas a variavel `--parallax`,
 * consumida pela classe `.parallax` (translate3d), sem reflow.
 *
 * @param {number} amplitude deslocamento maximo em px
 */
export function useParallax(amplitude = 40) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const viewport = window.innerHeight || 1;
      const progress = (rect.top + rect.height / 2 - viewport / 2) / viewport;
      const offset = Math.max(-1.2, Math.min(1.2, progress)) * amplitude;
      el.style.setProperty("--parallax", `${offset.toFixed(2)}px`);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [amplitude]);

  return ref;
}
