import { useState } from 'react';
import useGlobalStates from '../hooks/use-globalStates';

function Images ( {images} ) {

    const { isOpen } = useGlobalStates();
    const [ isGalleryOpen, setIsGalleryOpen ] = useState(false);

    const imageWidth = 1000;

    const handleClick = (image) => {
        setIsGalleryOpen(!isGalleryOpen);

        console.log("Image's index: ", image.key)
    }

    // if an image's index is less than 7, map it to the first imageContainerColumn div
    const imageContainerColumn1 = images.filter((image)=> image.key < 7).map((image)=>{
        return <img src={image.value} key={image.key} width={imageWidth} onClick={()=>handleClick(image)} alt=''></img>
    })
    // Uncomment to see what images are in the below container
    // console.log(imageContainerColumn1)

    // if an image's index is greater than or equal to 7, map it to the first imageContainerColumn div
    const imageContainerColumn2 = images.filter((image)=> image.key >= 7).map((image)=>{
        return <img src={image.value} key={image.key} width={imageWidth} onClick={()=>handleClick(image)} alt=''></img>
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
