import useGlobalStates from '../hooks/use-globalStates';
import Lightbox from './lightbox';

function Images ( {images} ) {

    const { isNavOpen, setIsGalleryOpen, setImageToShow } = useGlobalStates();

    const imageWidth = '1000';
    const imageHeight = '';

    const handleOpenGallery = (image) => {
        setIsGalleryOpen(true);
        setImageToShow(image)
    }

    // if an image's index is less than 7, map it to the first imageContainerColumn div
    const imageContainerColumn1 = images.filter((image)=> image.key < 7).map((image)=>{
        return <div className='imageContainer' key={image.key} onClick={()=>handleOpenGallery(image)}>
            {/* <div className='imageMask'></div> */}
            <img src={image.value}               
                width={imageWidth} 
                height={imageHeight}
                alt={image.alt}
                className='hoverAnimation'>
            </img>
        </div>
    })

    // if an image's index is greater than or equal to 7, map it to the first imageContainerColumn div
    const imageContainerColumn2 = images.filter((image)=> image.key >= 7).map((image)=>{
        return <div className='imageContainer' key={image.key} onClick={()=>handleOpenGallery(image)}>
            {/* <div className='imageMask'></div> */}
            <img src={image.value} 
                width={imageWidth} 
                height={imageHeight}
                alt={image.alt}>
            </img>
        </div>
    })

    const imageSpread = <>
        <div className={"imagesSpreadContainer"} style={isNavOpen ? {display: 'none'} : null}>
            <div className={"imagesSpreadColumn1"}>
                {imageContainerColumn1}
            </div>
            <div className="imagesSpreadColumn2">
                {imageContainerColumn2}
            </div>
        </div>
    </>

    return <>
        <Lightbox images={images}/>
        {imageSpread}
    </>

}

export default Images;
