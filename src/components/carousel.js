import { ReactComponent as BackArrow } from '../assets/chevron-left.svg';
import { ReactComponent as ForwardArrow } from '../assets/chevron-right.svg';
import { useEffect, useState } from 'react';

function Carousel({post, caption, instagram_link}){

    const [ currentPost, setCurrentPost ] = useState(post.children.data[0].post_media_url);
    const [ postCounter, setPostCounter ] = useState(0);
    const [ isLoaded, setIsLoaded ] = useState(null);

    const handleMedia = (media) => {
        if (media.match(".mp4"))
        {
            return <>
                <video autoPlay loop muted onLoadedData={() => setIsLoaded(true)}>
                    <source src={media} type="video/mp4"></source>
                </video>
            </>
        } else {
            return <>
                <img src={media}
                    alt={caption}
                    onLoad={()=>setIsLoaded(true)}/>
            </>
        }
    }

    const [ videoImage, setVideoImage ] = useState(()=>handleMedia(currentPost));

    useEffect(()=>{
        setVideoImage(()=>handleMedia(currentPost));
        setIsLoaded(false);
    // eslint-disable-next-line
    }, [currentPost])

    useEffect(()=>{
        if (isLoaded)
        {
            const image = document.querySelector(`img[src="${currentPost}"]`);
            const video = document.querySelector(`video source[src="${currentPost}"]`);
            const forwardAnim = document.getElementById('media forward');
            const backwardAnim = document.getElementById('media backward');
            
            const nextSlideAnim = (media, className, childIndex, direction) => {
                media.classList.add(className);
                media.addEventListener('animationend', ()=>{
                    // Targets the arrow container
                    media.closest('.carouselContainer').children[childIndex].style.pointerEvents = 'auto';
                    media.style.transition = '';
                    media.style.transform = '';
                    direction.id = 'media';
                    media.classList.remove(className);
                }, {once: true});
            }

            if (image && forwardAnim) 
                nextSlideAnim(
                    image, 
                    "nextCarouselPost", 
                    3, 
                    forwardAnim
                );  
            else if (image && backwardAnim) 
                nextSlideAnim(
                    image, 
                    "previousCarouselPost", 
                    1, 
                    backwardAnim
                );
            else if (video && forwardAnim) {
                console.log(video.parentElement)
                nextSlideAnim(
                    video.parentElement, 
                    "nextCarouselPost", 
                    3, 
                    forwardAnim
                ); 
            }
            else if (video && backwardAnim) 
                nextSlideAnim(
                    video.parentElement, 
                    "previousCarouselPost", 
                    1, 
                    backwardAnim
                ); 
        }
    }, [isLoaded, currentPost]);

    const currentSlideAnim = (event, transform, transition, id, handleSlideDir) => {
        const currentPost = event.target.closest(".carouselContainer").children[2].children[0];
        console.log(currentPost)
        // Targets the arrow container
        event.target.closest('.arrowContainer').style.pointerEvents = 'none';
        currentPost.style.transform = transform;
        currentPost.style.transition = transition;
        currentPost.parentElement.id = `media ${id}`;
        setIsLoaded(false);
        currentPost.addEventListener('transitionend', ()=>{
            currentPost.style.transition = 'none';
            handleSlideDir();
        }, {once: true})
    }

    const nextPostTransition = (event) =>{
        currentSlideAnim(
            event, 
            "translateX(-110%)", 
            "transform 400ms ease-in", 
            "forward",
            handleNextPost
        );
    }

    const handleNextPost = () => {
        if (postCounter < post.children.data.length - 1) 
        { 
            setPostCounter((currentCounter) => {
                const newCounter = currentCounter + 1;
                setCurrentPost(post.children.data[newCounter].post_media_url); 
                return newCounter;
            });
        }
    };

    const previousPostTransition = (event) => {
        currentSlideAnim(
            event, 
            "translateX(110%)", 
            "transform 400ms ease-in", 
            "backward", 
            handlePreviousPost
        );
    }

    const handlePreviousPost = () => {
        if (postCounter > 0) 
        {
            setPostCounter((currentCounter) => {
                const newCounter = currentCounter - 1;
                setCurrentPost(post.children.data[newCounter].post_media_url); 
                return newCounter;
            });
        }
    };

    return <div className='carouselContainer'>
            {instagram_link}
            <div id='backArrow' className='arrowContainer'
                style={postCounter === 0 ? {display: 'none'} : null}>
                <BackArrow id="arrow"
                    style={{width: "1.5em", height: '1.5em'}}
                    onClick={(event)=>previousPostTransition(event)}/>
            </div>
            <div id='media'>
                {videoImage}
            </div>
            <div id='forwardArrow' className='arrowContainer'
                style={postCounter === post.children.data.length - 1 ? {display: 'none'} : null}>
                <ForwardArrow id="arrow" 
                    style={{width: "1.5em", height: '1.5em'}}
                    onClick={(event)=>nextPostTransition(event)}/>
            </div>
    </div>
}

export default Carousel;
