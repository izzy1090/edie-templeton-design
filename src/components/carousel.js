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
        <BackArrow id='backArrow' style={{width: "2em", height: '2em'}}
            onClick={handlePreviousPost}/>
 
            <img src={currentPost}
                alt={post.caption}/>
        <ForwardArrow id='forwardArrow' style={{width: "2em", height: '2em'}}
            onClick={handleNextPost}/>
    </div>
}

export default Carousel;
