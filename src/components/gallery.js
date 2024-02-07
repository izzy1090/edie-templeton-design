import { useEffect, useState } from 'react';
import useGlobalStates from '../hooks/use-globalStates';
import Lightbox from './lightbox';

function Images ( {images} ) {

    const { isNavOpen, setIsGalleryOpen, setImageToShow } = useGlobalStates();
    const [ isLoading, setIsLoading ] = useState(false);

    const handleOpenGallery = (image) => {
        setIsGalleryOpen(true);
        setImageToShow(image)
    }

    // window.addEventListener('load', ()=>{
    //     setIsLoading(false);
    // });

    useEffect(()=>{

        if (!isLoading)
        {
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
        return <div className='imageContainer' key={image.key} onClick={()=>{
            handleOpenGallery(image);
            setIsLoading(false);
            }}>
            <img 
                src={image.compressedImage}               
                alt={image.alt}
                width={image.width} 
                height={image.height}/>
        </div>
    })

    // if an image's index is greater than or equal to 7, map it to the first imageContainerColumn div
    const imageContainerColumn2 = images.filter((image)=> image.key >= 7).map((image)=>{
        return <div className='imageContainer' key={image.key} onClick={()=>{
            setIsLoading(false);
            handleOpenGallery(image);
        }}>
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
    const loader = <div className='loading' style={{zIndex: 1000}}></div>
    return <>{isLoading ? loader : null}<Lightbox images={images}/>{imageSpread}</>
}

export default Images;
