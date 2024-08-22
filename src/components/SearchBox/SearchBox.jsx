import css from "./SearchBox.module.css";

export default function SearchBox({ value, onFilter }) {
  return (
    <div>
      <p>Find contact by name</p>
      <input
        type="text"
        value={value}
        onChange={evt => onFilter(evt.target.value)}
      />
    </div>
  );
}
