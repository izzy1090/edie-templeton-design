import NavMenu from "../components/navMenu";

function NavMenuPage() {

    const menuItems = [
        {key: 0, value: 'about', path: '/about', id: 'about'},
        {key: 1, value: 'gallery', path: '/', id: 'gallery'},
        {key: 2, value: 'contact', path: '/contact', id: 'contact'}
    ];

    return <NavMenu menuItems={menuItems}/>
};

export default NavMenuPage;
