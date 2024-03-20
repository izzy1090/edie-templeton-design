import useGlobalStates from "../hooks/use-globalStates";
import BannerImage from '../images/Homepage-high-quality.jpg';

function AboutPage (){
    const { isNavOpen } = useGlobalStates();

    return <>
        <div style={isNavOpen ? { display: 'none'} : null}>
            <div preload='auto' className="banner">
                <img src={BannerImage} 
                    width={1333} 
                    height={2000}
                    className="bannerImage"
                    alt="Multiple shelves with books and various items along with a multi-colored rug."/>
            </div>
            <div className="bio">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit sed ullamcorper morbi tincidunt ornare. Orci eu lobortis elementum nibh tellus molestie nunc non. Vitae nunc sed velit dignissim sodales. Penatibus et magnis dis parturient montes nascetur ridiculus. Purus sit amet luctus venenatis. Consectetur libero id faucibus nisl tincidunt eget nullam non nisi. Fringilla ut morbi tincidunt augue. Pellentesque eu tincidunt tortor aliquam. Odio euismod lacinia at quis risus sed vulputate odio. Nec nam aliquam sem et tortor consequat id porta. Semper auctor neque vitae tempus quam pellentesque nec. Vitae turpis massa sed elementum tempus egestas. Pharetra diam sit amet nisl suscipit adipiscing. At quis risus sed vulputate. Velit sed ullamcorper morbi tincidunt ornare."
            </div>
        </div>
    </>
}

export default AboutPage;
