import NavMenu from "../components/navMenu.js";

function NavMenuPage() {

    const menuItems = [
        {key: 0, value: 'About', path: '/about', id: 'about'},
        {key: 1, value: 'Gallery', path: '/', id: 'gallery'},
        {key: 2, value: 'Inspiration', path: '/inspiration', id: 'inspiration'},
        {key: 3, value: 'Contact', path: '/contact', id: 'contact'}
    ];

    return <NavMenu menuItems={menuItems}/>
};

export default NavMenuPage;
