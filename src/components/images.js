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

    const renderedGallery = <>
        <div className='lightBox' onClick={handleCloseGallery}>
            <img src={imageToShow.value} alt={imageToShow.alt}/>
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
