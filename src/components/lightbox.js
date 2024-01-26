import { useEffect, useState } from 'react';
import useGlobalStates from '../hooks/use-globalStates';

function Lightbox ( { images } ) {

    const { isGalleryOpen, setIsGalleryOpen, imageToShow, setImageToShow } = useGlobalStates();
    const [ isButtonDisabled, setIsButtonDisabled ] = useState(false);

    useEffect(()=>{
        const keyHandler = (event) => {
            if (isGalleryOpen)
            {
                if (event.key === "Escape")
                {
                    // prevent any default behavior of the key press
                    event.preventDefault();
                    handleCloseGallery();
                } 
                // else if (event.key === "ArrowRight"){
                //     event.preventDefault();
                //     handleNextGalleryImage(event);
                // } else if (event.key === "ArrowLeft"){
                //     event.preventDefault();
                //     handlePrevGalleryImage(event);
                // }
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
        setIsButtonDisabled(true);

        const previousImage = document.querySelector('.innerContainer > img');
        previousImage.classList.add('goingBack');
        previousImage.id = 'backOutro';

        for (let i = 0; i < images.length; i++){
            // handles selecting the image that's directly behind the current image
            if (images[i].key === imageToShow.key & imageToShow.key !== images[0].key)
            {
                setImageToShow(images[i - 1]);
                break;
            // handles the situation if the current image selected is the first in the gallery
            } else if (imageToShow.key === 0)
            {
                setImageToShow(images[images.length - 1]);
                break;
            }    
        }
    }

    const handleNextGalleryImage = (event) => {
        event.stopPropagation();
        setIsButtonDisabled(true);

        const nextImage = document.querySelector('.innerContainer > img');
        nextImage.classList.add('goingForward');
        nextImage.id = 'forwardOutro';

        for (let i = 0; i < images.length; i++){
            if (images[i].key === imageToShow.key & imageToShow.key !== images[images.length-1].key)
            {
                setImageToShow(images[i+1]);
                break;
            } else if (imageToShow.key === images[images.length - 1].key)
            {
                setImageToShow(images[0]);
                break;
            }
        }
    }

    const handleCloseGallery = () => {
        const lightboxContainer = document.querySelectorAll('.lightboxContainer > *');
        lightboxContainer.forEach((children)=>{
            children.classList.add('lightboxExit');
            children.addEventListener('animationend', ()=>{
                setIsGalleryOpen(false);
                children.style.display = 'none';
            // {once: true} cleans up the event listener and states the event should only fire once
            }, {once: true});
        })

        const lightbox = document.querySelector('.lightbox');
        lightbox.style.opacity = 0;
        lightbox.style.transition = 'opacity 1s ease';
    }

    const renderedGallery = <>
        <div className='lightbox'>
            <div className='lightboxContainer'>
                <div onClick={!isButtonDisabled ? handlePrevGalleryImage : null} className='lightboxButton' id='prevButton'>
                    previous    
                </div>
                <div className='innerContainer'>
                    <div className='lightboxButton' id='closeButton' onClick={handleCloseGallery}>
                        close
                    </div>
                    <img src={imageToShow.highResImage} 
                        alt={imageToShow.alt} 
                        onClick={(event)=>event.stopPropagation()}
                        className='lightboxEntrance'
                        onLoad={()=>{
                            const goingBack = document.querySelector('.goingBack')
                            const goingForward = document.querySelector('.goingForward')
                            const currentImage = document.querySelector('.innerContainer > img');
                            currentImage.id = '';
                            if (goingBack)
                            {
                                currentImage.classList.add('previousImage')
                                currentImage.addEventListener('animationend', ()=>{
                                    currentImage.classList.remove('goingBack');
                                    currentImage.classList.remove('previousImage');
                                    currentImage.classList.remove('lightboxEntrance');
                                    setIsButtonDisabled(false)
                                }, {once:true});
                                
                            } else if (goingForward)
                            {
                                currentImage.classList.add('nextImage');
                                currentImage.addEventListener('animationend', ()=>{
                                    currentImage.classList.remove('goingForward');
                                    currentImage.classList.remove('nextImage');
                                    currentImage.classList.remove('lightboxEntrance');
                                    setIsButtonDisabled(false);
                                }, {once:true});
                            }
                        }}/>
                </div>
                <div onClick={!isButtonDisabled ? handleNextGalleryImage : null} className='lightboxButton' id='nextButton'>
                    next
                </div>
            </div>
        </div>
    </>

    return <>{isGalleryOpen ? renderedGallery : null}</>
}

export default Lightbox;
