import { useEffect } from "react";
import useGlobalStates from "../hooks/use-globalStates.js";
import { ReactComponent as Logo } from '../assets/Mark.svg';
import useNavigation from "../hooks/use-navigation.js";

function NavMenu( { menuItems } ){

    const { isNavOpen, setIsNavOpen } = useGlobalStates();
    const { currentPath } = useNavigation();

    useEffect(()=> {
         
        const menuElements = document.querySelector('.desktopMenu');
        menuElements.classList.add('desktopMenuIntro');

        const homeMenu = document.getElementById('about');
        const galleryMenu = document.getElementById('gallery');
        const contactMenu = document.getElementById('contact');

        if (currentPath === '/')
        {
            galleryMenu.style.color = 'rgba(50, 50, 50, 50)';
        } else if (currentPath === '/about')
        {
            homeMenu.style.color = 'rgba(50, 50, 50, 50)';
        } else if (currentPath === '/contact')
        {
            contactMenu.style.color = 'rgba(50, 50, 50, 50)';
        }

        if (isNavOpen)
        {
            // sets up a click handler and passes in a click event
            const handler = (event) => {
                // init. a var to look for the click event target's className
                const clickedDiv = event.target.className;
                // if the class name is the mobileActiveMenu
                if (clickedDiv === 'mobileMenu' || event.key === 'Escape'){
                    // close the menu
                    setIsNavOpen(false);
                } 
            }
        
            document.addEventListener('click', handler);
            document.addEventListener('keydown', handler);

            return ()=>{
                document.removeEventListener('click', handler)
                document.removeEventListener('keydown', handler);
            }
        }
    }, [setIsNavOpen, isNavOpen, currentPath])

    const handleOpenCloseMenu = () => {
        setIsNavOpen(!isNavOpen);
    }

    const mobileLinkAnim = (destination) => {
        const mobileMenuItems = document.querySelectorAll('.mobileMenu div');
        mobileMenuItems.forEach((item, i)=>{
            item.classList.add('mobileMenuLink');
            item.addEventListener('animationend', ()=>{
                if (i === mobileMenuItems.length - 1){
                    item.style.opacity = 0;
                    const background = document.querySelector('.mobileMenu');
                    background.style.opacity = 0;
                    window.location.href = destination;
                }
            })
        })
    }   

    const mobileActiveMenu = menuItems.map((menuItem)=>{
        return <div key={menuItem.key} onClick={()=> mobileLinkAnim(menuItem.path)}>
            {menuItem.value}
        </div>
    })

    const desktopLinkAnim = (destination) => {
        const pageElements = document.querySelector('body');
        pageElements.classList.add('desktopMenuLink');
        pageElements.addEventListener('animationend', ()=>{
            window.location.href = destination;
        })
    }

    const renderedMenuItems = menuItems.map((menuItem)=>{
        return <div key={menuItem.key} style={{padding: '10px'}} 
            onClick={()=>desktopLinkAnim(menuItem.path)} id={menuItem.id}>
                {menuItem.value}
        </div>
    })

    return <>
        <div className={isNavOpen ? 'mobileMenuIntro' : 'mobileMenuExit'}>
            <Logo className="logo" id="mobileLogo" 
                style={isNavOpen ? {display: 'none'}: {cursor: 'pointer'}}
                onClick={handleOpenCloseMenu}/>
            {isNavOpen ? <div className="mobileMenu">{mobileActiveMenu}</div> : null}
        </div>
        <div className="desktopMenu">
            <div className="logoContainer">
            <Logo className="logo"/>
            <div className="logoCopy">
                <span>Edie</span>
                <span>Templeton</span>
                <span>Design</span>
            </div>
            </div>
            <div className="menuItemContainer menuItems">{renderedMenuItems}</div>
        </div>
    </>
}

export default NavMenu;
