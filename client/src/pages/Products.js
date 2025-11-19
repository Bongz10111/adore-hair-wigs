import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { useCart } from '../context/CartContext';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState(['all', 'premium', 'classic', 'synthetic', 'human-hair']);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { addToCart } = useCart();

  // Sample products data - replace with API call later
  const sampleProducts = [
     {
    id: 1,
    name: "Luxury Brazilian Wig",
    price: 299.99,
    originalPrice: 399.99,
    category: "premium",
    image: "/assets/images/image1.jpg", // Local image path
    description: "Premium 100% Brazilian human hair wig with natural look and feel.",
    features: ["100% Human Hair", "Natural Look", "Comfortable Fit"]
  },
    {
      id: 2,
      name: "Classic Bob Wig",
      price: 199.99,
      originalPrice: 249.99,
      category: "classic",
      image: "/assets/images/image2.jpg", // Local image path
      description: "Elegant bob style wig perfect for everyday wear.",
      features: ["Easy to Style", "Lightweight", "Versatile"]
    },
    {
      id: 3,
      name: "Synthetic Curly Wig",
      price: 149.99,
      category: "synthetic",
      image: "/assets/images/image3.jpg", // Local image path
      description: "Beautiful synthetic wig with natural-looking curls.",
      features: ["Low Maintenance", "Pre-styled", "Durable"]
    },
    {
      id: 4,
      name: "Long Straight Wig",
      price: 259.99,
      originalPrice: 299.99,
      category: "human-hair",
      image: "/assets/images/image4.jpg", // Local image path
      description: "Long straight human hair wig for a glamorous look.",
      features: ["100% Human Hair", "Can be Styled", "Natural Parting"]
    },
    {
      id: 5,
      name: "Short Pixie Wig",
      price: 179.99,
      category: "classic",
      image: "/assets/images/image5.jpg", // Local image path
      description: "Chic pixie cut wig for a bold and modern look.",
      features: ["Easy to Wear", "Modern Style", "Comfortable"]
    },
    {
      id: 6,
      name: "Wavy Lace Front Wig",
      price: 349.99,
      originalPrice: 399.99,
      category: "premium",
      image: "/assets/images/image6.jpg", // Local image path
      description: "Premium lace front wig with natural wavy pattern.",
      features: ["Lace Front", "Natural Hairline", "100% Human Hair"]
    }
  ];

  useEffect(() => {
    // Simulate API call
    setProducts(sampleProducts);
    setFilteredProducts(sampleProducts);
  }, []);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === selectedCategory));
    }
  }, [selectedCategory, products]);

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`R{product.name} added to cart!`);
  };

  return (
    <Container style={{ paddingTop: '100px' }}>
      <Row className="mb-4">
        <Col>
          <h1 className="fw-bold">Our Wig Collection</h1>
          <p className="text-muted">Discover our premium selection of wigs</p>
        </Col>
      </Row>

      {/* Category Filter */}
      <Row className="mb-4">
        <Col>
          <Form.Group>
            <Form.Label>Filter by Category:</Form.Label>
            <Form.Select 
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)}
              style={{ maxWidth: '200px' }}
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      {/* Products Grid */}
      <Row>
        {filteredProducts.map(product => (
          <Col key={product.id} lg={4} md={6} className="mb-4">
            <Card className="card-custom h-100">
              <Card.Img 
                variant="top" 
                src={product.image} 
                style={{ height: '250px', objectFit: 'cover' }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{product.name}</Card.Title>
                <Card.Text className="flex-grow-1">
                  {product.description}
                </Card.Text>
                <div className="mb-2">
                  <span className="price-tag">R{product.price}</span>
                  {product.originalPrice && (
                    <span className="original-price">R{product.originalPrice}</span>
                  )}
                </div>
                <div className="mb-3">
                  {product.features.map((feature, index) => (
                    <small key={index} className="text-muted d-block">
                      ✓ {feature}
                    </small>
                  ))}
                </div>
                <Button 
                  className="btn-gold mt-auto"
                  onClick={() => handleAddToCart(product)}
                >
                  <i className="fas fa-shopping-cart me-2"></i>
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;