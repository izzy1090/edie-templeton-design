import NavMenu from "../components/NavMenu.js";


function NavMenuPage(){

    const hamburger = <div className="hamburger"></div>
    const invertedHamburger = <div className="invertedHamburger"></div>

    const activeMenu = <div className="activeMenu">
        <div>home</div>
        <div>work</div>
        <div>about</div>
        <div>contact</div>
    </div>

    return <NavMenu 
        hamburger={hamburger} 
        invertedHamburger={invertedHamburger}
        activeMenu={activeMenu}
    />
};

export default NavMenuPage;