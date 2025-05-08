import { useDispatch } from "react-redux";
import css from "./Contact.module.css"
//import { deleteContact } from "../../redux/contactsSlice";
import { deleteContactThunk } from "../../redux/contactsOps";


           
export default function Contact ({ data: { id, name, number} }) {
    const dispatch = useDispatch()
    


 return (
    <div className={css.contact}>
        <p className={css.text}>{name}</p>
        <p className={css.text}>{number}</p>
        <button className={css.btn} onClick ={() => dispatch(deleteContactThunk(id))}>Delete</button>
    </div>
 )
}