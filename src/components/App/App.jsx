import { useState } from "react";
import contactDate from "../../contact.json";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";

export default function App() {
  const [contacts, setContacts] = useState(contactDate);

  // const addContacts ()=>{}

  return (
    <div>
      <h1>Phonebook</h1>
      {/* <ContactForm /> */}
      <SearchBox />
      <ContactList contacts={contacts} />
    </div>
  );
}
