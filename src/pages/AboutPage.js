import useGlobalStates from "../hooks/use-globalStates";

function About (){
    const { isOpen } = useGlobalStates();

    return <> { isOpen ? null : "About" } </>
}

export default About;
