import NavMenu from "../components/navMenu";

function NavMenuPage(){

    const menuItems = [
        {key: 0, value: 'home', path: '/'},
        {key: 1, value: 'about', path: '/about'},
        {key: 2, value: 'contact', path: '/contact'}
    ]

    return <NavMenu menuItems={menuItems}/>
};

export default NavMenuPage;
