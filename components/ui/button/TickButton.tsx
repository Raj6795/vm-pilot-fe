import { iconButtonClass } from ".";
import TickIcon from "../icons/TickIcon";

export default function TickButton() {
  return (
    <button type="button" aria-label="Confirm" className={`${iconButtonClass}`}>
      <TickIcon />
    </button>
  );
}
