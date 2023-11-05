import './Books.css';
import Navbar from '../components/Navbar';
import Book from '../components/Book';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const BookData = [
  {
      abbr: "ANT",
      title: "Antigone",
      image: window.location + ".png",
      description: "Antigone est une pièce de théâtre écrite par Jean Anouilh en 1942 et représentée pour la première fois le 4 février 1944 au théâtre de l'Atelier à Paris. Elle fait partie de la série des « Pièces noires » d'Anouilh, qui revisite les mythes grecs de façon moderne. La pièce est inspirée de la mythologie grecque et plus précisément du mythe d'Antigone, fille d'Œdipe. Elle est la fille de Jocaste et Œdipe, roi de Thèbes. Elle est la sœur d'Étéocle et Polynice. Elle est fiancée à Hémon, fils de Créon. Elle est la nièce de Créon, roi de Thèbes. Elle est la petite-fille de Laïos et Jocaste. Elle est la petite-nièce de Pélops et Hippodamie.",
      writer: "Jean Anouilh",
      downloadLink: "https://www.google.com"
  },
  {
      abbr: "DJC",
      title: "Le Dernier Jour d'un Condamné",
      image: window.location + ".png",
      description: "Le Dernier Jour d'un condamné est un roman de Victor Hugo publié en 1829 chez Charles Gosselin, un an avant la parution de Notre-Dame de Paris. Il s'agit d'un réquisitoire contre la peine de mort. Le roman est écrit à la première personne et relate les vingt-quatre dernières heures d'un condamné à mort qui va être exécuté le lendemain matin. Il est composé de 48 chapitres, chacun correspondant à une heure de la journée.Le narrateur est un condamné à mort qui va être exécuté le lendemain matin. Il est enfermé dans une cellule de la prison de Bicêtre. Il est très triste et il est très déprimé. Il est très angoissé et il a très peur de la mort.",
      writer: "Victor Hugo",
      downloadLink: "https://www.google.com"
  },
  {
      abbr: "BAM",
      title: "La Boîte à Merveilles",
      image: window.location + ".png",
      description: "La Boîte à Merveilles est un roman autobiographique de l'écrivain marocain Ahmed Sefrioui, publié en 1954. Il est considéré comme l'un des premiers romans marocains écrits en français. Le roman raconte l'histoire d'un enfant, Sidi Mohammed, qui vit dans la médina de Fès avec ses parents et sa nourrice, la vieille dame. Il est le seul enfant de la famille et il est très gâté par sa mère. Il est très proche de sa nourrice qui lui raconte des histoires et lui chante des chansons. Il est très attaché à sa mère et à sa nourrice. Il est très curieux et il aime bien explorer les choses. Il est très sensible et il pleure facilement.",
      writer: "Ahmed Sefrioui",
      downloadLink: "https://www.google.com"
  }
];

function Books() {
  const bookAbbr = window.location.pathname.replace("/", "");
  const book = BookData.find(book => book.abbr === bookAbbr);

  if (!book) {
      return null;
  }

  return (
    <div className="page">
      <Navbar />
      <Book book={book} />
      <Contact />
      <Footer />
    </div>
  );
}

export default Books;
