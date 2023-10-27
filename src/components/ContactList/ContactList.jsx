import css from './ContactList.module.css'
import { ContactListItem } from '../ContactListItem/ContactListItem'
 
export const ContactList = ({contacts, handleDelete}) => {
    return (
     <ul className={css.contactList}>
            {contacts.map(contact => (
                <ContactListItem
                key={contact.id}
                id={contact.id}
                name={contact.name}
                number={contact.number}
                handleDelete={() => handleDelete(contact.id)}
            />
            )
           
    )}
     </ul>
  
    )

}