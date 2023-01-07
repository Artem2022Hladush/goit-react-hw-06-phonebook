import { useSelector, useDispatch } from "react-redux";
import { changeValue } from "redux/filterSlice";
import { getFilter } from "redux/selectors";
import css from "../Filter/Filter.module.css"

const Filter = () => {
const filterValue = useSelector(getFilter);
const dispatch = useDispatch();

const onChange = evt => {
	dispatch(changeValue(evt.target.value));
 };

return (
<div className={css.box}>
<label className={css.title__filter} htmlFor="filter">
      Fynd contacts by name 
		<input 
		className={css.input__filter}
		id="filter"
		type="text" 
		value={filterValue} 
		onChange={onChange}
		/>
   </label>
</div>
)
}

export default Filter;