import { createContext, useState } from "react";

const GlobalStatesContext = createContext();

function GlobalStatesProvider({ children }){
    const [ isNavOpen, setIsNavOpen ] = useState(false);
    const [ isLightboxOpen, setIsLightboxOpen ] = useState(false);
    const [ imageToShow, setImageToShow ] = useState({});

    return <GlobalStatesContext.Provider value={{isNavOpen, setIsNavOpen, isLightboxOpen, setIsLightboxOpen, imageToShow, setImageToShow}}>
        {children}
    </GlobalStatesContext.Provider>

}

export { GlobalStatesProvider };
export default GlobalStatesContext;
