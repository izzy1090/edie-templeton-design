import useGlobalStates from "../hooks/use-globalStates";

function Contact () {
    const { isOpen } = useGlobalStates();

    return <> { isOpen ? null : "Contact" } </>
}

export default Contact;
