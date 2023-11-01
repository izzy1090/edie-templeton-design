import { useState } from 'react';
import useGlobalStates from '../hooks/use-globalStates';

function Images ( {images} ) {

    const { isNavOpen } = useGlobalStates();
    const [ isGalleryOpen, setIsGalleryOpen ] = useState(false);
    const [ imageToShow, setImageToShow ] = useState({})

    const imageWidth = 800;

    const handleOpenGallery = (image) => {
        setIsGalleryOpen(true);
        setImageToShow(image)
    }

    const handleCloseGallery = () => {
        setIsGalleryOpen(false)
    }

    const handlePrevGalleryImage = (event) => {
        // stopPropagation stops the event listener from bubbling and prevents the arrow 
        event.stopPropagation();
        for (let i = 0; i < images.length; i++){
            // if the iterated image matches the current image shown and is not the first image in the series
            if (images[i].key === imageToShow.key && imageToShow.key !== images[0].key){
                setImageToShow(images[i-1])
            // else if the current image shown is the first in the series, send the user to the back
            } else if (imageToShow.key === 0){
                setImageToShow(images[images.length - 1])
            } 
        }
    }

    const handleNextGalleryImage = (event) => {
        event.stopPropagation();
        for (let i = 0; i < images.length; i++){
            if (images[i].key === imageToShow.key && imageToShow.key !== images[images.length - 1].key){
                setImageToShow(images[i + 1]);
            } else if (imageToShow.key === images[images.length - 1].key){
                setImageToShow(images[0]);
            }
        }
    }

    // In here to prevent the user from clicking out of the gallery by clicking on the image itself
    const enlargeImage = (event) => {
        event.stopPropagation()
    }

    const renderedGallery = <>
        <div className={'lightBox'} onClick={handleCloseGallery}>
            <div onClick={handlePrevGalleryImage}>
                prev
            </div>
            <img src={imageToShow.value} alt={imageToShow.alt} onClick={enlargeImage}/>
            <div onClick={handleNextGalleryImage}>
                forward
            </div>
        </div>
    </>

    // if an image's index is less than 7, map it to the first imageContainerColumn div
    const imageContainerColumn1 = images.filter((image)=> image.key < 7).map((image)=>{
        return <img src={image.value} key={image.key} width={imageWidth} onClick={()=>handleOpenGallery(image)} alt={image.alt}></img>
    })

    // if an image's index is greater than or equal to 7, map it to the first imageContainerColumn div
    const imageContainerColumn2 = images.filter((image)=> image.key >= 7).map((image)=>{
        return <img src={image.value} key={image.key} width={imageWidth} onClick={()=>handleOpenGallery(image)} alt={image.alt}></img>
    })

    const imageSpread = <>
        <div className={isNavOpen ? "imagesContainer" : "imagesContainer beforeHover"}>
            <div className="imageContainerColumn1">
                {imageContainerColumn1}
            </div>
            <div className="imageContainerColumn2">
                {imageContainerColumn2}
            </div>
        </div>
    </>

    return <>{isGalleryOpen ? renderedGallery : null}{imageSpread}</>

}

export default Images;
