import { useEffect, useState } from 'react';
import useGlobalStates from '../hooks/use-globalStates';
import Lightbox from './lightbox';

function Images ( {images} ) {

    const { isNavOpen, setIsLightboxOpen, setImageToShow } = useGlobalStates();
    const [ isLoading, setIsLoading ] = useState(false);

    const handleOpenGallery = (image) => {
        setIsLightboxOpen(true);
        setImageToShow(image)
    }

    const handleImageLoad = () => {
        // All images loaded looks for all images in the image container with the applied tag
            // It uses the spread operator to place them in an array
            // it then uses .every which sees if everything in the array evaluates to true
        // After all els of the array evaluates to true, it evaluates if all the imgs in the array are completed loading
        const allImagesLoaded = [...document.querySelectorAll('.imageContainer > img')].every(img => img.complete);
        
        // if they're completed loading, then set loading to false
        if (allImagesLoaded) {
            setIsLoading(false);
        }
    };

    useEffect(()=>{
        const initialGalleryLoad = document.getElementById('initialGalleryLoad');
        const body = document.querySelector('*');

        if (isLoading)
        {
            body.style.overflow = 'hidden';
        } 

        if (initialGalleryLoad)
        {
            const imagesSpreadContainer = document.querySelector('.imagesSpreadContainer');
            imagesSpreadContainer.id = '';
            setIsLoading(true);
        }

        if (!isLoading)
        {
            body.style.overflow = ''
            // create an instance of an observer accepts a series of entries
            const observer = new IntersectionObserver((entries)=>{
                // iterate across those individual entries 
                entries.forEach((entry)=>{
                    // If the entry is intersecting with the observer
                    if (entry.isIntersecting){
                        // add the class if they're intersecting 
                        entry.target.classList.add('fadeInImage');
                        observer.unobserve(entry.target);
                    }
                })
            }, { rootMargin: "-100px"})

            const imagesToObserve = document.querySelectorAll('.imageContainer')
            // iterate across the imageContainers to observe which ones intersect with our observer from above
            imagesToObserve.forEach((image)=>{
                observer.observe(image);
            })
            
            // disconnect the observer when everything is finished to clean things up
            return () => observer.disconnect();
        } 
    }, [isLoading]);


    // if an image's index is less than 7, map it to the first imageContainerColumn div
    const imageContainerColumn1 = images.filter((image)=> image.key < 7).map((image)=>{
        return <div className='imageContainer' key={image.key} onClick={()=>handleOpenGallery(image)}>
            <img src={image.compressedImage}               
                alt={image.alt}
                width={`${image.width}px`} 
                height={`${image.height}px`}
                onLoad={handleImageLoad}/>
        </div>
    })

    // if an image's index is greater than or equal to 7, map it to the first imageContainerColumn div
    const imageContainerColumn2 = images.filter((image)=> image.key >= 7).map((image)=>{
        return <div className='imageContainer' key={image.key} onClick={()=>handleOpenGallery(image)}>
            <img src={image.compressedImage} 
                alt={image.alt}
                width={`${image.width}px`} 
                height={`${image.height}px`}
                onLoad={handleImageLoad}/>
        </div>
    })

    // Skeleton loader to fit the size and positioning of 
    const skeletonContainer1 = images.filter((image)=> image.key < 7).map((image)=>{
        return <div key={image.key} className='skeletonContainer' 
        style={{width: `${image.width}px`, height: `${image.height}px`}}/>
    })

    // if an image's index is greater than or equal to 7, map it to the first imageContainerColumn div
    const skeletonContainer2 = images.filter((image)=>image.key >= 7).map((image)=>{
        return <div key={image.key} className='skeletonContainer' 
            style={{width: `${image.width}px`, height: `${image.height}px`}}/>
    })

    const imageSpread = <div className={"imagesSpreadContainer"} style={isNavOpen ? {display: 'none'} : null} id="initialGalleryLoad">
        <div className={"imagesSpreadColumn1"}>
            {imageContainerColumn1}
        </div>
        <div className="imagesSpreadColumn2">
            {imageContainerColumn2}
        </div>
    </div>

    const skeletonSpread = <div className={"imagesSpreadContainer"}>
        <div className={"imagesSpreadColumn1"}>
            {skeletonContainer1}
        </div>
        <div className="imagesSpreadColumn2">
            {skeletonContainer2}
        </div>
    </div>

    return <>{isLoading ? skeletonSpread : null}<Lightbox images={images}/>{imageSpread}</>
}

export default Images;
