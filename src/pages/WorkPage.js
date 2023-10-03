import useGlobalStates from "../hooks/use-globalStates";
import GrammieKitchen from '../images/grammies-kitchen.jpg';
import ChineseCabinet from '../images/chinese-cabinet.jpg';
import LivingRoom1 from '../images/living-room1.jpg';
import LivingRoom2 from '../images/living-room2.jpg';

function Work () {
    const { isOpen } = useGlobalStates();

    const workContent = <>
        <img src={GrammieKitchen} width={500}></img>
        <img src={ChineseCabinet} width={500}></img>
        <img src={LivingRoom1} width={500}></img>
        <img src={LivingRoom2} width={500}></img>
    </>

    return <>{ isOpen ? null : workContent }</>
}

export default Work;
