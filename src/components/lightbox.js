import { useEffect } from 'react';
import useGlobalStates from '../hooks/use-globalStates';

function Lightbox ( { images } ) {

    const { isGalleryOpen, setIsGalleryOpen, imageToShow, setImageToShow } = useGlobalStates();

    useEffect(()=>{
        // add key handler to capture the key event
        const keyHandler = (event) => {
            if (event.key === "Escape"){
                // prevent any default behavior of the key press
                event.preventDefault();
                setIsGalleryOpen(false);
            } else if (event.key === "ArrowRight"){
                event.preventDefault();
                handleNextGalleryImage(event);
            } else if (event.key === "ArrowLeft"){
                event.preventDefault();
                handlePrevGalleryImage(event);
            }
        }
        // add an event listener looking for a key press and invoke the func above
        document.addEventListener('keydown', keyHandler)
        // make sure to "clean" up the event listener with a return 
        return () => {
            document.removeEventListener('keydown', keyHandler)
        }
    })

    const handleCloseGallery = () => {
        setIsGalleryOpen(false)
    }

    const handlePrevGalleryImage = (event) => {
        // stopPropagation stops the event listener from bubbling and prevents the arrow 
        event.stopPropagation();
        for (let i = 0; i < images.length; i++){
            // handles selecting the image that's directly behind the current image
            if (images[i].key === imageToShow.key & imageToShow.key !== images[0].key){
                setImageToShow(images[i - 1]);
            // handles the situation if the current image selected is the first in the gallery
            } else if (imageToShow.key === 0){
                setImageToShow(images[images.length - 1]);
            } 
        }
    }

    const handleNextGalleryImage = (event) => {
        event.stopPropagation();
        for (let i = 0; i < images.length; i++){
            if (images[i].key === imageToShow.key & imageToShow.key !== images[images.length-1].key){
                setImageToShow(images[i+1]);
            } else if (imageToShow.key === images[images.length - 1].key){
                setImageToShow(images[0]);
            }
        }
    }

    const renderedGallery = <>
        <div className='lightbox'>
            <div className='lightboxContainer'>
                <div onClick={handlePrevGalleryImage} className='lightboxButton' id='prevButton'>
                    previous    
                </div>
                <div className='innerContainer'>
                    <div className='lightboxButton' onClick={handleCloseGallery}>
                        close
                    </div>
                    <img src={imageToShow.value} 
                        alt={imageToShow.alt} 
                        onClick={(event)=>event.stopPropagation()}/>
                </div>
                <div onClick={handleNextGalleryImage} className='lightboxButton' id='nextButton'>
                    next
                </div>
            </div>
        </div>
    </>

    return <>{isGalleryOpen ? renderedGallery : null}</>
}

export default Lightbox;
