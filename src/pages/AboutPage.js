import useGlobalStates from "../hooks/use-globalStates";
import ChairAndRug from '../images/chair-and-rug_high-quality.jpg';
import SnyderLivingRoom from '../images/snyder-living-room_high-quality.jpg';

function AboutPage (){
    const { isNavOpen } = useGlobalStates();

    return <>
        <div style={isNavOpen ? { display: 'none'} : null}>
            <div className="banner">
                <img src={ChairAndRug} 
                    width={1333} 
                    height={2000}
                    id="chair-and-rug"
                    alt="Multiple shelves with books and various items along with a multi-colored rug."/>
                <img src={SnyderLivingRoom} 
                    width={3437} 
                    height={5155}
                    id="snyder-living-room"
                    alt="Multiple shelves with books and various items along with a multi-colored rug."/>
            </div>
            <div className="bio">
                <p>
                    Growing up with an antique collector for a grandmother and artist for a mother, beautiful interiors have always been the backdrop for Edie’s life. 
                    After graduating with a degree in art history, Edie decided to move to New York City to pursue a career in interior design. 
                </p><br/>
                <p>
                    She has worked for some of the top high-end residential designers, such as Lucien Rees Roberts and Juile Hillman, for over a decade. At the center of her core values is sustainability and circularity. 
                    Incorporating these values into every aspect of her design philosophy, Edie crafts interiors that not only captivate with their timeless elegance but also stand as testaments to environmental consciousness. 
                    From the ornate tapestries adorning her grandmother's walls to the vibrant strokes of her mother's canvases, Edie's childhood was steeped in creativity and aesthetic appreciation. 
                    These early influences ignited a passion for transforming spaces into havens of beauty and comfort.
                </p><br/>
                    Armed with a degree in art history, Edie embarked on a journey to New York City, the epicenter of design innovation. 
                    Here, amidst the hustle and bustle of the city that never sleeps, she honed her skills under the mentorship of luminaries in the field. 
                    Working alongside visionaries like Lucien Rees Roberts and Juile Hillman, Edie immersed herself in the intricacies of high-end residential design, refining her craft with each project.
                    Yet, beyond the glitz and glamour of luxury interiors, Edie remains grounded in her commitment to sustainability and circularity. 
                <p><br/> 
                    For her, design is not just about creating visually stunning spaces but also about leaving a positive impact on the planet. 
                    Whether sourcing eco-friendly materials or repurposing vintage finds, she seamlessly integrates sustainability into her designs, ensuring that each creation reflects both style and conscience.
                    In Edie's world, every room tells a story—a narrative woven with threads of heritage, innovation, and ethical stewardship. 
                    With her keen eye for detail and unwavering dedication to her craft, she continues to redefine the boundaries of interior design, one sustainable masterpiece at a time.
                </p>
            </div>
        </div>
    </>
}

export default AboutPage;
