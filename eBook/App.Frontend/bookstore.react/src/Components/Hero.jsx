// src/components/Hero.js
import React from 'react';
import "./css/Hero.css";

const Hero = () => {
    return (
        <div className="container-fluid py-5 mb-5 hero-header">
            <div className="container py-5">
                <div className="row g-5 align-items-center">
                    <div className="col-md-12 col-lg-7">
                        <h4 className="mb-3 text-light">100% Organic Foods</h4>
                        <h1 className="mb-5 display-3 text-white">Organic Veggies & Fruits Foods</h1>
                        <div className="position-relative mx-auto">
                            <input className="form-control border-2 border-light w-75 py-3 px-4 rounded-pill" type="text" placeholder="Search for products..." />
                            <button type="submit" className="btn btn-primary border-2 border-light py-3 px-4 position-absolute rounded-pill text-white h-100" style={{ top: 0, right: '10%' }}>Search</button>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-5">
                        <div id="carouselId" className="carousel slide position-relative" data-bs-ride="carousel">
                            <div className="carousel-inner" role="listbox">
                                <div className="carousel-item active rounded">
                                    <img src="../assets/img/hero-img-1.png" className="img-fluid w-100 h-100 bg-secondary rounded" alt="First slide" />
                                    <a href="#" className="btn btn-light px-4 py-2 text-dark rounded">Fruits</a>
                                </div>
                                <div className="carousel-item rounded">
                                    <img src="../assets/img/hero-img-2.jpg" className="img-fluid w-100 h-100 rounded" alt="Second slide" />
                                    <a href="#" className="btn btn-light px-4 py-2 text-dark rounded">Vegetables</a>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
