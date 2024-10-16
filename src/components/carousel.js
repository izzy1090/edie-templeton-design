import { ReactComponent as BackArrow } from '../assets/chevron-left.svg';
import { ReactComponent as ForwardArrow } from '../assets/chevron-right.svg';
import { useEffect, useState } from 'react';

function Carousel({post, caption, loaded}){

    const [ currentPost, setCurrentPost ] = useState(post.children.data[0].post_media_url);
    const [ postCounter, setPostCounter ] = useState(0);

    const handleMedia = (media) => {
        if (media.match(".mp4"))
        {
            return <>
                <video autoPlay loop muted>
                    <source src={media} type="video/mp4"></source>
                </video>
            </>
        } else {
            return <>
                <img src={media}
                    alt={caption}/>
            </>
        }
    }

    const [ videoImage, setVideoImage ] = useState(()=>handleMedia(currentPost));

    useEffect(()=>{
        setVideoImage(()=>handleMedia(currentPost))
    // eslint-disable-next-line
    }, [currentPost])
    

    const handleNextPost = () => {
        if (postCounter < post.children.data.length - 1) { 
            setPostCounter((currentCounter) => {
                const newCounter = currentCounter + 1;
                setCurrentPost(post.children.data[newCounter].post_media_url); 
                return newCounter;
            });
        }
    };

    const handlePreviousPost = () => {
        if (postCounter > 0) {
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
                    onClick={handlePreviousPost}/>
            </div>
            <div id='media'>
                {videoImage}
            </div>
            <div id='forwardArrow' className='arrowContainer'
                style={postCounter === post.children.data.length - 1 ? {display: 'none'} : null}>
                <ForwardArrow id="arrow" 
                    style={{width: "1.5em", height: '1.5em'}}
                    onClick={handleNextPost}/>
            </div>
    </div>
}

export default Carousel;
