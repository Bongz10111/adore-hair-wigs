import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button, Card, Badge } from 'react-bootstrap';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const { addToCart } = useCart();

  // Sample product data - replace with API call later
  const sampleProduct = {
    id: 1,
    name: "Luxury Brazilian Wig",
    price: 299.99,
    originalPrice: 399.99,
    category: "premium",
    images: [
      "https://via.placeholder.com/500x500?text=Front+View",
      "https://via.placeholder.com/500x500?text=Side+View", 
      "https://via.placeholder.com/500x500?text=Back+View",
      "https://via.placeholder.com/500x500?text=Natural+Parting"
    ],
    description: "Premium 100% Brazilian human hair wig with natural look and feel. This luxurious wig offers unparalleled quality and comfort.",
    features: [
      "100% Brazilian Human Hair",
      "Natural Look and Feel", 
      "Comfortable Cap Construction",
      "Can be Styled with Heat",
      "Natural Hairline",
      "Long Lasting Durability"
    ],
    details: {
      material: "100% Human Hair",
      capSize: "Average",
      hairLength: "22 inches",
      capConstruction: "Lace Front",
      density: "150%",
      color: "Natural Black"
    },
    inStock: true,
    stockQuantity: 15
  };

  useEffect(() => {
    // Simulate API call
    setProduct(sampleProduct);
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    alert(`R{product.name} added to cart!`);
  };

  return (
    <Container style={{ paddingTop: '100px' }}>
      <Row>
        {/* Product Images */}
        <Col lg={6}>
          <div className="mb-4">
            <img 
              src={product.images[selectedImage]} 
              alt={product.name}
              className="img-fluid rounded shadow"
              style={{ width: '100%', height: '400px', objectFit: 'cover' }}
            />
          </div>
          <Row>
            {product.images.map((image, index) => (
              <Col key={index} xs={3}>
                <img 
                  src={image}
                  alt={`R{product.name} view R{index + 1}`}
                  className={`img-fluid rounded cursor-pointer R{selectedImage === index ? 'border border-warning' : ''}`}
                  style={{ height: '80px', objectFit: 'cover', width: '100%' }}
                  onClick={() => setSelectedImage(index)}
                />
              </Col>
            ))}
          </Row>
        </Col>

        {/* Product Info */}
        <Col lg={6}>
          <Badge bg="dark" className="mb-2">{product.category.toUpperCase()}</Badge>
          <h1 className="fw-bold mb-3">{product.name}</h1>
          <div className="mb-3">
            <span className="price-tag h4">R{product.price}</span>
            {product.originalPrice && (
              <span className="original-price h5">R{product.originalPrice}</span>
            )}
          </div>

          <p className="text-muted mb-4">{product.description}</p>

          {/* Stock Status */}
          <div className="mb-4">
            {product.inStock ? (
              <Badge bg="success" className="me-2">
                In Stock ({product.stockQuantity} available)
              </Badge>
            ) : (
              <Badge bg="danger">Out of Stock</Badge>
            )}
          </div>

          {/* Features */}
          <Card className="mb-4">
            <Card.Header>
              <strong>Features</strong>
            </Card.Header>
            <Card.Body>
              <ul className="list-unstyled">
                {product.features.map((feature, index) => (
                  <li key={index} className="mb-2">
                    <i className="fas fa-check text-success me-2"></i>
                    {feature}
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>

          {/* Product Details */}
          <Card className="mb-4">
            <Card.Header>
              <strong>Product Details</strong>
            </Card.Header>
            <Card.Body>
              <Row>
                {Object.entries(product.details).map(([key, value]) => (
                  <Col key={key} md={6} className="mb-2">
                    <strong>{key.replace(/([A-Z])/g, ' R1').replace(/^./, str => str.toUpperCase())}:</strong> {value}
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>

          {/* Add to Cart Button */}
          <Button 
            className="btn-gold btn-lg w-100"
            onClick={handleAddToCart}
            disabled={!product.inStock}
          >
            <i className="fas fa-shopping-cart me-2"></i>
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;