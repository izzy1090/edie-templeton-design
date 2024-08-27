import { useEffect, useState } from 'react';
import useGlobalStates from '../hooks/use-globalStates';
import Lightbox from './lightbox';

function Gallery ( { images } ) {

    const { isNavOpen, setIsLightboxOpen, setImageToShow } = useGlobalStates();
    const [ isLoading, setIsLoading ] = useState(false);

    const handleOpenGallery = (image) => {
        setIsLightboxOpen(true);
        setImageToShow(image);
    }

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
                entries.forEach((entry)=>{
                    // If the entry is intersecting with the observer
                    if (entry.isIntersecting){
                        // add the class if they're intersecting 
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


    // if an image's index is less than 7, map it to the first imageContainerColumn div
    const imageContainer = images.filter((image)=> image.key).map((image)=>{
        return <div className='imageContainer' key={image.key}>
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

    // if an image's index is greater than or equal to 7, map it to the first imageContainerColumn div
    // const imageContainerColumn2 = images.filter((image)=> image.key >= 7).map((image)=>{
    //     return <div className='imageContainer' key={image.key} onClick={()=>handleOpenGallery(image)}>
    //         <img src={image.compressedImage} 
    //             alt={image.alt}
    //             width={`${image.width}px`} 
    //             height={`${image.height}px`}
    //             onLoad={handleImageLoad}/>
    //     </div>
    // })

    // Skeleton loader to fit the size and positioning of 
    // const skeletonContainer1 = images.filter((image)=> image.key < 7).map((image)=>{
    //     return <div key={image.key} className='skeletonContainer' 
    //     style={{width: `${image.width}px`, height: `${image.height}px`}}/>
    // })

    // if an image's index is greater than or equal to 7, map it to the first imageContainerColumn div
    // const skeletonContainer2 = images.filter((image)=>image.key >= 7).map((image)=>{
    //     return <div key={image.key} className='skeletonContainer' 
    //         style={{width: `${image.width}px`, height: `${image.height}px`}}/>
    // })



    // const skeletonSpread = <div className={"imagesSpreadContainer"}>
    //     <div className={"imagesSpreadColumn1"}>
    //         {skeletonContainer1}
    //     </div>
    //     <div className="imagesSpreadColumn2">
    //         {skeletonContainer2}
    //     </div>
    // </div>
    return <><Lightbox images={images}/>{imageSpread}</>
    // return <>{isLoading ? skeletonSpread : null}<Lightbox images={images}/>{imageSpread}</>
}

export default Gallery;
