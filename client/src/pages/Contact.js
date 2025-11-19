import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <Container style={{ paddingTop: '100px', minHeight: '80vh' }}>
        <Row className="text-center mb-5">
          <Col>
            <h1 className="section-title gold-glow">Contact Us</h1>
            <p className="section-subtitle">Get in touch with Adore Wigs & Hair</p>
          </Col>
        </Row>

        <Row>
          <Col lg={8} className="mx-auto">
            <Card className="contact-card">
              <Card.Body className="p-5">
                <Row>
                  <Col md={6}>
                    <div className="contact-info">
                      <h3 className="gold-text mb-4">Get In Touch</h3>
                      
                      <div className="contact-item mb-3">
                        <i className="fas fa-phone gold-text me-3"></i>
                        <div>
                          <strong>Phone</strong>
                          <p className="mb-0">(555) 123-4567</p>
                        </div>
                      </div>

                      <div className="contact-item mb-3">
                        <i className="fas fa-envelope gold-text me-3"></i>
                        <div>
                          <strong>Email</strong>
                          <p className="mb-0">info@adorewigs.com</p>
                        </div>
                      </div>

                      <div className="contact-item mb-3">
                        <i className="fas fa-map-marker-alt gold-text me-3"></i>
                        <div>
                          <strong>Address</strong>
                          <p className="mb-0">123 Beauty Street<br />Johannesburg, South Africa</p>
                        </div>
                      </div>

                      <div className="contact-item">
                        <i className="fas fa-clock gold-text me-3"></i>
                        <div>
                          <strong>Business Hours</strong>
                          <p className="mb-0">Mon-Fri: 9AM-6PM<br />Sat: 10AM-4PM</p>
                        </div>
                      </div>
                    </div>
                  </Col>

                  <Col md={6}>
                    <Form className="contact-form">
                      <Form.Group className="mb-3">
                        <Form.Label>Full Name *</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" required />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Email Address *</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" required />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="tel" placeholder="Enter your phone number" />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Message *</Form.Label>
                        <Form.Control 
                          as="textarea" 
                          rows={4} 
                          placeholder="Tell us how we can help you..." 
                          required 
                        />
                      </Form.Group>

                      <Button className="btn-gold-glow w-100" type="submit">
                        <i className="fas fa-paper-plane me-2"></i>
                        Send Message
                      </Button>
                    </Form>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;