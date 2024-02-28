function Contact ( { contactForms } ) {

    const renderedContactForms = contactForms.map((form)=>{
        return <div key={form.key} className="formsContainer">
            <input placeholder={form.placeholder}></input>
        </div>
    });


    return <div className="contactContainer">
        <div className="contactForms">{renderedContactForms}</div>
    </div>
}

export default Contact;
