import css from "../Contact/Contact.module.css"
import { deleteContact } from "redux/contactSlice";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types"

const Contact = ({contact}) => {
const dispatch = useDispatch()
const onDeleteContact  = () => {dispatch(deleteContact(contact.id))}

	return (
	<li className={css.contact}>
		<p className={css.name}>{contact.name} :</p>
		<p className={css.number}>{contact.number}</p>
		<button className={css.contact__button} type="button" onClick={onDeleteContact}>Delete</button>
	</li>
	)
		
};

Contact.propTypes={
	contact:PropTypes.shape({
		 name:PropTypes.string,
		 number:PropTypes.string,
		 id:PropTypes.string
	})
}

export default Contact