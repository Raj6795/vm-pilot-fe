import { iconButtonClass } from ".";
import TrashIcon from "../icons/TrashIcon";

export default function TrashButton() {
  return (
    <button type="button" aria-label="Delete" className={`${iconButtonClass}`}>
      <TrashIcon />
    </button>
  );
}
