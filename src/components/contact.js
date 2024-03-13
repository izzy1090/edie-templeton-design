function Contact ( { contactForms } ) {
    const contactArray = [];
    // eslint-disable-next-line
    const taggedForms = contactForms.map((form, i)=>{

        const isLast = form.label === 'Last Name';
        contactArray.push(form);

        if (isLast) 
        {
            return <div key={i} className="nameContainer">
                <div key={contactArray[0].key} 
                    id={contactArray[0].id}
                    className="formContainer">
                        {contactArray[0].label}
                        <input/>
                </div>
                <div key={contactArray[1].key} 
                    id={contactArray[1].id}
                    className="formContainer">
                        {contactArray[1].label}
                        <input/>
                </div>
            </div>
        } else if (contactArray[i].id === 'email' || contactArray[i].id === 'subject') 
        {
            return <div key={contactArray[i].key}
                id={contactArray[i].id} 
                className="formContainer">
                    {contactArray[i].label}
                <input/>
            </div>
        } else if (contactArray[i].id === 'message')
        {
            return <div key={contactArray[i].key}
                id={contactArray[i].id} 
                className="formContainer">
                    {contactArray[i].label}
                <form>
                    <textarea/>
                </form>
            </div>
        }

    });
    
    return <div className="contactContainer">
        <div className="contactBody">
            {taggedForms}
        </div>
    </div>
}

export default Contact;
