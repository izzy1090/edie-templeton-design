import { useState } from "react";

function Contact ( { contactForms } ) {

    const [ submissionText, setSubmissionText ] = useState({
        First: '',
        Last: '',
        Email: '',
        Subject: '',
        Message: ''
    });

    const handleChange = (event)=>{
        event.preventDefault();
        // Deconstruct the "name" and "value" properties from the event.target associated with the input / textarea
        const { name, value } = event.target;

        // Spread existing submissions into key/value pairs
        // Then add at the end of the object the latest event.target passed into input / textarea field
        setSubmissionText({
            ...submissionText, 
            [name]: value
        })
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        console.log(submissionText);
        setSubmissionText({
            First: '',
            Last: '',
            Email: '',
            Subject: '',
            Message: ''
        });
    }

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
                        <input name="First" 
                            value={submissionText.First} 
                            onChange={handleChange}/>
                </div>
                <div key={contactArray[1].key} 
                    id={contactArray[1].id}
                    className="formContainer">
                        {contactArray[1].label}
                        <input name="Last" 
                            value={submissionText.Last} 
                            onChange={handleChange}/>
                </div>
            </div>
        } else if (contactArray[i].id === 'email') 
        {
            return <div key={contactArray[i].key}
                id={contactArray[i].id} 
                className="formContainer">
                    {contactArray[i].label}
                <input name="Email"
                    value={submissionText.Email}
                    onChange={handleChange}/>
            </div>
        } else if (contactArray[i].id === 'subject') 
        {
            return <div key={contactArray[i].key}
                id={contactArray[i].id} 
                className="formContainer">
                    {contactArray[i].label}
                <input name="Subject"
                    value={submissionText.Subject}
                    onChange={handleChange}/>
            </div>
        }  else if (contactArray[i].id === 'message')
        {
            return <div key={contactArray[i].key}
                id={contactArray[i].id} 
                className="formContainer">
                    {contactArray[i].label}
                    <textarea name="Message"
                        value={submissionText.Message} 
                        onChange={handleChange}/>
            </div>
        }
    });
    
    return <div className="contactContainer">
        <div className="contactBody">
            <form onSubmit={handleSubmit}> 
                {taggedForms}
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
}

export default Contact;
