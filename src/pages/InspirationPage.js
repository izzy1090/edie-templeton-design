import InstagramPosts from "../components/instagramPosts.js";
import useGlobalStates from "../hooks/use-globalStates.js";

function InstagramPage(){
    
    const { isNavOpen } = useGlobalStates();

    return <>
        <div className="postSpread" style={isNavOpen ? {display: 'none'} : null}>
            <InstagramPosts/>
        </div>
    </>
}

export default InstagramPage;
