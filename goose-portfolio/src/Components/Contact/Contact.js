import React from 'react';
import './Contact.css';
import ContactTitle from './Contact.png'
import ContactIcons from './ContactIcons.js'
import GooseFooter from './GooseAnimation.gif';
function Contact () {

    return (
      <section id="Contact">
         <div className="Contact">
         <div classsName="contact-container">
         <img src={ContactTitle} alt="ContactTitle" className="ContactTitle"/>
         <img src={GooseFooter} alt="GooseFooter" className="GooseFooter"/>
          
         </div>
            <div className='contact-row'>
             <div>
                <div className='contact-content'>
                    <div className='contact-slider'>
                        {ContactIcons.map((contact, index) => (
                            <div className='contact-card' key={index}>
                            <a href = {contact.link} target="_blank" rel="noopener noreferrer">
                                <img src={contact.icon} alt={contact.name} />
                                </a>
                                 <div className="contact-name">
                                    <h3>{contact.name}</h3>
                                </div>
                             </div>
                        ))}     
                    </div>
                </div>
             </div>
        </div>
    </div>
 
    </section>
    );

}

export default Contact;