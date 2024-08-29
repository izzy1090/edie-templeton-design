function Carousel({post}){
    return post.children.data.map((carouselChild)=>{
        return <>
            <div key={carouselChild.id} 
            className="postContainer">
                <img src={carouselChild.media_url}/>
            </div>
        </>
    })
}

export default Carousel;
