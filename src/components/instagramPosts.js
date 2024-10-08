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

                    return <div id='post'>
                        {isCarouselAlbum ?
                        (<Carousel post={post} caption={post.post_caption}/>) 
                        : 
                        (<div key={post.post_id} className="postContainer">
                            <img src={post.post_media_url} 
                                alt={post.post_caption}/>
                        </div>)
                        }
                    </div>
                })
            )
        }
    },[posts]);

    useEffect(()=>{
        if (renderedPosts !== null){
            const options = {
                rootMargin: "-100px",
                threshold: 1.0,
                };
        
            const observer = new IntersectionObserver((entries)=>{
                entries.forEach((entry)=>{
                    if(entry.isIntersecting){
                        console.log(entry)
                    } 
                })
            }, options);
        
            const postContainers = document.querySelectorAll('#post');
            postContainers.forEach((postContainer)=>{
                observer.observe(postContainer)
            });

            return ()=>observer.disconnect()
        }
    }, [renderedPosts]);

    return <>{renderedPosts}</>
}

export default InstagramPosts;
