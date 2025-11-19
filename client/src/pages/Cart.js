import React from 'react';
import { Container, Row, Col, Card, Button, Table, Form } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleRemoveItem = (productId) => {
    removeFromCart(productId);
  };

  if (cart.items.length === 0) {
    return (
      <Container style={{ paddingTop: '100px', minHeight: '50vh' }}>
        <Row className="text-center">
          <Col>
            <i className="fas fa-shopping-cart fa-4x text-muted mb-4"></i>
            <h2>Your cart is empty</h2>
            <p className="text-muted mb-4">Start shopping to add items to your cart</p>
            <LinkContainer to="/products">
              <Button className="btn-gold">Continue Shopping</Button>
            </LinkContainer>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container style={{ paddingTop: '100px' }}>
      <Row>
        <Col>
          <h1 className="fw-bold mb-4">Shopping Cart</h1>
        </Col>
      </Row>

      <Row>
        <Col lg={8}>
          <Card>
            <Card.Header>
              <strong>Cart Items ({cart.items.length})</strong>
            </Card.Header>
            <Card.Body>
              <Table responsive>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.items.map(item => (
                    <tr key={item.id}>
                      <td>
                        <div className="d-flex align-items-center">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                            className="rounded me-3"
                          />
                          <div>
                            <strong>{item.name}</strong>
                            <br />
                            <small className="text-muted">{item.category}</small>
                          </div>
                        </div>
                      </td>
                      <td>R{item.price}</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <Button
                            variant="outline-secondary"
                            size="sm"
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          >
                            -
                          </Button>
                          <Form.Control
                            type="number"
                            value={item.quantity}
                            onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                            style={{ width: '70px', margin: '0 10px' }}
                            min="1"
                          />
                          <Button
                            variant="outline-secondary"
                            size="sm"
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          >
                            +
                          </Button>
                        </div>
                      </td>
                      <td>R{(item.price * item.quantity).toFixed(2)}</td>
                      <td>
                        <Button
                          variant="outline-danger"
                          size="sm"
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          <i className="fas fa-trash"></i>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <Button variant="outline-secondary" onClick={clearCart}>
                Clear Cart
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4}>
          <Card className="sticky-top" style={{ top: '120px' }}>
            <Card.Header>
              <strong>Order Summary</strong>
            </Card.Header>
            <Card.Body>
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal:</span>
                <span>R{getCartTotal().toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Shipping:</span>
                <span>R15.00</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Tax:</span>
                <span>R{(getCartTotal() * 0.08).toFixed(2)}</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-3">
                <strong>Total:</strong>
                <strong>R{(getCartTotal() + 15 + (getCartTotal() * 0.08)).toFixed(2)}</strong>
              </div>
              <LinkContainer to="/checkout">
                <Button className="btn-gold w-100 btn-lg">
                  Proceed to Checkout
                </Button>
              </LinkContainer>
              <LinkContainer to="/products">
                <Button variant="outline-secondary w-100 mt-2">
                  Continue Shopping
                </Button>
              </LinkContainer>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;