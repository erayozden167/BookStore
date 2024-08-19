import React from 'react';
import "./css/Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingBag, faUser, faPlus } from '@fortawesome/free-solid-svg-icons'; // Import faPlus

const Navbar = ({ onAddBookClick }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <h1 className="text-white">BookStore</h1>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/shop">Books</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/shop-detail">Order</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Pages
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="/cart">Cart</a></li>
                                <li><a className="dropdown-item" href="/checkout">Checkout</a></li>
                                <li><a className="dropdown-item" href="/testimonial">Testimonial</a></li>
                                <li><a className="dropdown-item" href="/404">404 Page</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact</a>
                        </li>
                    </ul>
                    <div className="d-flex align-items-center">
                        <button className="btn btn-outline-light me-3" type="button" data-bs-toggle="modal" data-bs-target="#searchModal">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                        <a href="#" className="btn btn-outline-light position-relative me-3">
                            <FontAwesomeIcon icon={faShoppingBag} />
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                3
                            </span>
                        </a>
                        <a href="#" className="btn btn-outline-light">
                            <FontAwesomeIcon icon={faUser} />
                        </a>
                        <button className="btn btn-outline-light ms-3" type="button" onClick={onAddBookClick}>
                            <FontAwesomeIcon icon={faPlus} /> Add Product
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
