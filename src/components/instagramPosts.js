import { useEffect, useState } from "react";
import fetchPosts from "../api/fetch-posts.js";
import Carousel from "./carousel.js";

function InstagramPosts ( ){
    const [ posts, setPosts ] = useState(null);
    const [ renderedPosts, setRenderedPosts ] = useState(null);

    const handleFetchPosts = async () => {
        try {
            const request = await fetchPosts();
            setPosts(request)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        handleFetchPosts()
    }, []);

    useEffect(()=>{
        if (posts !== null){
            console.log(posts.data)
            setRenderedPosts(
                posts.data.map((post)=>{
                    const isCarouselAlbum = post.media_type === 'CAROUSEL_ALBUM';

                    return <>
                        {isCarouselAlbum ?
                        (<Carousel post={post}/>) 
                        : 
                        (<div key={post.id} className="postContainer">
                            <img src={post.media_url} 
                                alt={post.caption} 
                            />
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
