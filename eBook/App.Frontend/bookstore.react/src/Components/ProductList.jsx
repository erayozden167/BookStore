import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import './css/ProductList.css';
import Navbar from './Navbar';

const ProductList = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingBook, setEditingBook] = useState(null);
    const [addingBook, setAddingBook] = useState(null); // State to handle the new book modal
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch('https://localhost:7229/api/Book');

                if (response.status === 204) {
                    console.log('No content available');
                    setBooks([]);  // Boþ liste set edilir
                } else if (response.status === 200) {
                    const data = await response.json();
                    console.log('Fetched books:', data);
                    setBooks(data);
                } else {
                    throw new Error('Unexpected response status');
                }
            } catch (error) {
                console.error('Error fetching books:', error);
                setError('Failed to load books');
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    // Handle update book
    const handleUpdate = (book) => {
        setEditingBook({ ...book });
    };

    // Save updated book to API
    const handleSaveUpdate = async (e) => {
        e.preventDefault();
        if (editingBook) {
            try {
                const response = await fetch('https://localhost:7229/api/Book', {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(editingBook),
                });

                if (!response.ok) {
                    const errorResponse = await response.json();
                    console.error('Error response:', errorResponse);
                    throw new Error('Failed to update book');
                }

                const updatedBook = await response.json();
                console.log('Updated book:', updatedBook);

                setBooks((prevBooks) =>
                    prevBooks.map((book) =>
                        book.id === updatedBook.id ? updatedBook : book
                    )
                );

                setEditingBook(null);
            } catch (error) {
                console.error('Error updating book:', error);
                setError('Failed to update book');
            }
        }
    };

    // Handle add new book
    const handleAddBook = async (e) => {
        e.preventDefault();
        if (addingBook) {
            try {
                const response = await fetch('https://localhost:7229/api/Book', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(addingBook),
                });

                if (response.status === 400) {
                    // Display an alert for 400 Bad Request
                    alert('Ürün eklenemedi');
                } else if (!response.ok) {
                    throw new Error('Failed to add book');
                } else {
                    const newBook = await response.json();
                    console.log('Added book:', newBook);

                    setBooks((prevBooks) => [...prevBooks, newBook]);
                    setAddingBook(null);
                }
            } catch (error) {
                console.error('Error adding book:', error);
                setError('Failed to add book');
            }
        }
    };

    // Handle delete book
    const handleDelete = async (bookId) => {
        if (window.confirm('Are you sure you want to delete this book?')) {
            try {
                const response = await fetch(`https://localhost:7229/api/Book/${bookId}`, {
                    method: 'DELETE',
                });

                if (!response.ok) throw new Error('Failed to delete book');

                setBooks((prevBooks) => prevBooks.filter(book => book.id !== bookId));
            } catch (error) {
                console.error('Error deleting book:', error);
                setError('Failed to delete book');
            }
        }
    };

    const handleOpenAddBookModal = () => {
        setAddingBook({ title: '', author: '', price: 0, publishedDate: '' });
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="product-list">
            <Navbar onAddBookClick={handleOpenAddBookModal} /> {/* Pass function to Navbar */}

            <div className="product-list-grid">
                {books.map(book => (
                    <ProductCard
                        key={book.id}
                        book={book}
                        onUpdate={() => handleUpdate(book)}
                        onDelete={() => handleDelete(book.id)}
                    />
                ))}
            </div>

            {editingBook && (
                <div className="modal-overlay">
                    <div className="modal-contents">
                        <h2>Update Book</h2>
                        <form onSubmit={handleSaveUpdate}>
                            <label>
                                Title:
                                <input
                                    type="text"
                                    name="title"
                                    value={editingBook.title}
                                    onChange={(e) => setEditingBook({ ...editingBook, title: e.target.value })}
                                />
                            </label>
                            <label>
                                Author:
                                <input
                                    type="text"
                                    name="author"
                                    value={editingBook.author}
                                    onChange={(e) => setEditingBook({ ...editingBook, author: e.target.value })}
                                />
                            </label>
                            <label>
                                Price:
                                <input
                                    type="number"
                                    name="price"
                                    value={editingBook.price}
                                    onChange={(e) => setEditingBook({ ...editingBook, price: parseInt(e.target.value, 10) || 0 })}
                                />
                            </label>
                            <label>
                                Publish Date:
                                <input
                                    type="date"
                                    name="publishedDate"
                                    value={editingBook.publishedDate}
                                    onChange={(e) => setEditingBook({ ...editingBook, publishedDate: e.target.value })}
                                />
                            </label>
                            <div className="modal-buttons">
                                <button type="submit" className="btn btn-update">Save</button>
                                <button type="button" className="btn btn-delete" onClick={() => setEditingBook(null)}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {addingBook && (
                <div className="modal-overlay">
                    <div className="modal-contents">
                        <h2>Add New Book</h2>
                        <form onSubmit={handleAddBook}>
                            <label>
                                Title:
                                <input
                                    type="text"
                                    name="title"
                                    value={addingBook.title}
                                    onChange={(e) => setAddingBook({ ...addingBook, title: e.target.value })}
                                />
                            </label>
                            <label>
                                Author:
                                <input
                                    type="text"
                                    name="author"
                                    value={addingBook.author}
                                    onChange={(e) => setAddingBook({ ...addingBook, author: e.target.value })}
                                />
                            </label>
                            <label>
                                Price:
                                <input
                                    type="number"
                                    name="price"
                                    value={addingBook.price}
                                    onChange={(e) => setAddingBook({ ...addingBook, price: parseInt(e.target.value, 10) || 0 })}
                                />
                            </label>
                            <label>
                                Publish Date:
                                <input
                                    type="date"
                                    name="publishedDate"
                                    value={addingBook.publishedDate}
                                    onChange={(e) => setAddingBook({ ...addingBook, publishedDate: e.target.value })}
                                />
                            </label>
                            <div className="modal-buttons">
                                <button type="submit" className="btn btn-save">Save</button>
                                <button type="button" className="btn btn-close" onClick={() => setAddingBook(null)}>Close</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProductList;
