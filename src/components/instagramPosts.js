import { useEffect, useState } from "react";
import fetchPosts from "../api/fetch-posts.js";

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
                    return <>
                        <div key={post.id}>
                            <img 
                                src={post.media_url} 
                                alt={post.caption} 
                                width={500}
                            />
                        </div>
                    
                    </>
                })
            )
        }
    },[posts]);

    return <>{renderedPosts}</>
}

export default InstagramPosts;
