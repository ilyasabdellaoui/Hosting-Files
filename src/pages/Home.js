import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Search from '../components/Search';
import Carousel from '../components/Carousel';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

function Home() {
  const visits = 10000;
  const bookDownloads = 100000;
  const numberOfBooks = 10;

  const baseUrl = window.location.href;
  const logoUrl = `${baseUrl}LOGO.png`;

  return (
    <div className="LandingPage">
        <Helmet>
          <meta name="description" content="Arabooks brings the world of translated books to Arabic readers. Explore a wide range of translated literature and expand your horizons with our collection." />
          <meta property="og:title" content="Arabooks: Bringing the World to Arabic Readers - Translated Books to Arabic" />
          <meta property="og:description" content="Arabooks brings the world of translated books to Arabic readers. Explore a wide range of translated literature and expand your horizons with our collection." />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Arabooks: Bringing the World to Arabic Readers - Translated Books to Arabic" />
          <meta name="twitter:description" content="Arabooks brings the world of translated books to Arabic readers. Explore a wide range of translated literature and expand your horizons with our collection." />
          <title>Arabooks: Bringing the World to Arabic Readers - Translated Books to Arabic</title>
          <meta property="og:url" content={baseUrl} />
          <meta property="og:image" content={logoUrl} />
          <meta name="twitter:image" content={logoUrl} />
          <link rel="canonical" href={baseUrl} />
        </Helmet>
        <Navbar />
        <Hero visits={visits} bookDownloads={bookDownloads} numberOfBooks={numberOfBooks} />
        <Search />
        <Carousel />
        <Contact/>
        <Footer />
    </div>
  );
}

export default Home;
