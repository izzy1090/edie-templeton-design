import { useEffect, useState } from 'react';
import useGlobalStates from '../hooks/use-globalStates';
import rightArrow from '../assets/right-arrow.svg';
import leftArrow from '../assets/left-arrow.svg';

function Lightbox ( { images } ) {

    const { isGalleryOpen, setIsGalleryOpen, imageToShow, setImageToShow } = useGlobalStates();
    const [ isButtonDisabled, setIsButtonDisabled ] = useState(false);

    useEffect(()=>{
        // This clears the lightbox intro animation when the component loads
        const lightboxIntroAnim = document.querySelectorAll('.lightboxEntrance');
        lightboxIntroAnim.forEach((element)=>{
            element.addEventListener('animationend', ()=>{
                element.classList.remove('lightboxEntrance');
            })
        })

    //     const keyHandler = (event) => {
    //         if (isGalleryOpen)
    //         {
    //             if (event.key === "Escape")
    //             {
    //                 // prevent any default behavior of the key press
    //                 event.preventDefault();
    //                 handleCloseGallery();
    //             } else if (event.key === "ArrowRight"){
    //                 event.preventDefault();
    //                 handleNextGalleryImage(event);
    //             } else if (event.key === "ArrowLeft"){
    //                 event.preventDefault();
    //                 handlePrevGalleryImage(event);
    //             }
    //         }
    //     }
    //     // add an event listener looking for a key press and invoke the func above
    //     document.addEventListener('keydown', keyHandler);
    //     // make sure to "clean" up the event listener with a return 
    //     return () => {
    //         document.removeEventListener('keydown', keyHandler);
    //     }
    });

    const handlePreviousImage = (event) => {
        event.stopPropagation();
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

    const handleNextImage = (event) => {
        event.stopPropagation();
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

    // This targets the innerContainer and the buttons to add a lightboxExit animation
    // before closing the lightbox with a state change
    const handleCloseGallery = () => {
        const innerContainer = document.querySelector('.innerContainer > img');
        const lightboxButton = document.querySelector('.lightboxButton');
        
        const lightbox = document.querySelector('.lightbox');
        lightbox.style.opacity = 0;
        lightbox.style.transition = 'opacity 1s ease';

        innerContainer.classList.add('lightboxExit');
        lightboxButton.classList.add('lightboxExit');

        innerContainer.addEventListener('animationend', ()=>{
            setIsGalleryOpen(false);
        })
    }

    const renderedGallery = <>
        <div className='lightbox'>
            <div className='lightboxContainer'>
                <div onClick={(event)=>{
                    if (!isButtonDisabled)
                    {
                        const image = document.querySelector('.innerContainer > img');
                        image.id = 'goingBack';
                        setIsButtonDisabled(true);
                        handlePreviousImage(event);
                    }
                }} className='lightboxButton lightboxEntrance' id='prevButton'>
                    previous    
                </div>
                <div className='innerContainer'>
                    <div className='lightboxButton lightboxEntrance' id='closeButton' onClick={handleCloseGallery}>
                        close
                    </div>
                    <img src={imageToShow.highResImage} 
                        alt={imageToShow.alt} 
                        onClick={(event)=>{event.stopPropagation()}}
                        className='lightboxEntrance'
                        onLoad={()=>{
                                const image = document.querySelector('.innerContainer > img');
                                const goingBack = document.getElementById('goingBack');
                                const goingForward = document.getElementById('goingForward');

                                if (goingBack !== null)
                                {
                                    image.classList.add('previousImage');
                                    image.addEventListener('animationend', ()=>{
                                        setIsButtonDisabled(false);
                                        image.classList.remove('previousImage');
                                    })
                                } else if(goingForward !== null)
                                {
                                    image.classList.add('nextImage');
                                    image.addEventListener('animationend', ()=>{
                                        setIsButtonDisabled(false);
                                        image.classList.remove('nextImage');
                                    })
                                }
                        }}/>
                </div>
                <div onClick={(event)=>{
                    if (!isButtonDisabled)
                    {
                        const image = document.querySelector('.innerContainer > img');
                        image.id = 'goingForward';
                        setIsButtonDisabled(true);
                        handleNextImage(event);
                    }
                }} className='lightboxButton lightboxEntrance' id='nextButton'>
                    next
                </div>
            </div>
        </div>
    </>

    return <>{isGalleryOpen ? renderedGallery : null}</>
}

export default Lightbox;
