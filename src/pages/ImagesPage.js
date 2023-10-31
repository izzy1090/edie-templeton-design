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

    const imageArray = [ 
        {key: 0, value: grammieKitchen}, 
        {key: 1, value: chineseCabinet}, 
        {key: 2, value: livingRoom1}, 
        {key: 3, value: livingRoom2}, 
        {key: 4, value: livingRoom3}, 
        {key: 5, value: bathroom1}, 
        {key: 6, value: bathroom2}, 
        {key: 7, value: flowers}, 
        {key: 8, value: diningRoom}, 
        {key: 9, value: bedroom1}, 
        {key: 10, value: bedroom2}, 
        {key: 11, value: nightstand1}, 
        {key: 12, value: nightstand2}, 
        {key: 13, value: NYT} ];

    return <Images images={imageArray}/>
}

export default ImagesPage;
