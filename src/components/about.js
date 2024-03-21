import { useState } from "react";
import useGlobalStates from "../hooks/use-globalStates";

function About ( { images, bios } ) {
    const { isNavOpen } = useGlobalStates();
    const [ isLoading, setIsLoading ] = useState(false);
    
    const handleImageLoad = () => {
        // Uses the spread operator to push ELs into an array
        // then .every sees if everything in the array evaluates to true
        const allImagesLoaded = [...document.querySelectorAll('img')].every(img => img.complete);
        console.log('hey')
        // if they're completed loading, then set loading to false
        if (allImagesLoaded) 
        {
            setIsLoading(false);
        }
    };

    const renderedImages = images.map((image)=>{
        return <img key={image.key}
            src={image.image} 
            width={`${image.width}px`} 
            height={`${image.height}px`}
            id={image.id}
            alt={image.alt}
            onLoad={handleImageLoad}/>
    })

    const renderedBios = bios.map((bio)=>{
        return <div key={bio.key} id={bio.id}>
            <p>
                {bio.paragraph}
            </p><br/>
        </div>
    })

    return <>
        <div id="about-content" style={isNavOpen ? { display: 'none'} : null}>
            <div className="banner">
                {!isLoading ? renderedImages : null}
            </div>
            <div className="bio">
                {renderedBios}
            </div>
        </div>
    </>
}

export default About;
