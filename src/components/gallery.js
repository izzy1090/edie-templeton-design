import { useEffect, useState } from 'react';
import useGlobalStates from '../hooks/use-globalStates.js';
import Lightbox from './lightbox.js';

function Gallery ( { images } ) {

    const { isNavOpen, setIsLightboxOpen, setImageToShow } = useGlobalStates();
    const [ isLoading, setIsLoading ] = useState(false);

    const handleOpenGallery = (image) => {
        setIsLightboxOpen(true);
        setImageToShow(image);
    }

    // Possibly remove the loading component
    const handleImageLoad = () => {
        // Uses the spread operator to push ELs into an array
        // then .every sees if everything in the array evaluates to true
        const allImagesLoaded = [...document.querySelectorAll('.imageContainer > img')].every(img => img.complete);
        
        // if they're completed loading, then set loading to false
        if (allImagesLoaded) 
        {
            setIsLoading(false);
        }
    };

    // This invokes on the first render
    // It waits 50 ms to see if all images are completed loading
    useEffect(() => {
        const loadingTimeout = setTimeout(() => {
          const allImagesLoaded = [...document.querySelectorAll('.imageContainer > img')].every(img => img.complete);
          if (!allImagesLoaded) 
          {
            setIsLoading(true); 
          }
        }, 55); 
        
        // This clears the timeout stamp to prevent memory leakage
        // Also prevents timeout being used after the component unmounts
        return () => clearTimeout(loadingTimeout); // Clear timeout on cleanup
      }, []);

    useEffect(()=>{
        const body = document.querySelector('*');

        if (isLoading)
        {
            body.style.overflow = 'hidden';
        } 

        if (!isLoading)
        {
            body.style.overflow = '';
            // create an instance of an observer accepts a series of entries
            const observer = new IntersectionObserver((entries)=>{
                // iterate across those individual entries 
                entries.forEach((entry, index)=>{                    
                    setTimeout(()=>{
                        if (entry.isIntersecting){
                            entry.target.classList.add('swipeUpAnim');
                            entry.target.parentElement.children[1].style.opacity = 1;
                            entry.target.parentElement.children[1].style.transition = 'opacity 1.5s ease';
                            entry.target.style.opacity = 1;
                            entry.target.addEventListener('animationend', ()=>{
                                entry.target.style.opacity = 0;
                                entry.target.remove();
                            })
                            observer.unobserve(entry.target);
                        }
                    }, 300 * index)
                })
            }, { rootMargin: "-100px"})

            const imagesToObserve = document.querySelectorAll('.imageColorBlock');
            // iterate across the imageContainers to observe which ones intersect with our observer from above
            imagesToObserve.forEach((image)=>{
                observer.observe(image);
            })
            
            // disconnect the observer when everything is finished to clean things up
            return () => observer.disconnect();
        } 
    }, [isLoading]);

    const imageContainer = images.filter((image)=> image.key).map((image)=>{
        return <div className='imageContainer' key={image.key} customid={image.key}>
            <div className='imageColorBlock'></div>
            <img src={image.compressedImage} 
                id='images'              
                alt={image.alt}
                width={`${image.width}px`} 
                height={`${image.height}px`}
                onClick={()=>handleOpenGallery(image)}
                onLoad={handleImageLoad}/>
        </div>
    });

    const imageSpread = <div className={"imageSpread"} 
        style={isNavOpen ? {display: 'none'} : null} 
        id="initialGalleryLoad">
            {imageContainer}
    </div>

    return <><Lightbox images={images}/>{imageSpread}</>
}

export default Gallery;
