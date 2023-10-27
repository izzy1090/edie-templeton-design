import { useContext } from "react";
import GlobalStatesContext from "../context/globalStates";

function useGlobalStates(){
    return useContext(GlobalStatesContext);
}

export default useGlobalStates;