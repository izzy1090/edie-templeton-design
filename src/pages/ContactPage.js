import Contact from '../components/contact';

function ContactPage () {
    const contactForms = [
        { key: 0, label: 'First Name', id: 'name' }, 
        { key: 1, label: 'Last Name', id: 'name' }, 
        { key: 2, label: 'Email', id: 'email' },
        { key: 3, label: 'Subject', id: 'subject' },
        { key: 4, label: 'Message', id: 'message' } 
    ];

    return <Contact contactForms={contactForms}/>
}

export default ContactPage;
