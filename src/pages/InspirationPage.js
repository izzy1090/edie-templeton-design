import InstagramPosts from "../components/instagramPosts.js";
import useGlobalStates from "../hooks/use-globalStates.js";

function InstagramPage(){
    
    const { isNavOpen } = useGlobalStates();

    return <>
        <div style={isNavOpen ? {display: 'none'} : null}>
            Inspiration Page
            <InstagramPosts/>
        </div>
        
    </>
}

export default InstagramPage;
