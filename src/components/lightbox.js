import { useEffect } from 'react';
import useGlobalStates from '../hooks/use-globalStates';

function Lightbox ( { images } ) {

    const { isGalleryOpen, setIsGalleryOpen, imageToShow, setImageToShow } = useGlobalStates();

    useEffect(()=>{
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
        event.stopPropagation();

        const previousImage = document.querySelector('.innerContainer > img');
        const previousImageAnim = () => {
            previousImage.classList.add('previousImage');
            previousImage.addEventListener('animationend', ()=>{
                previousImage.classList.remove('previousImage');
                previousImage.classList.remove('lightboxEntrance');
            }, {once:true});
        }

        for (let i = 0; i < images.length; i++){
            
            // handles selecting the image that's directly behind the current image
            if (images[i].key === imageToShow.key & imageToShow.key !== images[0].key)
            {
                setImageToShow(images[i - 1]);
                previousImageAnim()
                break;
            // handles the situation if the current image selected is the first in the gallery
            } else if (imageToShow.key === 0)
            {
                setImageToShow(images[images.length - 1]);
                previousImageAnim();
                break;
            } 
            
        }
        console.log(imageToShow.highResImage)
    }

    const handleNextGalleryImage = (event) => {
        event.stopPropagation();

        const nextImage = document.querySelector('.innerContainer > img');
        const nextImageAnim = () => {
            nextImage.classList.add('nextImage');
            nextImage.addEventListener('animationend', ()=>{
                nextImage.classList.remove('nextImage');
                nextImage.classList.remove('lightboxEntrance');
            }, {once:true});
        }
        for (let i = 0; i < images.length; i++){
            if (images[i].key === imageToShow.key & imageToShow.key !== images[images.length-1].key)
            {
                setImageToShow(images[i+1]);
                nextImageAnim();
                break;
            } else if (imageToShow.key === images[images.length - 1].key)
            {
                setImageToShow(images[0]);
                nextImageAnim();
                break;
            }
        }
    }

    const handleCloseGallery = () => {
        const lightbox = document.querySelector('.lightbox');
        lightbox.classList.add('lightboxExit');
        
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
