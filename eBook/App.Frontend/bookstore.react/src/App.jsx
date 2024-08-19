// src/App.js
import React from 'react';
import Navbar from "./Components/Navbar";
import ProductList from './Components/ProductList';
import Footer from "./Components/Footer";
import BackToTop from "./Components/BackToTop";
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
    return (
        <>
            <Navbar />
            <div className="container">
                <ProductList />
            </div>
            <Footer />

        </>
    );
}

export default App;
