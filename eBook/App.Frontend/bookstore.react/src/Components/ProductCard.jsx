import React from 'react';
import './css/ProductCard.css';

const ProductCard = ({ book, onUpdate, onDelete }) => {
    // Date formatting function
    const formatDate = (date) => {
        return new Date(date).toLocaleDateString();
    };

    return (
        <div className="product-card shadow-sm mb-4">
            <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text text-muted">Author: {book.author}</p>
                <p className="card-text text-muted">Price: ${book.price}</p>
                <p className="card-text text-muted">Published Date: {formatDate(book.publishedDate)}</p>
                <div className="button-group">
                    <button
                        className="btn btn-update"
                        onClick={onUpdate}
                    >
                        Update
                    </button>
                    <button
                        className="btn btn-delete"
                        onClick={onDelete}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
