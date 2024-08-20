import css from "./Contact.module.css";

export default function Contact({ name, number }) {
  return (
    <div className={css.contact}>
      <div className={css.contactInfo}>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button className={css.deleteButton}>Delete</button>
    </div>
  );
}
