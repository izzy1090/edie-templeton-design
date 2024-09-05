import { ReactComponent as BackArrow } from '../assets/chevron-left.svg';
import { ReactComponent as ForwardArrow } from '../assets/chevron-right.svg';
import { useState } from 'react';

function Carousel({post}){

    const [ currentPost, setCurrentPost ] = useState(post.children.data[0].media_url);
    const [ postCounter, setPostCounter ] = useState(0);

    const handleNextPost = () => {
        if (postCounter < post.children.data.length - 1) { 
            setPostCounter((currentCounter) => {
                const newCounter = currentCounter + 1;
                setCurrentPost(post.children.data[newCounter].media_url); 
                return newCounter;
            });
        }
    };

    const handlePreviousPost = () => {
        if (postCounter > 0) {
            setPostCounter((currentCounter) => {
                const newCounter = currentCounter - 1;
                setCurrentPost(post.children.data[newCounter].media_url); 
                return newCounter;
            });
        }
    };

    return <div className='carouselContainer'>
        <div id='backArrow' className='arrowContainer'>
            <BackArrow id="arrow"
                style={{width: "1.5em", height: '1.5em'}}
                onClick={handlePreviousPost}/>
        </div>
        <img src={currentPost}
            alt={post.caption}/>
        <div id='forwardArrow' className='arrowContainer'>
            <ForwardArrow id="arrow" 
                style={{width: "1.5em", height: '1.5em'}}
                onClick={handleNextPost}/>
        </div>
    </div>
}

export default Carousel;
