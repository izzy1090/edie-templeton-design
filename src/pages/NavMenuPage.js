import NavMenu from "../components/navMenu.js";

function NavMenuPage() {

    const menuItems = [
        {key: 0, value: 'about', path: '/about', id: 'about'},
        {key: 1, value: 'gallery', path: '/', id: 'gallery'},
        {key: 2, value: 'contact', path: '/contact', id: 'contact'},
        // {key: 3, value: 'instagram', path: '/instagram', id: 'instagram'}
    ];

    return <NavMenu menuItems={menuItems}/>
};

export default NavMenuPage;
