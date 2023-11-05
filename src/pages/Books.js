import React, { useEffect } from 'react';
import './Books.css';
import Navbar from '../components/Navbar';
import Book from '../components/Book';
import Carousel from '../components/Carousel';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const BookData = [
  {
      abbr: "ANT",
      title: "Antigone",
      image: window.location + ".png",
      description: "Antigone, écrite par Jean Anouilh en 1944, est une réinterprétation moderne de la tragédie antique de Sophocle, mais elle est ancrée dans les dilemmes de la France occupée pendant la Seconde Guerre mondiale. La pièce raconte l'histoire d'une famille et de ses guerres internes touchant aux thèmes de la loyauté, de la justice et du divin. Antigone est une tragédie moderne qui met en lumière la lutte de la protagoniste, Antigone, pour défendre ses convictions morales et religieuses en dépit des lois édictées par le pouvoir établi. Le message central de la pièce est celui de la résistance individuelle face à l’autorité oppressante.",
      writer: "Jean Anouilh",
      downloadLink: "https://www.google.com",
      downloadFrench: "https://www.google.com"
  },
  {
      abbr: "DJC",
      title: "Le Dernier Jour d'un Condamné",
      image: window.location + ".png",
      description: "Le Dernier jour d'un condamné, écrit par Victor Hugo en 1829, est un roman qui raconte les dernières heures de vie d'un condamné à mort. Le roman est un réquisitoire contre la peine de mort et dénonce la cruauté de la justice. Le personnage principal, le condamné, est anonyme et représente tous les condamnés à mort. Le roman est divisé en 48 chapitres, et le dernier chapitre décrit les derniers moments du condamné avant son exécution. Le roman est écrit à la première personne, ce qui permet au lecteur de ressentir les émotions du condamné.",
      writer: "Victor Hugo",
      downloadLink: "https://www.google.com",
      downloadFrench: "https://www.google.com"
  },
  {
      abbr: "BAM",
      title: "La Boîte à Merveilles",
      image: window.location + ".png",
      description: "La Boîte à merveilles est un roman autobiographique écrit par Ahmed Sefrioui en 1954. Le roman raconte la vie quotidienne d'une famille populaire dans la vieille ville de Fès, au Maroc, à l'époque du protectorat français. Le personnage principal, Sidi Mohammed, est un enfant de six ans qui décrit sa vie, ses rêves et ses peurs. Le roman est divisé en plus de trente souvenirs qui sont des tableaux de la vie quotidienne de la famille de Sidi Mohammed. La Boîte à merveilles est considérée comme un chef-d'œuvre de la littérature marocaine d'expression française.",
      writer: "Ahmed Sefrioui",
      downloadLink: "https://www.google.com",
      downloadFrench: "https://www.example.com"
      
  }
];

function Books() {
  const bookAbbr = window.location.pathname.replace("/", "");
  const book = BookData.find(book => book.abbr === bookAbbr);

  useEffect(() => {
    if (book) {
      // Set the page title based on the selected book's title
      document.title = `Arabooks - ${book.title}`;

      // Update meta tags for description and og:image
      const metaDescription = document.querySelector('meta[name="description"]');
      const ogTitle = document.querySelector('meta[property="og:title"]');
      const ogDescription = document.querySelector('meta[property="og:description"]');
      const ogImage = document.querySelector('meta[property="og:image"]');
      const twitterTitle = document.querySelector('meta[name="twitter:title"]');
      const twitterDescription = document.querySelector('meta[name="twitter:description"]');
      const twitterImage = document.querySelector('meta[name="twitter:image"]');

      metaDescription.setAttribute("content", book.description);
      ogTitle.setAttribute("content", book.title);
      ogDescription.setAttribute("content", book.description);
      ogImage.setAttribute("content", book.image);
      twitterTitle.setAttribute("content", book.title);
      twitterDescription.setAttribute("content", book.description);
      twitterImage.setAttribute("content", book.image);
    }
  }, [book]);

  if (!book) {
      return null;
  }

  return (
    <div className="page">
      <Navbar />
      <Book book={book} />
      <h2 className="OtherBooks">More to Explore</h2>
      <Carousel />
      <Contact />
      <Footer />
    </div>
  );
}

export default Books;
