import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const Footer = () => {
  return (
    <footer className="footer-custom mt-5 py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5 className="fw-bold">
              <i className="fas fa-crown me-2" style={{ color: '#FFD700' }}></i>
              ADORE WIGS & HAIR
            </h5>
            <p className="text-light">
              Premium quality wigs and hair extensions that make you feel confident and beautiful.
            </p>
            <div className="social-links">
              <a href="#" className="text-light me-3">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-light me-3">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-light me-3">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-light">
                <i className="fab fa-pinterest"></i>
              </a>
            </div>
          </Col>
          <Col md={2}>
            <h6 className="fw-bold">Shop</h6>
            <ul className="list-unstyled">
              <li><a href="/products" className="text-light text-decoration-none">All Products</a></li>
              <li><a href="/products?category=premium" className="text-light text-decoration-none">Premium Wigs</a></li>
              <li><a href="/products?category=human-hair" className="text-light text-decoration-none">Human Hair</a></li>
              <li><a href="/products?category=synthetic" className="text-light text-decoration-none">Synthetic</a></li>
            </ul>
          </Col>
          <Col md={2}>
            <h6 className="fw-bold">Support</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Contact Us</a></li>
              <li><a href="#" className="text-light text-decoration-none">Shipping Info</a></li>
              <li><a href="#" className="text-light text-decoration-none">Returns</a></li>
              <li><a href="#" className="text-light text-decoration-none">Size Guide</a></li>
            </ul>
          </Col>
          <Col md={2}>
            <h6 className="fw-bold">Company</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-light text-decoration-none">Privacy Policy</a></li>
              <li><a href="#" className="text-light text-decoration-none">Terms of Service</a></li>
            </ul>
          </Col>
          <Col md={2}>
            <h6 className="fw-bold">Contact</h6>
            <ul className="list-unstyled text-light">
              <li><i className="fas fa-phone me-2"></i> (555) 123-4567</li>
              <li><i className="fas fa-envelope me-2"></i> info@adorewigs.com</li>
              <li><i className="fas fa-map-marker-alt me-2"></i> 123 Beauty St, City</li>
            </ul>
          </Col>
        </Row>
        <hr className="my-4" style={{ borderColor: '#FFD700' }} />
        <Row>
          <Col className="text-center">
            <p className="mb-0 text-light">
              &copy; 2024 Adore Wigs & Hair. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;