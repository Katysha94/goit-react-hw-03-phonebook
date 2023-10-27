import { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from './ContactList/ContactList';
import { FilterContact } from './FilterContact/FilterContact';
import { Section } from './Section/Section';
export class App extends Component  {

 state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
 };
  

  handleNewContact = (newContact) => {
   const existingContact = this.state.contacts.find(contact => contact.name === newContact.name);
    if (existingContact) {
      alert(`Contact ${newContact.name} already exists!`);
    } else {
       this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact]
    }));
    } 
   
  }

  handleChange = (evt) => {
    const { name, value } = evt.target;
    this.setState({[name]: value})
  }
   
  getFilteredContacts = () => {
    const filterContacts = this.state.contacts.filter(contact => {
      return contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    });
    return filterContacts;
  }

    handleDelete = (evt) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== evt),
    }))
 

  }

  render() {
     return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        background: 'linear-gradient( 45deg, #8cc8e6, #f1f389)'
      }}
       >
         <Section
         title="Phonebook"
         />
         <ContactForm
           newContact={this.handleNewContact}
         />
         <Section
         title="Contacts"
         />
         <FilterContact
           filter={this.filter}
           handleChange={this.handleChange}
         />
         <ContactList
           contacts={this.getFilteredContacts()}
           handleDelete={this.handleDelete} />
    </div>
  );
};

  }
 
 