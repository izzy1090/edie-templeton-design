import NavMenu from "../components/navMenu";

function NavMenuPage(){

    const menuItems = [
        {key: 0, value: 'home', path: '/'},
        {key: 1, value: 'gallery', path: '/gallery'},
        {key: 2, value: 'projects', path: '/projects'},
        {key: 3, value: 'contact', path: '/contact'}
    ]

    return <NavMenu menuItems={menuItems}/>
};

export default NavMenuPage;
