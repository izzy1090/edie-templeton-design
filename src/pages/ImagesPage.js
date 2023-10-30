import Images from '../components/images';
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

    const imageArray = [grammieKitchen, chineseCabinet, livingRoom1, livingRoom2, livingRoom3, bathroom1, bathroom2, flowers, diningRoom, bedroom1, bedroom2, nightstand1, nightstand2, NYT]

    return <Images images={imageArray}/>
}

export default ImagesPage;
