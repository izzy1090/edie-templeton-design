import useGlobalStates from "../hooks/use-globalStates";

function About ( { images, bios } ) {
    const { isNavOpen } = useGlobalStates();

    const handleImageLoad = () => {
        // Uses the spread operator to push ELs into an array
        // then .every sees if everything in the array evaluates to true
        const allImagesLoaded = [...document.querySelectorAll('.banner > img')].every(img => img.complete);
        
        // if they're completed loading, then set loading to false
        if (allImagesLoaded) 
        {
            setTimeout(()=>{
                const bio = document.querySelector('#about-content');
                bio.style.opacity = 1;
                bio.style.transition = 'opacity 1s ease, transform 1s ease';
            }, 200);
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
