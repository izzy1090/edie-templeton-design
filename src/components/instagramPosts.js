import { useEffect, useState } from "react";
import Carousel from "./carousel.js";

function InstagramPosts ( ){
    const [ posts, setPosts ] = useState(null);
    const [ renderedPosts, setRenderedPosts ] = useState(null);
    const [ isImageLoaded, setIsImageLoaded ] = useState(0);

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

    const handleImageLoaded = () => {
        setIsImageLoaded((currentCounter)=>{
            const newCounter = 1;
            return currentCounter+=newCounter;
        })
    }

    useEffect(()=>{
        if (posts !== null){
            setRenderedPosts(
                posts.result.map((post)=>{
                    const isCarouselAlbum = post.post_media_type === 'CAROUSEL_ALBUM';
                    return <div id='post'>
                        {isCarouselAlbum ?
                        (<Carousel loaded={handleImageLoaded} post={post} caption={post.post_caption}/>) 
                        : 
                        (<div key={post.post_id} className="postContainer">
                            <img id="image" src={post.post_media_url} 
                                alt={post.post_caption}
                                onLoad={handleImageLoaded}/>
                        </div>)
                        }
                    </div>
                })
            )
        }
    },[posts]);

    useEffect(()=>{
        if (renderedPosts !== null & isImageLoaded === 25){
            const options = {
                rootMargin: "-100px",
            };
        
            const observer = new IntersectionObserver((entries)=>{
                entries.forEach((entry, index)=>{
                    setTimeout(()=>{
                        if (entry.isIntersecting){
                            const parentContainer = entry.target.parentElement; 
                            parentContainer.style.transform = "translateY(0%)";
                            parentContainer.style.opacity = 1;
                            parentContainer.style.transition = 'opacity 1s ease, transform 1s ease';
                            observer.unobserve(entry.target);
                        }
                    }, 300 * index)
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
    }, [renderedPosts, isImageLoaded]);

    return <>{renderedPosts}</>
}

export default InstagramPosts;
