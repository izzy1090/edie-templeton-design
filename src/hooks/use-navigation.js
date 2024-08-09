import { useContext } from "react";
import NavigationContext from "../context/navigation.js";

function useNavigation(){
    return useContext(NavigationContext);
}

export default useNavigation;
