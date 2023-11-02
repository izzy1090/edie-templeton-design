import { createContext, useState } from "react";

const GlobalStatesContext = createContext();

function GlobalStatesProvider({ children }){
    const [ isNavOpen, setIsOpen ] = useState(false);
    const [ isGalleryOpen, setIsGalleryOpen ] = useState(false);
    const [ imageToShow, setImageToShow ] = useState({});

    return <GlobalStatesContext.Provider value={{isNavOpen, setIsOpen, isGalleryOpen, setIsGalleryOpen, imageToShow, setImageToShow}}>
        {children}
    </GlobalStatesContext.Provider>

}

export { GlobalStatesProvider };
export default GlobalStatesContext;
