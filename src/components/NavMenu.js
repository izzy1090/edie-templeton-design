import { useEffect, useState } from "react";

function NavMenu( { hamburger, invertedHamburger, activeMenu } ){
    const [isOpen, setIsOpen] = useState(false);

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

    if (isOpen) {
        return <>
            <div onClick={handleClick}>{invertedHamburger}</div>
            {activeMenu}
        </>
    } else if (!isOpen) {
        return <>
            <div onClick={handleClick}>{hamburger}</div>
        </>
    }
}

export default NavMenu;
