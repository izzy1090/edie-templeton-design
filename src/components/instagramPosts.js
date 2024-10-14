import { useEffect, useState } from "react";
import Carousel from "./carousel.js";

function InstagramPosts ( ){
    const [ posts, setPosts ] = useState(null);
    const [ renderedPosts, setRenderedPosts ] = useState(null);
    const [ latestPosts, setLatestPosts ] = useState(false);

    const handleFetchPosts = async (postBatch) => {
        try {
            // two bugs to figure out
                // Prevent from undefined being set to post.results
                // Figure out a better way to test if this is the first time the page is being loaded
            console.log(postBatch)
            if (latestPosts & postBatch === undefined){
                console.log('fetching posts...');
                const request = await fetch(`/api/db-fetch-posts`);
                const result = await request.json();
                setPosts(result);
                setLatestPosts(false);
            } 
            else if (!latestPosts & postBatch !== undefined){
                console.log('fetching posts...');
                const request = await fetch(`/api/db-fetch-posts?offset=25`);
                const result = await request.json();
                console.log(result);
                setPosts(result);
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleScroll = () => {

        // Use window.innerHeight + window.scrollY to determine bottom position and check if .offsetHeight is lower (i.e. it won't work).
        const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight
    
        if (bottom) {
        //   figure out how to pass the next interval in a postBatch
        handleFetchPosts(25);
        console.log('reached the bottom')
        }
    };

    document.addEventListener('readystatechange', function() {
        if (document.readyState === 'complete') {
            console.log('React app DOM is fully loaded.');
                window.addEventListener('scroll', handleScroll, {
                passive: true
            });
            
            return () => window.removeEventListener('scroll', handleScroll);
        }
    });


    useEffect(()=>{
        setLatestPosts(true);
    }, []);

    useEffect(()=>{
        if (latestPosts){
            handleFetchPosts();
        }
    }, [latestPosts])

    const handleImageLoaded = () => {
        // setIsImageLoaded((currentCounter)=>{
        //     const newCounter = 1;
        //     return currentCounter+=newCounter;
        // })
    }

    useEffect(()=>{
        if (posts !== null){
            // Find a better way to update posts.result below so the posts already rendered don't get replaced, just merely added on
            setRenderedPosts(
                posts.result.map((post, index)=>{
                    const isCarouselAlbum = post.post_media_type === 'CAROUSEL_ALBUM';
                    return <div id='post' index={index} key={post.post_id}>
                        {isCarouselAlbum ?
                        (<Carousel loaded={handleImageLoaded} post={post} caption={post.post_caption}/>) 
                        : 
                        (<div className="postContainer">
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
        if (renderedPosts !== null){
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
    }, [renderedPosts]);

    return <>{renderedPosts}</>
}

export default InstagramPosts;
