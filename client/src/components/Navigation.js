import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useCart } from '../context/CartContext';
import './Navigation.css';

const Navigation = () => {
  const { getCartItemsCount } = useCart();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar 
      expand="lg" 
      className={`navbar-custom fixed-top ${scrolled ? 'navbar-scrolled' : ''}`}
      variant="dark"
    >
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand className="brand-glow">
            <div className="logo-container">
              <img 
                src="/assets/images/logoadore.jpg" 
                alt="Adore Wigs & Hair"
                height="75"
                className="logo-img"
              />
              <div className="brand-text">
                ADORE WIGS & HAIR
              </div>
            </div>
          </Navbar.Brand>
        </LinkContainer>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <LinkContainer to="/">
              <Nav.Link className="nav-link-gold">
                <i className="fas fa-home me-2"></i>
                Home
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/products">
              <Nav.Link className="nav-link-gold">
                <i className="fas fa-shopping-bag me-2"></i>
                Shop Products
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about-adore">
              <Nav.Link className="nav-link-gold about-link">
                <i className="fas fa-heart me-2"></i>
                About Adore
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link className="nav-link-gold">
                <i className="fas fa-envelope me-2"></i>
                Contact
              </Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav>
            <LinkContainer to="/cart">
              <Nav.Link className="nav-link-gold cart-link">
                <div className="cart-icon-container">
                  <i className="fas fa-shopping-cart"></i>
                  {getCartItemsCount() > 0 && (
                    <Badge bg="gold" text="dark" className="cart-badge">
                      {getCartItemsCount()}
                    </Badge>
                  )}
                </div>
                <span className="cart-text">Cart</span>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;