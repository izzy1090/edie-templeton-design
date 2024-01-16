import { useEffect } from 'react';
import useGlobalStates from '../hooks/use-globalStates';

function Lightbox ( { images } ) {

    const { isGalleryOpen, setIsGalleryOpen, imageToShow, setImageToShow } = useGlobalStates();

    useEffect(()=>{
        // add key handler to capture the key event
        const keyHandler = (event) => {
            if (isGalleryOpen)
            {
                if (event.key === "Escape")
                {
                    // prevent any default behavior of the key press
                    event.preventDefault();
                    handleCloseGallery();
                } else if (event.key === "ArrowRight"){
                    event.preventDefault();
                    handleNextGalleryImage(event);
                } else if (event.key === "ArrowLeft"){
                    event.preventDefault();
                    handlePrevGalleryImage(event);
                }
            }
        }

        // add an event listener looking for a key press and invoke the func above
        document.addEventListener('keydown', keyHandler);
        // make sure to "clean" up the event listener with a return 
        return () => {
            document.removeEventListener('keydown', keyHandler);
        }
    });

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

        const previousImage = document.querySelector('.innerContainer > img');
        previousImage.classList.add('previousImage');
        previousImage.addEventListener('animationend', ()=>{
            previousImage.classList.remove('previousImage');
            previousImage.classList.remove('lightboxEntrance')
        }, {once:true});
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
        
        const nextImage = document.querySelector('.innerContainer > img');
        nextImage.classList.add('nextImage');
        
        nextImage.addEventListener('animationend', ()=>{
            nextImage.classList.remove('nextImage');
            nextImage.classList.remove('lightboxEntrance')
        }, {once:true});
    }

    const handleCloseGallery = () => {
        const lightbox = document.querySelector('.lightbox');
        lightbox.classList.add('lightboxExit');
        
        // animationend is an event listener that listens for the end of a CSS animation
        lightbox.addEventListener('animationend', ()=>{
            setIsGalleryOpen(false);
            lightbox.style.display = 'none';
        // {once: true} cleans up the event listener and states the event should only fire once
        }, {once: true});
    }

    const renderedGallery = <>
        <div className='lightbox'>
            <div className='lightboxContainer'>
                <div onClick={handlePrevGalleryImage} className='lightboxButton' id='prevButton'>
                    previous    
                </div>
                <div className='innerContainer'>
                    <div className='lightboxButton' id='closeButton' onClick={handleCloseGallery}>
                        close
                    </div>
                    <img src={imageToShow.highResImage} 
                        alt={imageToShow.alt} 
                        onClick={(event)=>event.stopPropagation()}
                        className='lightboxEntrance'/>
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
