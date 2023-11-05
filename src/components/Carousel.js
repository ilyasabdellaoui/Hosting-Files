import React, { useState } from 'react';
import SVGComponent from '../styles/OpenPopup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "../styles/Carousel.css";

const CustomCarousel = () => {
  const bookData = [
    {
      route: "BAM",
      title: "LA BOÎTE À MERVEILLES",
      description:  "Roman marocain d'Ahmed Sefrioui relatant la vie de Sidi Mohammed, un enfant de 6 ans souffrant de solitude, dans l'ancienne Médina de Fès.",
      image: "../../BAM.png",
    },
    {
      route: "ANT",
      title: "ANTIGONE",
      description: "Pièce de théâtre de Jean Anouilh qui revisite le mythe antique d'Antigone, mettant en scène le conflit entre la loyauté envers la famille et la loi de l'État.",
      image: "../../ANT.png",
    },
    {
      route: "DJC",
      title: "LE DERNIER JOUR D'UN CONDAMNÉ",
      description: "Roman de Victor Hugo décrivant les émotions du condamné à mort lors de son dernier jour, explorant l'angoisse et la désespérance avant l'exécution.",
      image: "../../DJC.png"
    },
  ];
  const [isSvgVisible, setIsSvgVisible] = useState(false);

  return (
    <Carousel>
      {bookData.map((book, index) => (
        <Carousel.Item key={index}>
        <div className="carousel-div">
        <div className="card-link" onClick={() => { window.location.href = book.route }} style={{ cursor: 'pointer' }}>
            <Card className="card"       
              onMouseEnter={() => setIsSvgVisible(true)}
              onMouseLeave={() => setIsSvgVisible(false)}
            >
              <SVGComponent className="svg-container" style={{ display: isSvgVisible ? 'block' : 'none' }}/>
              <Card.Img className="card-img" variant="top" src={book.image} alt={book.title} />
              <div className="card-main">
                <Card.Body className="card-body">
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>{book.description}</Card.Text>
                </Card.Body>
                <Button className="card-readMore">Read More</Button>
              </div>
            </Card>
          </div>
        </div>
      </Carousel.Item>
      
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
