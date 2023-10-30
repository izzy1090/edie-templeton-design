import useGlobalStates from '../hooks/use-globalStates';

function Images ( {images} ) {

    const { isOpen } = useGlobalStates();

    const imageWidth = 1000;

    // if an image's index is less than 7, map it to the first imageContainerColumn div
    const imageContainerColumn1 = images.filter((image, i)=> i < 7).map((image, i)=>{
        return <img src={image} key={i} alt='' width={imageWidth}></img>
    })
    // Uncomment to see what images are in the below container
    // console.log(imageContainerColumn1)

    // if an image's index is greater than or equal to 7, map it to the first imageContainerColumn div
    const imageContainerColumn2 = images.filter((image, i)=> i >= 7).map((image, i)=>{
        return <img src={image} key={i} width={imageWidth} alt=''></img>
    })

    // Uncomment to see what images are in the below container
    // console.log(imageContainerColumn2)

    return <div className={isOpen ? "imagesContainer" : "imagesContainer beforeHover"}>
        <div className="imageContainerColumn1">
            {imageContainerColumn1}
        </div>
        <div className="imageContainerColumn2">
            {imageContainerColumn2}
        </div>
    </div>

}

export default Images;