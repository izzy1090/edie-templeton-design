import Contact from '../components/contact';

function ContactPage () {
    const contactForms = [
        { key: 0, placeholder: 'Name' }, 
        { key: 1, placeholder: 'Email' },
        { key: 2, placeholder: 'Subject' },
        { key: 3, placeholder: 'Message' } 
    ];

    return <Contact contactForms={contactForms}/>
}

export default ContactPage;
