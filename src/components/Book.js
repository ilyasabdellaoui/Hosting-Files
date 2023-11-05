import React from 'react';
import '../styles/Book.css';
import Carousel from './Carousel'

function Book(props) {
    return (
        <div className="Bk">
        <div className="book-container">
            <img src={props.book.image} alt={props.book.title} className="book-image" />
            <div className="book-details">
                <h2 className="book-title">{props.book.title}</h2>
                <p className="book-description">{props.book.description}</p>
                <p className="book-writer">{props.book.writer}</p>
                <a href={props.book.downloadLink} className="book-download-button" target="_blank" rel="noopener noreferrer">Download</a>
            </div>
        </div>
        <div className="OtherBooks">
                <h2 className="OtherBooks-title">Read More...</h2>
        </div>
        <Carousel />
        </div>

    );
}

export default Book;
