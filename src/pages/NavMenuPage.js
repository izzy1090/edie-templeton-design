import NavMenu from "../components/navMenu.js";

function NavMenuPage() {

    const menuItems = [
        {key: 0, value: 'about', path: '/about', id: 'about'},
        {key: 1, value: 'gallery', path: '/', id: 'gallery'},
        // {key: 2, value: 'inspiration', path: '/inspiration', id: 'inspiration'},
        {key: 3, value: 'contact', path: '/contact', id: 'contact'}
    ];

    return <NavMenu menuItems={menuItems}/>
};

export default NavMenuPage;
