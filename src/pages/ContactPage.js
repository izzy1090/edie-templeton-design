import Contact from '../components/contact.js';

function ContactPage () {
    const contactForms = [
        { key: 0, label: 'First Name', id: 'name' }, 
        { key: 1, label: 'Last Name', id: 'name' }, 
        { key: 2, label: 'Email', id: 'email' },
        { key: 3, label: 'Subject', id: 'subject' },
        { key: 4, label: 'Message', id: 'message' } 
    ];

    const contactText = {email: 'ediesnyder@gmail.com', intro: "Looking to learn more about interior design services? Please complete the form below or send me an email at:"};

    return <Contact contactForms={contactForms} contactText={contactText}/>
}

export default ContactPage;
