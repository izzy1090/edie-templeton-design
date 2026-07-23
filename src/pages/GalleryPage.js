import Images from "../components/gallery.js";

// High res images
import grammieKitchen from "../images/gallery/grammies-kitchen.jpg";
import bathroom2 from "../images/gallery/bathroom2.jpg";
import bathroom3 from "../images/gallery/bathroom3.jpg";
import bathroom4 from "../images/gallery/bathroom4.jpg";
import bathroom5 from "../images/gallery/bathroom5.jpg";
import diningRoom2 from "../images/gallery/dining-room2.jpg";
import bedroom1 from "../images/gallery/bedroom1.jpg";
import bedroom2 from "../images/gallery/bedroom2.jpg";
import bedroom3 from "../images/gallery/bedroom3.jpg";
import nightstand2 from "../images/gallery/nightstand2.jpg";
import NYT from "../images/gallery/NYT.jpg";
import nursery from "../images/gallery/nursery.jpg";
import nursery2 from "../images/gallery/nursery2.jpg";
import nurseryMyrtle from "../images/nursery-on-myrtle.jpg";
import tulipsAndBunny from "../images/tulips-and-bunny.jpg";
import octopusInACrib from "../images/octopus-in-a-crib.jpg";
import blackChairAndGirl from "../images/black-chair-and-girl.jpg";
import bedroomWithAPainting from "../images/bedroom-with-a-painting.jpg";
import flowersOnATable from "../images/flowers-on-a-table.jpg";

// Compressed images
import grammieKitchenCompressed from "../images/gallery/grammies-kitchen.webp";
import bathroom2Compressed from "../images/gallery/bathroom2.webp";
import bathroom3Compressed from "../images/gallery/bathroom3.webp";
import bathroom4Compressed from "../images/gallery/bathroom4.webp";
import bathroom5Compressed from "../images/gallery/bathroom5.webp";
import diningRoomCompressed2 from "../images/gallery/dining-room2.webp";
import bedroom1Compressed from "../images/gallery/bedroom1.webp";
import bedroom2Compressed from "../images/gallery/bedroom2.webp";
import bedroom3Compressed from "../images/gallery/bedroom3.webp";
import nightstand2Compressed from "../images/gallery/nightstand2.webp";
import NYTCompressed from "../images/gallery/NYT.webp";
import nurseryCompressed from "../images/gallery/nursery.webp";
import nurseryCompressed2 from "../images/gallery/nursery2.webp";
import nurseryMyrtleCompressed from "../images/nursery-on-myrtle.webp";
import tulipsAndBunnyCompressed from "../images/tulips-and-bunny.webp";
import octopusInACribCompressed from "../images/octopus-in-a-crib.webp";
import blackChairAndGirlCompressed from "../images/black-chair-and-girl.jpg";
import bedroomWithAPaintingCompressed from "../images/bedroom-with-a-painting.webp";
import flowersOnATableCompressed from "../images/flowers-on-a-table.webp";

function ImagesPage() {
  const images = [
    {
      key: 1,
      highResImage: nurseryMyrtle,
      compressedImage: nurseryMyrtleCompressed,
      width: 900,
      height: 1125,
      alt: "Nursery on Myrtle Ave.",
    },
    {
      key: 7,
      highResImage: bathroom4,
      compressedImage: bathroom4Compressed,
      width: 1300,
      height: 1733,
      alt: "Black tiled bathroom.",
    },
    {
      key: 5,
      highResImage: bedroomWithAPainting,
      compressedImage: bedroomWithAPaintingCompressed,
      width: 899,
      height: 1124,
      alt: "Bed with two night stands, some flowers and a mirror showing the room behind the viewer.",
    },
    {
      key: 4,
      highResImage: blackChairAndGirl,
      compressedImage: blackChairAndGirlCompressed,
      width: 900,
      height: 1260,
      alt: "Black chair with plants, a light fixture and a photograph of a woman in a chair.",
    },
    {
      key: 3,
      highResImage: octopusInACrib,
      compressedImage: octopusInACribCompressed,
      width: 900,
      height: 1125,
      alt: "Stuffed octopus in a crib.",
    },
    {
      key: 6,
      highResImage: flowersOnATable,
      compressedImage: flowersOnATableCompressed,
      width: 900,
      height: 1125,
      alt: "Flowers in a vase on a green table with a small bookshelf behind it.",
    },
    {
      key: 2,
      highResImage: tulipsAndBunny,
      compressedImage: tulipsAndBunnyCompressed,
      width: 899,
      height: 1124,
      alt: "Vase of tulips and a stuffed bunny.",
    },
    {
      key: 8,
      highResImage: bedroom2,
      compressedImage: bedroom2Compressed,
      width: 1200,
      height: 1800,
      alt: "Empty bedroom with chair and fur rug draped over the chair.",
    },
    {
      key: 9,
      highResImage: nursery2,
      compressedImage: nurseryCompressed2,
      width: 750,
      height: 1000,
      alt: "Green nursery.",
    },
    {
      key: 10,
      highResImage: diningRoom2,
      compressedImage: diningRoomCompressed2,
      width: 1000,
      height: 1333,
      alt: "Dining room with a blue couch, table with a white linen cloth and a golden light fixture",
    },
    {
      key: 11,
      highResImage: bathroom5,
      compressedImage: bathroom5Compressed,
      width: 1200,
      height: 1600,
      alt: "White bathroom with a bathtub and red flowers on a stool",
    },
    {
      key: 13,
      highResImage: bedroom3,
      compressedImage: bedroom3Compressed,
      width: 1100,
      height: 1466,
      alt: "Bedroom with warm green walls and an orange blanket laid over the bed",
    },
    {
      key: 14,
      highResImage: nursery,
      compressedImage: nurseryCompressed,
      width: 1000,
      height: 1333,
      alt: "Nursery with green walls and a crib",
    },
    {
      key: 15,
      highResImage: bathroom3,
      compressedImage: bathroom3Compressed,
      width: 1300,
      height: 1733,
      alt: "White bathroom with a towel draped over the bathtub",
    },
    {
      key: 17,
      highResImage: bathroom2,
      compressedImage: bathroom2Compressed,
      width: 1300,
      height: 1950,
      alt: "Bathroom shot 2.",
    },
    {
      key: 18,
      highResImage: bedroom1,
      compressedImage: bedroom1Compressed,
      width: 933,
      height: 1400,
      alt: "Dog sitting on bed in front of portrait in the background.",
    },
    {
      key: 19,
      highResImage: grammieKitchen,
      compressedImage: grammieKitchenCompressed,
      width: 1105,
      height: 1600,
      alt: "Edie's grandma's kitchen.",
    },
    {
      key: 20,
      highResImage: nightstand2,
      compressedImage: nightstand2Compressed,
      width: 1333,
      height: 2000,
      alt: "Nightstand photo 2.",
    },
    {
      key: 21,
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
