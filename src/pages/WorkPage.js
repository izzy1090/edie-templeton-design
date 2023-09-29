import useGlobalStates from "../hooks/use-globalStates";

function Work () {
    const { isOpen } = useGlobalStates();

    return <>{ isOpen ? null : "Work" }</>
}

export default Work;
