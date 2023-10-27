import css from './ContactListIte.module.css'

export const ContactListItem = ({ id, name, number, handleDelete })  => {
    return (
        <li
            className={css.contactListItem}
            id={id}>
            {name}: {number}
            
            <button
            className={css.contactListBtn}
            type='button'
            onClick={handleDelete}
            >Delete
            </button>
        </li>
    )
}