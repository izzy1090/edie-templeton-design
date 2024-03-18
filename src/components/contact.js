import { useState } from "react";
import useGlobalStates from "../hooks/use-globalStates";

function Contact ( { contactForms } ) {

    const { isNavOpen } = useGlobalStates();
    // eslint-disable-next-line
    const [result, setResult] = useState("");
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

    // Includes instructions to send the email using Web3Forms
    const handleSubmit = async (event) =>{
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "e3b608b7-d6d8-4e89-93a2-93fff94922be");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) 
        {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else 
        {
            console.log("Error", data);
            setResult(data.message);
        }
        // Resets the submission form back to it's original values
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
    
    return <div className="contactContainer" style={isNavOpen ? { display: 'none'} : null}>
        <div className="contactBody">
        <div className="contactIntro">
            Need help with your home? Let's chat! 
            Shoot me an email or fill out the contact form.
            <a className="email" href="mailto:ediesnyder@gmail.com" 
                target="_blank" rel="noreferrer">
                ediesnyder@gmail.com
            </a>
            <div className="line"></div>
        </div>
            <form onSubmit={handleSubmit}> 
                {taggedForms}
                <button className="submitButton" type="submit">Submit</button>
            </form>
        </div>
    </div>
}

export default Contact;
