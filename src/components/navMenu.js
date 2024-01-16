import { useEffect } from "react";
import useGlobalStates from "../hooks/use-globalStates";

function NavMenu( { menuItems } ){

    const { isNavOpen, setIsOpen } = useGlobalStates();

    const desktopLinkAnimation = (destination) => {
        const pageElements = document.querySelector('body')
        pageElements.classList.add('menuPageExit');
        pageElements.addEventListener('animationend', ()=>{
            window.location.href = destination;
        })
    }

    const hamburger = <div className="hamburger"></div>
    const invertedHamburger = <div className="invertedHamburger"></div>

    window.addEventListener('load', ()=>{
        const menuElements = document.querySelector('.desktopMenu');
        menuElements.classList.add('menuPageIntro');
    })

    // useEffect so the web page is always looking for a click event
    useEffect(()=> {
        if (isNavOpen)
        {
            // sets up a click handler and passes in a click event
            const handler = (event) => {
                // init. a var to look for the click event target's className
                const clickedDiv = event.target.className;
                // if the class name is the mobileActiveMenu
                if (clickedDiv === 'mobileActiveMenu' || event.key === 'Escape'){
                    // close the menu
                    setIsOpen(false);
                } 
            }
        
            document.addEventListener('click', handler);
            document.addEventListener('keydown', handler);

            return ()=>{
                document.removeEventListener('click', handler)
                document.removeEventListener('keydown', handler);
            }
        }
    }, [setIsOpen, isNavOpen])

    const handleOpenCloseMenu = () => {
        setIsOpen(!isNavOpen)
    }

    // TODO: Need to do a link animation specific to mobile
    const mobileActiveMenu = menuItems.map((menuItem)=>{
        return <div key={menuItem.key}>
            {menuItem.value}
        </div>
    })

    const renderedMenuItems = menuItems.map((menuItem)=>{
        return <div key={menuItem.key} style={{padding: '10px'}} 
            onClick={()=>desktopLinkAnimation(menuItem.path)}>
                {menuItem.value}
        </div>
    })

    return <>
        <div className={isNavOpen ? "menuTransitionIn" : "menuTransitionOut"}>
        <span onClick={handleOpenCloseMenu}>
            {isNavOpen ? invertedHamburger : hamburger}
        </span>
            {isNavOpen ? <div className="mobileActiveMenu">{mobileActiveMenu}</div> : null}
        </div>
        <div className="desktopMenu">{renderedMenuItems}</div>
    </>
}

export default NavMenu;
