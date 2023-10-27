import NavMenu from "../components/navMenu";

function NavMenuPage(){

    const hamburger = <div className="hamburger"></div>
    const invertedHamburger = <div className="invertedHamburger"></div>

    const activeMenu = <div className="activeMenu">
        <a href="/">home</a>
        <a href="/about">about</a>
        <a href="/contact">contact</a>
    </div>

    return <NavMenu 
        hamburger={hamburger} 
        invertedHamburger={invertedHamburger}
        activeMenu={activeMenu}
    />
};

export default NavMenuPage;
