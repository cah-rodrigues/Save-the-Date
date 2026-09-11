import { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useScrollLock } from "../hooks/useScrollLock";
import Icon from "./Icon";

const FOCUSABLE =
  'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

/**
 * Modal acessivel: trava o scroll, fecha no Esc e no clique do fundo,
 * mantem o foco dentro e devolve o foco ao elemento de origem ao sair.
 */
export function Modal({
  open,
  onClose,
  labelledBy,
  children,
  panelClassName = "",
  scrimClassName = "bg-ink/65",
}) {
  const panelRef = useRef(null);
  const lastFocused = useRef(null);

  useScrollLock(open);

  useEffect(() => {
    if (!open) return;
    lastFocused.current = document.activeElement;

    const frame = requestAnimationFrame(() => {
      const panel = panelRef.current;
      if (!panel) return;
      const target = panel.querySelector("[data-autofocus]") ?? panel.querySelector(FOCUSABLE) ?? panel;
      target.focus({ preventScroll: true });
    });

    return () => {
      cancelAnimationFrame(frame);
      const previous = lastFocused.current;
      if (previous instanceof HTMLElement) previous.focus({ preventScroll: true });
    };
  }, [open]);

  const onKeyDown = useCallback(
    (event) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const panel = panelRef.current;
      if (!panel) return;

      const items = [...panel.querySelectorAll(FOCUSABLE)].filter(
        (el) => el.offsetParent !== null || el === document.activeElement,
      );
      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    },
    [onClose],
  );

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby={labelledBy}
      onKeyDown={onKeyDown}
    >
      <button
        type="button"
        aria-label="Fechar"
        onClick={onClose}
        className={`absolute inset-0 cursor-default backdrop-blur-[3px] animate-fade-up ${scrimClassName}`}
      />

      <div
        ref={panelRef}
        tabIndex={-1}
        className={`relative z-10 max-h-[92dvh] w-full overflow-y-auto overscroll-contain outline-none animate-sheet-up ${panelClassName}`}
      >
        {children}
      </div>
    </div>,
    document.body,
  );
}

export function ModalCloseButton({ onClose, className = "", tone = "ink" }) {
  const tones = {
    ink: "bg-cream text-ink hover:bg-blush-50 border-line",
    light: "bg-ink/75 text-cream hover:bg-ink border-cream/40",
  };

  return (
    <button
      type="button"
      onClick={onClose}
      aria-label="Fechar"
      className={`inline-flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-sm transition-[background-color,transform] duration-200 ease-soft active:scale-95 ${tones[tone]} ${className}`}
    >
      <Icon name="close" size={18} />
    </button>
  );
}

export default Modal;
