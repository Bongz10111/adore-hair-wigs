import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './AboutAdore.css';

const AboutAdore = () => {
  return (
    <div style={{ paddingTop: '100px' }}>
      {/* Hero Section */}
      <section className="about-hero-section">
        <Container>
          <Row className="align-items-center min-vh-60">
            <Col lg={6}>
              <h1 className="about-hero-title gold-glow">
                Our Story at <span className="gold-text">Adore Wigs</span>
              </h1>
              <p className="about-hero-subtitle">
                Empowering confidence through exceptional quality and personalized service since day one.
              </p>
            </Col>
            <Col lg={6}>
              <div className="about-hero-image">
                <img 
                  src="/assets/images/about-hero.jpg" 
                  alt="Adore Wigs Story" 
                  className="about-hero-img"
                />
                <div className="gold-sparkle"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-section py-5">
        <Container>
          <Row>
            <Col lg={6} className="mb-5">
              <Card className="mission-card">
                <Card.Body>
                  <div className="mission-icon">
                    <i className="fas fa-bullseye"></i>
                  </div>
                  <Card.Title>Our Mission</Card.Title>
                  <Card.Text>
                    To provide every woman with access to premium quality wigs that enhance 
                    her natural beauty and boost her confidence. We believe that feeling 
                    beautiful shouldn't be a luxury—it should be accessible to all.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} className="mb-5">
              <Card className="vision-card">
                <Card.Body>
                  <div className="vision-icon">
                    <i className="fas fa-eye"></i>
                  </div>
                  <Card.Title>Our Vision</Card.Title>
                  <Card.Text>
                    To become the most trusted name in the wig industry, known for our 
                    uncompromising quality, exceptional customer service, and commitment 
                    to empowering women through beauty and self-expression.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

     

      {/* Values Section */}
      <section className="values-section py-5">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="section-title gold-glow">Our Core Values</h2>
              <p className="section-subtitle">The principles that guide everything we do</p>
            </Col>
          </Row>
          <Row>
            <Col lg={4} className="mb-4">
              <Card className="value-card">
                <Card.Body className="text-center">
                  <div className="value-icon">
                    <i className="fas fa-hand-holding-heart"></i>
                  </div>
                  <Card.Title>Quality First</Card.Title>
                  <Card.Text>
                    We never compromise on quality. Every wig is crafted with precision 
                    using the finest materials to ensure longevity and natural appearance.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} className="mb-4">
              <Card className="value-card">
                <Card.Body className="text-center">
                  <div className="value-icon">
                    <i className="fas fa-user-friends"></i>
                  </div>
                  <Card.Title>Customer Care</Card.Title>
                  <Card.Text>
                    Your satisfaction is our success. We provide personalized guidance 
                    and support to help you find the perfect wig for your needs.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} className="mb-4">
              <Card className="value-card">
                <Card.Body className="text-center">
                  <div className="value-icon">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <Card.Title>Trust & Integrity</Card.Title>
                  <Card.Text>
                    We believe in transparent pricing, honest advice, and building 
                    relationships based on trust and mutual respect.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

     

      {/* Stats Section */}
     
    </div>
  );
};

export default AboutAdore;