import { useEffect } from 'react';
import useGlobalStates from '../hooks/use-globalStates';
import Lightbox from './lightbox';

function Images ( {images} ) {

    const { isNavOpen, setIsGalleryOpen, setImageToShow } = useGlobalStates();

    const handleOpenGallery = (image) => {
        setIsGalleryOpen(true);
        setImageToShow(image)
    }

    useEffect(()=>{
        // create an instance of an observer accepts a series of entries
        const observer = new IntersectionObserver((entries)=>{
            // iterate across those individual entries 
            entries.forEach((entry)=>{
                // If the entry is intersecting with the observer
                if (entry.isIntersecting){
                    console.log(entry.target)
                    // add the class if they're intersecting 
                    entry.target.classList.add('fadeInImage');
                    observer.unobserve(entry.target);
                }
            })
        }, { rootMargin: "-50px"})

        const imagesToObserve = document.querySelectorAll('.imageContainer')
        // iterate across the imageContainers to observe which ones intersect with our observer from above
        imagesToObserve.forEach((image)=>{
            observer.observe(image)
        })
        // disconnect the observer when everything is finished to clean things up
        return () => observer.disconnect()
    }, [])    

    // if an image's index is less than 7, map it to the first imageContainerColumn div
    const imageContainerColumn1 = images.filter((image)=> image.key < 7).map((image)=>{
        return <div className='imageContainer' key={image.key} onClick={()=>handleOpenGallery(image)}>
            <img 
                src={image.compressedImage}               
                alt={image.alt}
                width={image.width} 
                height={image.height}/>
        </div>
    })

    // if an image's index is greater than or equal to 7, map it to the first imageContainerColumn div
    const imageContainerColumn2 = images.filter((image)=> image.key >= 7).map((image)=>{
        return <div className='imageContainer' key={image.key} onClick={()=>handleOpenGallery(image)}>
            <img 
                src={image.compressedImage} 
                alt={image.alt}
                width={image.width} 
                height={image.height}/>
        </div>
    })

    const imageSpread = <>
        <div className={"imagesSpreadContainer"} style={isNavOpen ? {display: 'none'} : null}>
            <div className={"imagesSpreadColumn1"}>
                {imageContainerColumn1}
            </div>
            <div className="imagesSpreadColumn2">
                {imageContainerColumn2}
            </div>
        </div>
    </>

    return <>
        <Lightbox images={images}/>
        {imageSpread}
    </>

}

export default Images;
