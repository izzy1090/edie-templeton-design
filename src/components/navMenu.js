import { useEffect } from "react";
import useGlobalStates from "../hooks/use-globalStates";

function NavMenu( { hamburger, invertedHamburger, activeMenu } ){

    const { isNavOpen, setIsOpen } = useGlobalStates();

        // useEffect so the web page is always looking for a click event
        useEffect(()=> {
            // sets up a click handler and passes in a click event
            const handler = (event) => {
                // init. a var to look for the click event target's className
                const clickedDiv = event.target.className;
                // if the class name is the activeMenu
                if (clickedDiv === 'activeMenu'){
                    // close the menu
                    setIsOpen(false)
                }
            }

            document.addEventListener('click', handler)

            return ()=>{
                document.removeEventListener('click', handler)
            }
            
        }, [setIsOpen])

    const handleOpenCloseMenu = () => {
        setIsOpen(!isNavOpen)
    }

    return <>
        <div className={isNavOpen ? "menuTransitionIn" : "menuTransitionOut"}>
        <span onClick={handleOpenCloseMenu}>
            {isNavOpen ? invertedHamburger : hamburger}
        </span>
            {isNavOpen ? activeMenu : null}
        </div>
    </>
}

export default NavMenu;
