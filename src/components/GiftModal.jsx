import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import GiftIcon from "./GiftIcon";
import Icon from "./Icon";
import Modal, { ModalCloseButton } from "./Modal";
import { money } from "../lib/format";
import { payment } from "../data/gifts";

async function copyText(value) {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(value);
      return true;
    }
  } catch {
    /* cai no plano B abaixo */
  }

  try {
    const field = document.createElement("textarea");
    field.value = value;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.opacity = "0";
    document.body.appendChild(field);
    field.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(field);
    return ok;
  } catch {
    return false;
  }
}

/**
 * Conteudo do modal. Vive apenas enquanto o modal esta aberto e recebe uma
 * `key` por presente, assim o estado (copiado, envio) ja nasce limpo.
 */
function GiftPanel({ gift, onClose, onConfirm }) {
  const [copied, setCopied] = useState(null); // null | 'payload' | 'chave'
  const [status, setStatus] = useState("idle"); // idle | sending | done
  const timers = useRef([]);

  useEffect(() => {
    const pending = timers.current;
    return () => pending.forEach(clearTimeout);
  }, []);

  const copy = async (value, tag) => {
    const ok = await copyText(value);
    setCopied(ok ? tag : null);
    timers.current.push(setTimeout(() => setCopied(null), 2600));
  };

  const handleConfirm = () => {
    setStatus("sending");
    // Mock: sem back-end, apenas marcamos o item como escolhido nesta sessao.
    timers.current.push(
      setTimeout(() => {
        setStatus("done");
        onConfirm?.(gift);
      }, 900),
    );
  };

  return (
    <div className="mx-auto w-full max-w-lg overflow-hidden rounded-t-[2rem] border border-line bg-cream shadow-lift sm:rounded-[2.25rem]">
      {/* Cabeçalho */}
      <div className="relative flex items-center gap-4 border-b border-line bg-blush-50 p-5 sm:p-6">
        <span className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.35rem] bg-cream text-blush-500 shadow-soft">
          <GiftIcon name={gift.icon} className="h-9 w-9" />
        </span>

        <div className="min-w-0 flex-1">
          <h2 id="presente-titulo" className="truncate text-h4">
            {gift.name}
          </h2>
          <p className="tnum mt-1 font-display text-[1.4rem] leading-none text-blush-700">
            {money(gift.price)}
          </p>
        </div>

        <ModalCloseButton onClose={onClose} className="shrink-0" />
      </div>

      {status === "done" ? (
        /* ---------- Sucesso ---------- */
        <div className="p-7 text-center sm:p-9" role="status">
          <span className="mx-auto inline-flex h-16 w-16 animate-pop-in items-center justify-center rounded-full bg-leaf-100 text-leaf-700">
            <Icon name="check" size={28} strokeWidth={2} />
          </span>

          <h3 className="mt-5 text-h3">Presente registrado</h3>
          <p className="mx-auto mt-3 max-w-[38ch] text-body text-stone">
            Obrigado pela sua generosidade e carinho ❤
          </p>

          <Button onClick={onClose} size="lg" className="mt-7 w-full">
            Voltar para a lista
          </Button>
        </div>
      ) : (
        <>
          {/* ---------- Pix ---------- */}
          <div className="p-5 sm:p-6">
            <p className="flex items-center justify-center gap-2 text-mini font-medium uppercase tracking-[0.18em] text-leaf-700">
              <Icon name="pix" size={16} />
              Pagamento via Pix
            </p>

            {/* QR code */}
            <div className="mx-auto mt-4 w-fit rounded-[1.5rem] border border-line bg-cream p-3.5 shadow-soft">
              <img
                src={payment.qrSrc}
                alt={`QR code do Pix para presentear: ${gift.name}`}
                width={168}
                height={168}
                className="h-[9.5rem] w-[9.5rem] xs:h-[10.5rem] xs:w-[10.5rem]"
              />
            </div>

            {/* Copia e cola */}
            <div className="mt-5 rounded-[1.35rem] border border-line bg-blush-50 p-3.5">
              <p className="text-[0.66rem] font-medium uppercase tracking-[0.16em] text-stone">
                Pix copia e cola
              </p>

              <div className="mt-2 flex flex-col gap-2.5">
                <code className="line-clamp-2 break-all font-body text-[0.72rem] leading-relaxed text-stone">
                  {payment.payload}
                </code>

                <button
                  type="button"
                  onClick={() => copy(payment.payload, "payload")}
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-line bg-cream px-4 text-[0.7rem] font-medium uppercase tracking-[0.14em] text-ink transition-[transform,background-color] duration-200 ease-soft hover:bg-blush-50 active:scale-95"
                >
                  <Icon name={copied === "payload" ? "check" : "copy"} size={15} />
                  {copied === "payload" ? "Código copiado" : "Copiar código Pix"}
                </button>
              </div>
            </div>

            {/* Chave avulsa */}
            <div className="mt-3 flex flex-col gap-2.5 rounded-[1.35rem] border border-line bg-cream p-3.5 xs:flex-row xs:items-center">
              <div className="min-w-0 flex-1">
                <p className="text-[0.66rem] font-medium uppercase tracking-[0.16em] text-stone">
                  Chave Pix (celular)
                </p>
                <p className="tnum mt-1 truncate text-body text-ink">{payment.pixKey}</p>
                <p className="mt-0.5 truncate text-[0.72rem] text-stone">
                  {payment.pixHolder}
                </p>
              </div>

              <button
                type="button"
                onClick={() => copy(payment.pixKeyRaw, "chave")}
                aria-label="Copiar chave Pix"
                className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full border border-line px-4 text-[0.7rem] font-medium uppercase tracking-[0.14em] text-ink transition-[transform,background-color] duration-200 ease-soft hover:bg-blush-50 active:scale-95"
              >
                <Icon name={copied === "chave" ? "check" : "copy"} size={15} />
                {copied === "chave" ? "Copiada" : "Copiar"}
              </button>
            </div>

            <p aria-live="polite" className="sr-only">
              {copied === "payload" ? "Código Pix copiado." : ""}
              {copied === "chave" ? "Chave Pix copiada." : ""}
            </p>
          </div>

          {/* ---------- Ação ---------- */}
          <div className="border-t border-line bg-blush-50 p-5 sm:p-6">
            <Button
              onClick={handleConfirm}
              disabled={status === "sending"}
              size="lg"
              className="w-full"
            >
              {status === "sending" ? (
                <>
                  <span
                    aria-hidden="true"
                    className="h-4 w-4 animate-spin rounded-full border-2 border-cream/40 border-t-cream"
                  />
                  Registrando
                </>
              ) : (
                <>
                  <Icon name="heart" size={15} />
                  Já fiz o Pix
                </>
              )}
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export function GiftModal({ gift, open, onClose, onConfirm }) {
  if (!gift) return null;

  return (
    <Modal open={open} onClose={onClose} labelledBy="presente-titulo" panelClassName="sm:px-4">
      <GiftPanel key={gift.id} gift={gift} onClose={onClose} onConfirm={onConfirm} />
    </Modal>
  );
}

export default GiftModal;
