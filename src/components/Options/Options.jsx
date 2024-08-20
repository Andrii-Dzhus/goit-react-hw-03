import css from "./Options.module.css";

export default function Options({ onLeaveFeedback, reset, resetTotal }) {
  return (
    <div className={css.con}>
      <button onClick={() => onLeaveFeedback("good")}>Good</button>
      <button onClick={() => onLeaveFeedback("neutral")}>Neutral</button>
      <button onClick={() => onLeaveFeedback("bad")}>Bad</button>
      {resetTotal > 0 && <button onClick={reset}>Reset</button>}
    </div>
  );
}
