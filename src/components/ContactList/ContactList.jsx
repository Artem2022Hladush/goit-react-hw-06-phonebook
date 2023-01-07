import css from "../ContactList/ContactLIst.module.css"
import Contact from "components/Contact/Contact";

import { getContact, getFilter } from "redux/selectors";
import { useSelector } from "react-redux";

const ContactList = () => {
const contacts = useSelector(getContact);
const filter = useSelector(getFilter);

const normalizedFilter = filter.toLowerCase();
const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

return (
	<ul className={css.contact__list}>{visibleContacts.map(contact => 
	<Contact 
	key={contact.id}
		contact={contact}
	/>
)}
</ul>
)
};

export default ContactList;