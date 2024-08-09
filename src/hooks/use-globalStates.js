import { useContext } from "react";
import GlobalStatesContext from "../context/globalStates.js";

function useGlobalStates(){
    return useContext(GlobalStatesContext);
}

export default useGlobalStates;
