import grammieKitchen from '../images/grammies-kitchen.jpg';
import chineseCabinet from '../images/chinese-cabinet.jpg';
import livingRoom1 from '../images/living-room1.jpg';
import livingRoom2 from '../images/living-room2.jpg';
import livingRoom3 from '../images/living-room3.jpg';
import bathroom1 from '../images/bathroom1.jpg';
import bathroom2 from '../images/bathroom2.jpg';
import flowers from '../images/flowers.jpg';
import diningRoom from '../images/dining-room.jpg';
import bedroom1 from '../images/bedroom1.jpg';
import bedroom2 from '../images/bedroom2.jpg';
import nightstand1 from '../images/nightstand1.jpg';
import nightstand2 from '../images/nightstand2.jpg';
import NYT from '../images/NYT.jpg';

function ImagesPage () {

    const imageWidth = 1000;

    const images = <>
        <div className="imagesContainer">
            <div className="imageContainerColumn1">
                <img src={grammieKitchen} width={imageWidth} alt=""></img>
                <img src={chineseCabinet} width={imageWidth} alt=""></img>
                <img src={livingRoom1} width={imageWidth} alt=""></img>
                <img src={livingRoom2} width={imageWidth} alt="" loading='lazy'></img>
                <img src={livingRoom3} width={imageWidth} alt="" loading='lazy'></img>
                <img src={bathroom1} width={imageWidth} alt="" loading='lazy'></img>
                <img src={bathroom2} width={imageWidth} alt="" loading='lazy'></img>
            </div>
            <div className="imageContainerColumn2">
                <img src={flowers} width={imageWidth} alt=""></img>
                <img src={diningRoom} width={imageWidth} alt=""></img>
                <img src={bedroom1} width={imageWidth} alt=""></img>
                <img src={bedroom2} width={imageWidth} alt="" loading='lazy'></img>
                <img src={nightstand1} width={imageWidth} alt="" loading='lazy'></img>
                <img src={nightstand2} width={imageWidth} alt="" loading='lazy'></img>
                <img src={NYT} width={imageWidth} alt="" loading='lazy'></img>
            </div>
        </div>
    </>

    return <>{images}</>
}

export default ImagesPage;
