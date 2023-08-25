import React from 'react';
import './Contact.css';
import ContactTitle from './Contact.png'

function Contact (props) {

    return (
      <section id="Contact">
         <div className="Contact">
        <header className={props.className}>
         <img src={ContactTitle} alt="ContactTitle" className="ContactTitle"/>
          </header>
         </div>
        </section>
    );

  
  export default Contact;