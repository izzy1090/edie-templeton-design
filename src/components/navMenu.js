import { useEffect } from "react";
import useGlobalStates from "../hooks/use-globalStates";

function NavMenu( { hamburger, invertedHamburger, activeMenu } ){

    const { isNavOpen, setIsOpen } = useGlobalStates();

        // useEffect so the web page is always looking for a click event
        useEffect(()=> {
            // sets up a click handler and passes in a click event
            const handler = (event) => {
                // init. a var to look for the click event target's className
                const clickedDev = event.target.className;
                // if the class name is the activeMenu
                if (clickedDev === 'activeMenu'){
                    // close the menu
                    setIsOpen(false)
                }
            }

            document.addEventListener('click', handler)
            
            return ()=>{
                document.removeEventListener('click', handler)
            }
            
        }, [setIsOpen])

    const handleClick = () => {
        setIsOpen(!isNavOpen);  
    }

    const openMenu = 
        <div className="menuTransitionIn">
        <span onClick={handleClick}>
            {invertedHamburger}
        </span>
            {activeMenu}
        </div>

    const closedMenu = 
        <div className={"menuTransitionOut"} onClick={handleClick}>
            {hamburger}
        </div>

    return <>
        { isNavOpen ? openMenu : closedMenu }
    </>
}

export default NavMenu;
