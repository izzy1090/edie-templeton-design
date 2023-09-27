import { useState } from "react";

function NavMenu( { hamburger, invertedHamburger, activeMenu } ){
    const [isOpen, setIsOpen] = useState(false);
    
    const handleClick = () => {
        setIsOpen(!isOpen)  
    }

    // If the isOpen state is set to true
        // create a menu in the center of the screen
            // the menu should navigate around the site (i.e. home, work, contact, etc)
    // else display the homepage and navMenu as is
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
