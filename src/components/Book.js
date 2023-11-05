import React from 'react';
import '../styles/Book.css';

function Book(props) {
    return (
        <div className="book-container">
            <img src={props.book.image} alt={props.book.title} className="book-image" />
            <div className="book-details">
                <h2 className="book-title">{props.book.title}</h2>
                <p className="book-description">{props.book.description}</p>
                <p className="book-writer">{props.book.writer}</p>
                <div className="download-links">
                    <a href={props.book.downloadLink} className="book-download-button arabic" target="_blank" rel="noopener noreferrer">Download Arabic</a>
                    <a href={props.book.downloadFrench} className="book-download-button french" target="_blank" rel="noopener noreferrer">Download French</a>
                </div>
            </div>
        </div>

    );
}

export default Book;
