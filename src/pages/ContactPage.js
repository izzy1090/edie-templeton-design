import Contact from '../components/contact';

function ContactPage () {
    const contactForms = [
        { key: 0, label: 'First Name', id: 'name' }, 
        { key: 1, label: 'Last Name', id: 'name' }, 
        { key: 2, label: 'Email', id: 'email' },
        { key: 3, label: 'Subject', id: 'subject' },
        { key: 4, label: 'Message', id: 'message' } 
    ];

    const contactText = {email: 'ediesnyder@gmail.com', intro: "Need help with your home? Let's chat! Shoot me an email or fill out the contact form."};

    return <Contact contactForms={contactForms} contactText={contactText}/>
}

export default ContactPage;
