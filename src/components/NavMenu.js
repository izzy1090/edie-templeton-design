import { useState } from "react";

function NavMenu( { hamburger, invertedHamburger, activeMenu } ){
    const [isOpen, setIsOpen] = useState(false);
    
    const handleClick = () => {
        setIsOpen(!isOpen)  
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
