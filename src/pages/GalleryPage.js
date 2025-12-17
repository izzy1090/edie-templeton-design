import Images from "../components/gallery.js";

// High res images
import grammieKitchen from "../images/gallery/grammies-kitchen.jpg";
// import chineseCabinet from "../images/gallery/chinese-cabinet.jpg";
// import livingRoom1 from "../images/gallery/living-room1.jpg";
import livingRoom2 from "../images/gallery/living-room2.jpg";
// import livingRoom3 from "../images/gallery/living-room3.jpg";
import livingRoom4 from "../images/gallery/living-room4.jpg";
// import bathroom1 from "../images/gallery/bathroom1.jpg";
import bathroom2 from "../images/gallery/bathroom2.jpg";
import bathroom3 from "../images/gallery/bathroom3.jpg";
import bathroom4 from "../images/gallery/bathroom4.jpg";
import bathroom5 from "../images/gallery/bathroom5.jpg";
// import flowers from "../images/gallery/flowers.jpg";
// import diningRoom from "../images/gallery/dining-room.jpg";
import diningRoom2 from "../images/gallery/dining-room2.jpg";
import bedroom1 from "../images/gallery/bedroom1.jpg";
import bedroom2 from "../images/gallery/bedroom2.jpg";
import bedroom3 from "../images/gallery/bedroom3.jpg";
// import nightstand1 from "../images/gallery/nightstand1.jpg";
import nightstand2 from "../images/gallery/nightstand2.jpg";
import NYT from "../images/gallery/NYT.jpg";
import nursery from "../images/gallery/nursery.jpg";
import nursery2 from "../images/gallery/nursery2.jpg";

// Compressed images
import grammieKitchenCompressed from "../images/gallery/grammies-kitchen.webp";
// import chineseCabinetCompressed from "../images/gallery/chinese-cabinet.webp";
// import livingRoom1Compressed from "../images/gallery/living-room1.webp";
import livingRoom2Compressed from "../images/gallery/living-room2.webp";
// import livingRoom3Compressed from "../images/gallery/living-room3.webp";
import livingRoom4Compressed from "../images/gallery/living-room4.webp";
// import bathroom1Compressed from "../images/gallery/bathroom1.webp";
import bathroom2Compressed from "../images/gallery/bathroom2.webp";
import bathroom3Compressed from "../images/gallery/bathroom3.webp";
import bathroom4Compressed from "../images/gallery/bathroom4.webp";
import bathroom5Compressed from "../images/gallery/bathroom5.webp";
// import flowersCompressed from "../images/gallery/flowers.webp";
// import diningRoomCompressed from "../images/gallery/dining-room.webp";
import diningRoomCompressed2 from "../images/gallery/dining-room2.webp";
import bedroom1Compressed from "../images/gallery/bedroom1.webp";
import bedroom2Compressed from "../images/gallery/bedroom2.webp";
import bedroom3Compressed from "../images/gallery/bedroom3.webp";
// import nightstand1Compressed from "../images/gallery/nightstand1.webp";
import nightstand2Compressed from "../images/gallery/nightstand2.webp";
import NYTCompressed from "../images/gallery/NYT.webp";
import nurseryCompressed from "../images/gallery/nursery.webp";
import nurseryCompressed2 from "../images/gallery/nursery2.webp";

function ImagesPage() {
  const images = [
    {
      key: 1,
      highResImage: bathroom4,
      compressedImage: bathroom4Compressed,
      width: 1300,
      height: 1733,
      alt: "Black tiled bathroom.",
    },
    {
      key: 2,
      highResImage: bedroom2,
      compressedImage: bedroom2Compressed,
      width: 1200,
      height: 1800,
      alt: "Empty bedroom with chair and fur rug draped over the chair.",
    },
    {
      key: 3,
      highResImage: nursery2,
      compressedImage: nurseryCompressed2,
      width: 750,
      height: 1000,
      alt: "Green nursery.",
    },
    {
      key: 4,
      highResImage: diningRoom2,
      compressedImage: diningRoomCompressed2,
      width: 1000,
      height: 1333,
      alt: "Dining room with a blue couch, table with a white linen cloth and a golden light fixture",
    },
    {
      key: 5,
      highResImage: bathroom5,
      compressedImage: bathroom5Compressed,
      width: 1200,
      height: 1600,
      alt: "White bathroom with a bathtub and red flowers on a stool",
    },
    {
      key: 6,
      highResImage: livingRoom4,
      compressedImage: livingRoom4Compressed,
      width: 1300,
      height: 975,
      alt: "Living room with a grey couch, brown table and a blue octopus stuffed animal",
    },
    {
      key: 7,
      highResImage: bedroom3,
      compressedImage: bedroom3Compressed,
      width: 1100,
      height: 1466,
      alt: "Bedroom with warm green walls and an orange blanket laid over the bed",
    },
    {
      key: 8,
      highResImage: nursery,
      compressedImage: nurseryCompressed,
      width: 1000,
      height: 1333,
      alt: "Nursery with green walls and a crib",
    },
    {
      key: 9,
      highResImage: bathroom3,
      compressedImage: bathroom3Compressed,
      width: 1300,
      height: 1733,
      alt: "White bathroom with a towel draped over the bathtub",
    },
    {
      key: 10,
      highResImage: livingRoom2,
      compressedImage: livingRoom2Compressed,
      width: 1200,
      height: 1800,
      alt: "72 Clermont Ave shot # 2.",
    },
    {
      key: 11,
      highResImage: bathroom2,
      compressedImage: bathroom2Compressed,
      width: 1300,
      height: 1950,
      alt: "Bathroom shot 2.",
    },
    {
      key: 12,
      highResImage: bedroom1,
      compressedImage: bedroom1Compressed,
      width: 933,
      height: 1400,
      alt: "Dog sitting on bed in front of portrait in the background.",
    },
    {
      key: 13,
      highResImage: grammieKitchen,
      compressedImage: grammieKitchenCompressed,
      width: 1105,
      height: 1600,
      alt: "Edie's grandma's kitchen.",
    },
    {
      key: 14,
      highResImage: nightstand2,
      compressedImage: nightstand2Compressed,
      width: 1333,
      height: 2000,
      alt: "Nightstand photo 2.",
    },
    {
      key: 15,
      highResImage: NYT,
      compressedImage: NYTCompressed,
      width: 1800,
      height: 1200,
      alt: "Copy of the NYT laid out on a dining room table.",
    },
  ];

  return <Images images={images} />;
}

export default ImagesPage;
