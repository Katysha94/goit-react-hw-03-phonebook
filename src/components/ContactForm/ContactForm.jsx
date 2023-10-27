import css from './ContactForm.module.css';
import { Component } from 'react';
import { nanoid } from 'nanoid'


export class ContactForm extends Component {
    
    
    state = {
    name: '',
    number: '',
  };


    handleSubmit = (evt) => {
        evt.preventDefault();
        const addContact = {
            id: nanoid(),
            name: this.state.name,
            number: this.state.number,
        }
      this.props.newContact(addContact);
      
      const form = evt.currentTarget;
      form.reset();
      this.setState({
        name: '',
        number: '',
      });
    }

    handleInputChange = (evt) => {
        const { name, value } = evt.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        const { name, number } = this.state;
       
        return (
          <div>
        <form 
        className={css.contactForm}
        onSubmit={this.handleSubmit}>
        <label
        className={css.contactFormLabel}
        htmlFor="name">Name</label>
          <input
          className={css.contactFormInput}
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={this.handleInputChange}
          pattern={
            "^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          }
          required
        />
         <label
        className={css.contactFormLabel}
        htmlFor="number">Number</label>
        <input
          type="tel"
          name="number"
          className={css.contactFormInput}
          id="number"
          value={number}
          onChange={this.handleInputChange}
          pattern={
            '\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}'
          }
          required
        />
        <button type="submit" className={css.contactFormBtn}>
          Add contact
        </button>
      </form>
         </div>   
        )
    }
}

