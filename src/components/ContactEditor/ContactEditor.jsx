import  {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/contactSlice";
import { getContact } from "redux/selectors";
import css from "../ContactEditor/ContactEditor.module.css"
import Notiflix from 'notiflix';

const ContactEditor=() => {
const dispatch = useDispatch();
const contact = useSelector(getContact);

const [name, setName] = useState("");
const [number, setNumber] = useState("");

const handleChange = e => {

	switch(e.target.name) {
		case 'name':
			setName(e.target.value);
			break;

			case 'number':
				setNumber(e.target.value);
				break;

				default:
					return;
	}
}
const reset = () => {
	setName('');
	setNumber('');
 };

const handleSubmit = e => {
	e.preventDefault();
	const form = e.target;

	const isAdded = contact.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isAdded) {
      Notiflix.Notify.warning(`${name} is already in contacts`);
      return 1;
    }

	const object = {name: form.elements.name.value , number: form.elements.number.value};
	dispatch(addContact(object))
	form.reset()
	reset();
}

	return (
		<form className={css.form} onSubmit={handleSubmit}>
			<div>
			<label className={css.label} htmlFor="name">Name</label >
			<input
			className={css.input}
				type="text" 
				name="name"
				pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
				title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
				required
				onChange={handleChange}
				value={name}
				id="name"
/>
			</div>
			<div>
			<label className={css.label} htmlFor="number">Number</label>
			<input
			className={css.input}
				type="tel"
				name="number"
				pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
				title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
				required
				id="number"
				onChange={handleChange}
				value={number}
			/>
			</div>
<button className={css.form__button} type="submit">Add Contact</button>
		</form>
	)
};

export default ContactEditor;