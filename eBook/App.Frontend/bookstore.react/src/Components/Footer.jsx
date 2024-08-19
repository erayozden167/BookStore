// src/components/Footer.js
import React from 'react';
import "./css/Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer text-light py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-4">
                        <h5 className="mb-3">BookStore</h5>
                        <p className="small">
                            BookStore, en kaliteli kitapları bulabileceğiniz bir platformdur. Bizimle keyifli okumalar!
                        </p>
                    </div>
                    <div className="col-lg-2 col-md-6 mb-4">
                        <h5 className="mb-3">Hızlı Bağlantılar</h5>
                        <ul className="list-unstyled">
                            <li><a href="/">Anasayfa</a></li>
                            <li><a href="/shop">Kitaplar</a></li>
                            <li><a href="/about">Hakkımızda</a></li>
                            <li><a href="/contact">İletişim</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <h5 className="mb-3">İletişim Bilgileri</h5>
                        <p className="small">
                            Adres: 1234 Kitap Caddesi, İstanbul, Türkiye
                        </p>
                        <p className="small">
                            Telefon: +90 123 456 7890
                        </p>
                        <p className="small">
                            E-posta: info@bookstore.com
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="mb-3">Bizi Takip Edin</h5>
                        <div className="d-flex">
                            <a href="#" className="me-3"><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a href="#" className="me-3"><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href="#" className="me-3"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <p className="small mb-0">&copy; 2024 BookStore. Tüm Hakları Saklıdır.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
