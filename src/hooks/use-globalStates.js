import { useContext } from "react";
import GlobalStatesContext from "../context/globalStates";

function useNavigation(){
    return useContext(GlobalStatesContext);
}

export default useNavigation;
