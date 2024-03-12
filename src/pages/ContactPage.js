import Contact from '../components/contact';

function ContactPage () {
    const contactForms = [
        { key: 0, label: 'First Name', id: 'name' }, 
        { key: 1, label: 'Last Name', id: 'name' }, 
        { key: 2, label: 'Email', id: "generalDetails" },
        { key: 3, label: 'Subject', id: "generalDetails" },
        { key: 4, label: 'Message', id: "generalDetails" } 
    ];

    return <Contact contactForms={contactForms}/>
}

export default ContactPage;
