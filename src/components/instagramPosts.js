import { useEffect, useState } from "react";
import Carousel from "./carousel.js";

function InstagramPosts ( ){
    const [ posts, setPosts ] = useState(null);
    const [ renderedPosts, setRenderedPosts ] = useState(null);
    const [ isLatestPostBatch, setIsLatestPostBatch ] = useState(true);

    const handleFetchPosts = async (postBatch) => {
        try {
            // This handles the first time the page loads
            if (isLatestPostBatch & postBatch === undefined)
            {
                console.log('fetching posts for the first time');
                const request = await fetch(`/api/db-fetch-posts`);
                const result = await request.json();
                setPosts(result.result);
                setIsLatestPostBatch(false);
            } 
            // This is for every subsequent post fetch
            else if (!isLatestPostBatch & postBatch !== undefined)
            {
                console.log('fetching subsequent posts...');
                const request = await fetch(`/api/db-fetch-posts?offset=${postBatch}`);
                const result = await request.json();
                setPosts((prevPosts)=>{
                    if (result !== undefined){
                        return [...prevPosts, ...result.result]
                    }                    
                })
            }  
    
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        if (isLatestPostBatch){
            handleFetchPosts();
        }
    });

    useEffect(()=>{
        if (posts !== null){
            
            // Find a better way to update posts.result below so the posts already rendered don't get replaced, just merely added on
            setRenderedPosts(
                posts.map((post, index)=>{
                    const isCarouselAlbum = post.post_media_type === 'CAROUSEL_ALBUM';
                    return <div id='post' index={index} key={post.post_id}>
                        {isCarouselAlbum ?
                        (<Carousel post={post} caption={post.post_caption}/>) 
                        : 
                        (<div className="postContainer">
                            <img id="image" src={post.post_media_url} 
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
                rootMargin: "0px", 
                threshold: 0.7
            };
            const observer = new IntersectionObserver((entries)=>{
                const postList = document.querySelectorAll('#image');
                const lastPost = postList.item(postList.length - 1);
                entries.forEach((entry, index)=>{
                    if (entry.isIntersecting)
                    {
                        if (entry.target === lastPost){
                            handleFetchPosts(postList.length)
                        } else
                            setTimeout(()=>{
                                const parentContainer = entry.target.parentElement; 
                                parentContainer.style.transform = "translateY(0%)";
                                parentContainer.style.opacity = 1;
                                parentContainer.style.transition = 'opacity 1s ease, transform 1s ease';
                                observer.unobserve(entry.target);
                            }, 300 * index)
                    } 
                })
            }, options);
        
            const images = document.querySelectorAll('#image');
            images.forEach((image)=>{
                observer.observe(image)
            });

            return () => {
                images.forEach((image)=>{
                    observer.unobserve(image)
                });
                observer.disconnect();
            }
        }
    }, [renderedPosts]);

    return <>{renderedPosts}</>
}

export default InstagramPosts;
