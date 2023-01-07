import ContactList from "./ContactList/ContactList";
import ContactEditor from "./ContactEditor/ContactEditor";
import Filter from "./Filter/Filter";



export function App() {
  // const [contacts, setContacts] = useState(() => {
  //   const savedContacts = window.localStorage.getItem('contacts');
  //   if(savedContacts !== null){
  //    const  parsedContacts = JSON.parse(savedContacts);
  //    return parsedContacts; 
  //   }
  //   return [];
  // });

  // useEffect(()=> {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts))
  // }, [contacts])

  return (
    <div className="container">
      <h1 className="title">Phonebook</h1>
    <ContactEditor />
    <Filter />
    <h2 className="title">Contacts</h2>
    <ContactList />
    </div>
  )
};