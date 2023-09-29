import { useEffect } from "react";
import useGlobalStates from "../hooks/use-globalStates";

function NavMenu( { hamburger, invertedHamburger, activeMenu } ){
    const { isOpen, setIsOpen } = useGlobalStates();

        // useEffect so that the web page is always looking for the click event
        useEffect(()=>{
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
            
        },[])

    const handleClick = () => {
        setIsOpen(!isOpen);  
    }

    const activatedMenu = <><div onClick={handleClick}>{invertedHamburger}</div>{activeMenu}</>
    const inactiveMenu = <div onClick={handleClick}>{hamburger}</div>

    return <>
        {isOpen ? activatedMenu : inactiveMenu}
    </>
}

export default NavMenu;
