import { useState } from "react";
import contactDate from "../../contact.json";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";

export default function App() {
  const [contacts, setContacts] = useState(contactDate);
  const [filter, setFilter] = useState("");

  const addContacts = newContacts => {
    setContacts(prevContacts => {
      return [...prevContacts, newContacts];
    });
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContacts} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContacts} />
    </div>
  );
}
