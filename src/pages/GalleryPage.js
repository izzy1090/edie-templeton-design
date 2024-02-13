import Images from '../components/gallery';

// High res images
import grammieKitchen from '../images/gallery/grammies-kitchen.jpg';
import chineseCabinet from '../images/gallery/chinese-cabinet.jpg';
import livingRoom1 from '../images/gallery/living-room1.jpg';
import livingRoom2 from '../images/gallery/living-room2.jpg';
import livingRoom3 from '../images/gallery/living-room3.jpg';
import bathroom1 from '../images/gallery/bathroom1.jpg';
import bathroom2 from '../images/gallery/bathroom2.jpg';
import flowers from '../images/gallery/flowers.jpg';
import diningRoom from '../images/gallery/dining-room.jpg';
import bedroom1 from '../images/gallery/bedroom1.jpg';
import bedroom2 from '../images/gallery/bedroom2.jpg';
import nightstand1 from '../images/gallery/nightstand1.jpg';
import nightstand2 from '../images/gallery/nightstand2.jpg';
import NYT from '../images/gallery/NYT.jpg';

// Compressed images
import grammieKitchenCompressed from '../images/gallery/grammies-kitchen.webp';
import chineseCabinetCompressed from '../images/gallery/chinese-cabinet.webp';
import livingRoom1Compressed from '../images/gallery/living-room1.webp';
import livingRoom2Compressed from '../images/gallery/living-room2.webp';
import livingRoom3Compressed from '../images/gallery/living-room3.webp';
import bathroom1Compressed from '../images/gallery/bathroom1.webp';
import bathroom2Compressed from '../images/gallery/bathroom2.webp';
import flowersCompressed from '../images/gallery/flowers.webp';
import diningRoomCompressed from '../images/gallery/dining-room.webp';
import bedroom1Compressed from '../images/gallery/bedroom1.webp';
import bedroom2Compressed from '../images/gallery/bedroom2.webp';
import nightstand1Compressed from '../images/gallery/nightstand1.webp';
import nightstand2Compressed from '../images/gallery/nightstand2.webp';
import NYTCompressed from '../images/gallery/NYT.webp';

function ImagesPage () {

    const imageArray = [ 
        {key: 0, highResImage: grammieKitchen, compressedImage: grammieKitchenCompressed, width: 1105, height: 1600, alt: "Edie's grandma's kitchen." }, 
        {key: 1, highResImage: chineseCabinet, compressedImage: chineseCabinetCompressed, width: 1000, height: 1500, alt: 'Ornate black and gold chinese cabinet.'}, 
        {key: 2, highResImage: livingRoom1, compressedImage: livingRoom1Compressed, width: 1800, height: 1200, alt: '72 Clermont Ave shot # 1.'}, 
        {key: 3, highResImage: livingRoom2, compressedImage: livingRoom2Compressed, width: 1200, height: 1800, alt: '72 Clermont Ave shot # 2.'}, 
        {key: 4, highResImage: livingRoom3, compressedImage: livingRoom3Compressed, width: 1200, height: 1800, alt: '72 Clermont Ave shot # 3.'}, 
        {key: 5, highResImage: bathroom1, compressedImage: bathroom1Compressed, width: 1300, height: 1950, alt: 'Bathroom shot 1.'}, 
        {key: 6, highResImage: bathroom2, compressedImage: bathroom2Compressed, width: 1300, height: 1950, alt: 'Bathroom shot 2.'}, 
        {key: 7, highResImage: flowers, compressedImage: flowersCompressed, width: 1067, height: 1600, alt: 'Bouquet of flowers.'}, 
        {key: 8, highResImage: diningRoom, compressedImage: diningRoomCompressed, width: 1000, height: 1500, alt: "Edie's parent's living room."}, 
        {key: 9, highResImage: bedroom1, compressedImage: bedroom1Compressed, width: 933, height: 1400, alt: 'Dog sitting on bed in front of portrait in the background.'}, 
        {key: 10, highResImage: bedroom2, compressedImage: bedroom2Compressed, width: 1200, height: 1800, alt: 'Empty bedroom with chair and fur rug draped over the chair.'}, 
        {key: 11, highResImage: nightstand1, compressedImage: nightstand1Compressed, width: 1067, height: 1600, alt: 'Nightstand photo 1.'}, 
        {key: 12, highResImage: nightstand2, compressedImage: nightstand2Compressed, width: 1333, height: 2000,  alt: 'Nightstand photo 2.'}, 
        {key: 13, highResImage: NYT, compressedImage: NYTCompressed, width: 1800, height: 1200, alt: 'Copy of the NYT laid out on a dining room table.'} 
    ]

    return <Images images={imageArray}/>
}

export default ImagesPage;
