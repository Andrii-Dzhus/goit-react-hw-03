import styles from "./ContactList.module.css";
import Contact from "../Contact/Contact";

export default function ContactList({ contacts }) {
  return (
    <ul className={styles.contactList}>
      {contacts.map(contact => (
        <li key={contact.id}>
          <Contact name={contact.name} number={contact.number} />
        </li>
      ))}
    </ul>
  );
}
