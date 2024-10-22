import { ReactComponent as BackArrow } from '../assets/chevron-left.svg';
import { ReactComponent as ForwardArrow } from '../assets/chevron-right.svg';
import { useEffect, useState } from 'react';

function Carousel({post, caption, loaded}){

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
            const forwardAnim = document.querySelector('#forward');
            const backwardAnim = document.querySelector('#backward');
            
            if (image && forwardAnim)
            {              

                image.classList.add('nextCarouselPost');
                image.addEventListener('animationend', ()=>{
                    // Allows you to use the arrow again
                    image.closest('.carouselContainer').children[2].style.pointerEvents = 'auto';
                    image.style.transition = '';
                    image.style.transform = '';
                    forwardAnim.id = '';
                    image.classList.remove('nextCarouselPost');
                })
            } else if (image && backwardAnim)
            {
                image.classList.add('previousCarouselPost');
                image.addEventListener('animationend', ()=>{
                    // Allows you to use the arrow again
                    image.closest('.carouselContainer').children[0].style.pointerEvents = 'auto';
                    image.style.transition = '';
                    image.style.transform = '';
                    backwardAnim.id = '';
                    image.classList.remove('previousCarouselPost');
                })
            } else if (video && forwardAnim){
                video.parentElement.classList.add('nextCarouselPost');
                video.parentElement.addEventListener('animationend', ()=>{
                    video.style.transition = '';
                    video.style.transform = '';
                    video.closest('.carouselContainer').children[2].style.pointerEvents = 'auto';
                    forwardAnim.id = '';
                    video.parentElement.classList.remove('nextCarouselPost');
                })
                console.log(video.parentElement)
            }
        }
    }, [isLoaded, currentPost]);

    const nextPostTransition = (event) =>{
        const currentPost = event.target.closest(".carouselContainer").children[1].children[0];
        event.target.closest('.arrowContainer').style.pointerEvents = 'none';
        currentPost.style.transform = "translateX(-110%)";
        currentPost.style.transition = "transform 400ms ease-in";
        currentPost.id = 'forward';
        setIsLoaded(false);
        currentPost.addEventListener('transitionend', ()=>{
            currentPost.style.transition = 'none';
            handleNextPost();
        }, {once: true})
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
        const currentPost = event.target.closest(".carouselContainer").children[1].children[0];
        event.target.closest('.arrowContainer').style.pointerEvents = 'none';
        currentPost.style.transform = "translateX(110%)";
        currentPost.style.transition = "transform 400ms ease-in";
        currentPost.id = 'backward';
        setIsLoaded(false);
        currentPost.addEventListener('transitionend', ()=>{
            currentPost.style.transition = 'none';
            handlePreviousPost();
        }, {once: true})
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
            <div id='backArrow' className='arrowContainer'
                style={postCounter === 0 ? {display: 'none'} : null}>
                <BackArrow id="arrow"
                    style={{width: "1.5em", height: '1.5em'}}
                    onClick={previousPostTransition}/>
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
