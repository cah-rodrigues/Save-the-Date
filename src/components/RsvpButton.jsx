import Button from "./Button";
import Icon from "./Icon";
import { rsvpUrl } from "../data/site";

/**
 * Botao unico de confirmacao. A confirmacao acontece fora do site (Vou TB),
 * entao todos os pontos de entrada levam para o mesmo lugar, em nova aba.
 */
export function RsvpButton({ children = "Confirmar presença", showExternalIcon = true, ...rest }) {
  return (
    <Button href={rsvpUrl} target="_blank" rel="noreferrer" {...rest}>
      {children}
      {showExternalIcon ? (
        <Icon name="external" size={14} className="opacity-70" />
      ) : null}
    </Button>
  );
}

export default RsvpButton;
