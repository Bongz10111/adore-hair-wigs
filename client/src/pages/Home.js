import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Home = () => {
  return (
    <div style={{ paddingTop: '76px' }}>
      {/* Hero Section */}
      <section className="hero-section fade-in">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h1 className="display-4 fw-bold mb-4">
                Discover Your Perfect Look with 
                <span style={{ color: '#FFD700' }}> Adore Wigs</span>
              </h1>
              <p className="lead mb-4">
                Premium quality wigs and hair extensions that make you feel confident and beautiful. 
                Shop our exclusive collection today!
              </p>
              <LinkContainer to="/products">
                <Button size="lg" className="btn-gold">
                  Shop Now <i className="fas fa-arrow-right ms-2"></i>
                </Button>
              </LinkContainer>
            </Col>
            <Col lg={6}>
              <div className="text-center">
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Premium Wigs" 
                  className="img-fluid rounded shadow"
                  style={{ border: '3px solid #FFD700' }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      

      {/* Features Section */}
      <section className="py-5">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="fw-bold">Why Choose Adore Wigs?</h2>
              <p className="text-muted">Experience the difference with our premium collection</p>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="card-custom h-100 text-center border-0">
                <Card.Body>
                  <div className="mb-3">
                    <i className="fas fa-gem fa-3x" style={{ color: '#FFD700' }}></i>
                  </div>
                  <Card.Title>Premium Quality</Card.Title>
                  <Card.Text>
                    Handcrafted wigs made from the finest materials for a natural look and feel.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="card-custom h-100 text-center border-0">
                <Card.Body>
                  <div className="mb-3">
                    <i className="fas fa-shipping-fast fa-3x" style={{ color: '#FFD700' }}></i>
                  </div>
                  <Card.Title>Fast Delivery</Card.Title>
                  <Card.Text>
                    Quick and reliable shipping to get your perfect wig to you as soon as possible.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="card-custom h-100 text-center border-0">
                <Card.Body>
                  <div className="mb-3">
                    <i className="fas fa-headset fa-3x" style={{ color: '#FFD700' }}></i>
                  </div>
                  <Card.Title>Expert Support</Card.Title>
                  <Card.Text>
                    Our team is here to help you find the perfect wig and answer all your questions.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;