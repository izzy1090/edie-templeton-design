import { useEffect, useState } from 'react';
import useGlobalStates from '../hooks/use-globalStates';
import { ReactComponent as BackArrow } from '../assets/chevron-left.svg';
import { ReactComponent as ForwardArrow } from '../assets/chevron-right.svg';

function Lightbox ( { images } ) {

    const { isGalleryOpen, setIsGalleryOpen, imageToShow, setImageToShow } = useGlobalStates();
    const [ isButtonDisabled, setIsButtonDisabled ] = useState(false);
    const [ isImageLoading, setIsImageLoading ] = useState(false);

    useEffect(()=>{
        const initialGalleryOpen = document.getElementById('initialGalleryOpen');
        const image = document.querySelector('.innerContainer > img');

        if (initialGalleryOpen)
        {
            image.style.opacity = 0;
            setIsImageLoading(true);
        }

        /*
            Handles the Escape key to close out the lightbox / gallery
        */
        const keyHandler = (event) => {
            if (isGalleryOpen)
            {
                if (event.key === "Escape")
                {                    
                    handleCloseGallery();
                }
            }
        }
        document.addEventListener('keydown', keyHandler);

        return () => {
            document.removeEventListener('keydown', keyHandler);
        }
    }, [isGalleryOpen, isImageLoading]);

    /*
        This initiates the backward slide transition by transitioning back the current
        slide. 
    */
    const backSlideTransitionOut = (event) => {
        const image = document.querySelector('.innerContainer > img');
        image.id = 'goingBack';
        image.style.opacity = 0;
        setIsButtonDisabled(true);
        handlePreviousImage(event);
    }

    /*
        This handles transitioning the current image to the previous image in the array (i.e. gallery)
    */
    const handlePreviousImage = (event) => {
        event.stopPropagation();
        for (let i = 0; i < images.length; i++)
        {
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

    /*
        This initiates the forward slide transition by transitioning forward the current
        slide. 
    */
    const forwardSlideTransitionOut = (event) => {
        const image = document.querySelector('.innerContainer > img');
        image.id = 'goingForward';
        image.style.opacity = 0;
        setIsButtonDisabled(true);
        handleNextImage(event);
    }

    /*
        This handles transitioning the current image to the next image in the array (i.e. gallery)
    */
    const handleNextImage = (event) => {
        event.stopPropagation();
        for (let i = 0; i < images.length; i++)
        {
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

    /* 
        This targets the innerContainer and the buttons to add a lightboxExit animation 
        before closing the lightbox with a state change 
     */
    const handleCloseGallery = () => {
        setIsImageLoading(false);

        const innerContainer = document.querySelector('.innerContainer > img');
        const lightboxButton = document.querySelectorAll('.lightboxButton');
        
        const lightbox = document.querySelector('.lightbox');
        lightbox.style.opacity = 0;
        lightbox.style.transition = 'opacity 1s ease';

        innerContainer.classList.add('lightboxExit');
        lightboxButton.forEach((element)=>element.classList.add("lightboxExit"));
        innerContainer.addEventListener('animationend', ()=>{
            setIsGalleryOpen(false);
        })
    }

    /*
        The loading animation that plays between slide transitions while the next photo loads. 
    */
    const loadingAnimation = <div className='loading'></div>
    const loader = isImageLoading ? loadingAnimation : null;

    /*
        The rendered gallery for the lightbox which includes the image and buttons.
    */
    const renderedGallery = <>
    <div className='lightbox'>
        <div className='lightboxContainer'>
            <div onClick={(event)=>{
                const image = document.querySelector('.innerContainer > img');
                if (!isButtonDisabled)
                {
                    image.classList.add('backTransitionOut');
                    image.addEventListener('animationend', ()=>{
                        image.classList.remove('backTransitionOut');
                        setIsImageLoading(true);
                        backSlideTransitionOut(event);
                    })
                }
            }} className='lightboxButton lightboxEntrance' id='prevButton'>
                <BackArrow style={{width: "2em", height: '2em'}}/>
            </div>
            <div className='innerContainer'>
                <div className='lightboxButton lightboxEntrance' id='closeButton' onClick={handleCloseGallery}>
                    close
                </div>
                {loader}
                <img src={imageToShow.highResImage} 
                    alt={imageToShow.alt} 
                    onClick={(event)=>{event.stopPropagation()}}
                    id='initialGalleryOpen'
                    onLoad={()=>{
                            const image = document.querySelector('.innerContainer > img');
                            const goingBack = document.getElementById('goingBack');
                            const goingForward = document.getElementById('goingForward');
                            const initialGalleryOpen = document.getElementById('initialGalleryOpen');
                            const loading = document.querySelector('.loading');

                            if (loading)
                                {
                                    loading.classList.remove('loading');
                                    setIsImageLoading(false);
                                }
                            
                            if (initialGalleryOpen !== null)
                            {
                                image.classList.add('lightboxEntrance');
                                image.id = '';
                                image.style.opacity = 1; 
                                if (loading)
                                {
                                    loading.classList.remove('loading');
                                    setIsImageLoading(false);
                                }
                                // This clears the lightbox intro animation for any components after the animation finishes
                                const lightboxIntroAnim = document.querySelectorAll('.lightboxEntrance');
                                lightboxIntroAnim.forEach((element)=>{
                                    setIsButtonDisabled(true);
                                    element.addEventListener('animationend', ()=>{
                                        setIsImageLoading(false);
                                        setIsButtonDisabled(false);                                            element.classList.remove('lightboxEntrance');
                                    })
                                })
                            }
                            else if (goingBack !== null)
                            {
                                image.classList.add('previousImage');
                                image.addEventListener('animationend', ()=>{
                                    setIsButtonDisabled(false);
                                    setIsImageLoading(false);
                                    image.style.opacity = 1;
                                    image.classList.remove('previousImage');
                                })
                            } else if(goingForward !== null)
                            {
                                image.classList.add('nextImage');
                                image.addEventListener('animationend', ()=>{
                                    setIsButtonDisabled(false);
                                    setIsImageLoading(false);
                                    image.style.opacity = 1;
                                    image.classList.remove('nextImage');
                                })
                            }
                            
                    }}/>
            </div>
            <div onClick={(event)=>{
                const image = document.querySelector('.innerContainer > img');
                if (!isButtonDisabled)
                {
                    image.classList.add('forwardTransitionOut');
                    image.addEventListener('animationend', ()=>{
                        image.classList.remove('forwardTransitionOut');
                        setIsImageLoading(true);
                        forwardSlideTransitionOut(event);
                    })
                    
                }
            }} className='lightboxButton lightboxEntrance' id='nextButton'>
                <ForwardArrow style={{width: "2em", height: "2em"}}/>
            </div>
        </div>
    </div>
    </>

    return <>{isGalleryOpen ? renderedGallery : null}</>
}

export default Lightbox;
