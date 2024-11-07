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
                if (result.length > 0) {
                    setPosts((prevPosts)=>{
                        if (result !== undefined){
                            return [...prevPosts, ...result.result]
                        }                    
                    })
                }
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
            setRenderedPosts(
                posts.map((post)=>{
                    const isCarouselAlbum = post.post_media_type === 'CAROUSEL_ALBUM';
                    return <div id='post' key={post.post_id}>
                            {isCarouselAlbum ?
                            (<Carousel post={post} caption={post.post_caption}/>)  
                            : 
                            (<div className="postContainer">
                                <img id="media" src={post.post_media_url} 
                                    alt={post.post_caption}/>
                            </div>)}
                    </div>
                })
            )
        }
    },[posts]);
    
    useEffect(()=>{
        if (renderedPosts !== null){
            const options = {
                rootMargin: "100px", 
                threshold: 0.3
            };
            const observer = new IntersectionObserver((entries)=>{
                const postList = document.querySelectorAll('#media');
                const lastPost = postList.item(postList.length - 1);
                const postIntroAnim = (entry, index) => {
                    setTimeout(()=>{
                        const parentContainer = entry.target.parentElement; 
                        parentContainer.style.transform = "translateY(0%)";
                        parentContainer.style.opacity = 1;
                        parentContainer.style.transition = 'opacity 1s ease, transform 1s ease';
                        observer.unobserve(entry.target);
                    }, 300 * index)
                }
                entries.forEach((entry, index)=>{
                    if (entry.isIntersecting)
                    {
                        if (entry.target === lastPost){
                            postIntroAnim(entry, index);
                            handleFetchPosts(postList.length);
                        } else
                            postIntroAnim(entry, index);
                    } 
                })
            }, options);
        
            const medias = document.querySelectorAll('#media');
            medias.forEach((media)=>{
                observer.observe(media)
            });

            return () => {
                medias.forEach((media)=>{
                    observer.unobserve(media)
                });
                observer.disconnect();
            }
        } 
    // eslint-disable-next-line
    });

    return <>{renderedPosts}</>
}

export default InstagramPosts;
