import { createContext, useState } from "react";

const GlobalStatesContext = createContext();

function GlobalStatesProvider({ children }){
    const [isOpen, setIsOpen] = useState(false);

    return <GlobalStatesContext.Provider value={{isOpen, setIsOpen}}>{children}</GlobalStatesContext.Provider>

}

export { GlobalStatesProvider };
export default GlobalStatesContext;
