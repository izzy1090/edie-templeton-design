function Contact ( { contactForms } ) {

    const taggedForms = contactForms.map((form)=>{
        const isName = form.id === 'name';
        const nameArray = []
        if (isName) nameArray.push(form);
        return <div style={{display: 'flex', flexDirection: 'row'}}><span id={form.id}>{nameArray[0]}{nameArray}</span></div>
        // else return <span id="contactInfo">{form.label}</span>
    });

    // const fullName = document.querySelectorAll('#name');
    // const contactInfo = document.querySelectorAll('#contactInfo');


    

    return <div className="contactContainer">
        <div className="contactForms">
            {taggedForms}
        </div>
    </div>
}

export default Contact;
