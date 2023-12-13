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
        {key: 0, value: grammieKitchen, alt: "Edie's grandma's kitchen."}, 
        {key: 1, value: chineseCabinet, alt: 'Ornate black and gold chinese cabinet.'}, 
        {key: 2, value: livingRoom1, width: 1800, height: 1200, alt: '72 Clermont Ave shot # 1.', loading: 'lazy'}, 
        {key: 3, value: livingRoom2, width: 1200, height: 1800, alt: '72 Clermont Ave shot # 2.', loading: 'lazy' }, 
        {key: 4, value: livingRoom3, width: 1200, height: 1800, alt: '72 Clermont Ave shot # 3.', loading: 'lazy'}, 
        {key: 5, value: bathroom1, width: 1300, height: 1950, alt: 'Bathroom shot 1.', loading: 'lazy'}, 
        {key: 6, value: bathroom2, width: 1300, height: 1950, alt: 'Bathroom shot 2.', loading: 'lazy'}, 
        {key: 7, value: flowers, width: 1067, height: 1600, alt: 'Bouquet of flowers.', loading: 'lazy'}, 
        {key: 8, value: diningRoom, width: 1000, height: 1500, alt: "Edie's parent's living room.", loading: 'lazy'}, 
        {key: 9, value: bedroom1, width: 933, height: 1400, alt: 'Dog sitting on bed in front of portrait in the background.', loading: 'lazy'}, 
        {key: 10, value: bedroom2, width: 1200, height: 1800, alt: 'Empty bedroom with chair and fur rug draped over the chair.', loading: 'lazy'}, 
        {key: 11, value: nightstand1, width: 1067, height: 1600, alt: 'Nightstand photo 1.', loading: 'lazy'}, 
        {key: 12, value: nightstand2, width: 1333, height: 2000,  alt: 'Nightstand photo 2.', loading: 'lazy'}, 
        {key: 13, value: NYT, width: 1800, height: 1200, alt: 'Copy of the NYT laid out on a dining room table.', loading: 'lazy'} ];

    return <Images images={imageArray}/>
}

export default ImagesPage;
