import About from "../components/about.js";
import profilePicture from "../images/profile-photo.webp";

function AboutPage() {
  const images = [
    {
      key: 1,
      image: profilePicture,
      width: 1000,
      height: 1250,
      alt: "Profile picture of a woman standing near a dresser drawer.",
      id: "snyder-living-room",
    },
  ];

  const bios = [
    {
      key: 0,
      id: "paragraph1",
      paragraph:
        "Growing up with an antique collector for a grandmother and artist for a mother, beautiful interiors have always been the backdrop for Edie’s life. Even as a teen, hanging artwork at just the right height, picking a new paint color for a bedroom or spending hours combing through thrift stores were thrilling activities. After graduating from Wheaton College with a BA in Art History, it came as a surprise to no one when she moved to New York City to pursue a career in interior design.",
    },
    {
      key: 1,
      id: "paragraph2",
      paragraph:
        "For over a decade, Edie has worked for some of the top high-end residential designers, such as Julie Hillman, Lucien Rees Roberts, and most recently Ohara Davies-Gaetano, honing her craft and pushing the boundaries of her own taste. She has taken from each experience a range of knowledge that informs her current designs in an eclectic way and self-describes her work as chic yet comfortable with a high emphasis on color (Edie believes all white interiors are lazy and downright boring!)",
    },
    {
      key: 2,
      id: "paragraph3",
      paragraph:
        "Quality, artistry and timelessness are cornerstones of her design beliefs. At the center of these values is a strong focus on sustainability and circularity. Designing a beautiful space is one thing but to do so with a consciousness about the creation and lifespan of the furniture pieces that comprise it is where she finds meaning in her work.",
    },
    {
      key: 3,
      id: "paragraph4",
      paragraph:
        "Edie lives and works in NYC but is open to projects both domestic and international.",
    },
  ];

  return <About images={images} bios={bios} />;
}

export default AboutPage;
