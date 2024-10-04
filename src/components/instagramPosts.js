import { useEffect, useState } from "react";
import Carousel from "./carousel.js";

function InstagramPosts ( ){
    const [ posts, setPosts ] = useState(null);
    const [ renderedPosts, setRenderedPosts ] = useState(null);

    const handleFetchPosts = async () => {
        try {
            const request = await fetch(`/api/db-fetch-posts`);
            const result = await request.json();
            setPosts(result);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        handleFetchPosts();
    }, []);

    useEffect(()=>{
        if (posts !== null){
            setRenderedPosts(
                posts.result.map((post)=>{
                    const isCarouselAlbum = post.post_media_type === 'CAROUSEL_ALBUM';

                    return <>
                        {isCarouselAlbum ?
                        (<Carousel post={post} caption={post.post_caption}/>) 
                        : 
                        (<div key={post.post_id} className="postContainer">
                            <img src={post.post_media_url} 
                                alt={post.post_caption}/>
                        </div>)
                        }
                    
                    </>
                })
            )
        }
    },[posts]);

    return <div className="postSpread">{renderedPosts}</div>
}

export default InstagramPosts;
