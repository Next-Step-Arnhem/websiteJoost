import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const Contact = () => {
  return (
    <section id="contact">
      <Container>
        <h2 style={{ textAlign: "center" }}>Contact</h2>
        <Row className="justify-content-center">
          <Col md={6}>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Naam</Form.Label>
                <Form.Control type="text" placeholder="Voer uw naam in" />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>E-mailadres</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Voer uw e-mailadres in"
                />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Bericht</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Voer uw bericht in"
                />
              </Form.Group>
              <div style={{ textAlign: "center" }}>
                <Button variant="primary" type="submit">
                  Versturen
                </Button>
              </div>
            </Form>
            <p style={{ marginTop: "1rem", textAlign: "center" }}>
              Neem ook gerust contact met me op via telefoon of volg me op
              sociale media.
            </p>
            {/* Voeg hier contactinformatie toe */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
