import { useEffect } from "react";
import useGlobalStates from "../hooks/use-globalStates";

function About ( { images, bios } ) {
    const { isNavOpen } = useGlobalStates();
    
    useEffect(()=>{
        window.addEventListener("load", ()=>{
            setTimeout(()=>{
                const bio = document.querySelector('#about-content');
                bio.style.opacity = 1;
                bio.style.transform = 'translateY(-2px)';
                bio.style.transition = 'opacity 1s ease, transform 1s ease';
            }, 200);
        })
    }, []);
    
    const renderedImages = images.map((image)=>{
        return <img key={image.key}
            src={image.image} 
            width={`${image.width}px`} 
            height={`${image.height}px`}
            id={image.id}
            alt={image.alt}/>
    })

    const renderedBios = bios.map((bio)=>{
        return <div key={bio.key} id={bio.id}>
            <p>
                {bio.paragraph}
            </p><br/>
        </div>
    })

    return <>
        <div id="about-content" style={isNavOpen ? { display: 'none'} : {opacity: 0}}>
            <div className="banner">
                {renderedImages}
            </div>
            <div className="bio">
                {renderedBios}
            </div>
        </div>
    </>
}

export default About;
