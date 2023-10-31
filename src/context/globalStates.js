import { createContext, useState } from "react";

const GlobalStatesContext = createContext();

function GlobalStatesProvider({ children }){
    const [isNavOpen, setIsOpen] = useState(false);

    return <GlobalStatesContext.Provider value={{isNavOpen, setIsOpen}}>
        {children}
    </GlobalStatesContext.Provider>

}

export { GlobalStatesProvider };
export default GlobalStatesContext;
