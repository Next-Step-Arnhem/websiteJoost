import React from "react";
import { Navbar, Nav, Container, Row, Col, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="sticky-top">
      <Container>
        <Row>
          <Col md={3}>
            <Navbar.Brand href="#">Portfolio</Navbar.Brand>
          </Col>
          <Col md={9}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="flex pl-4">
                <Nav.Link href="#home">HOME</Nav.Link>

                <NavDropdown title="PORTFOLIO" id="portfolio-dropdown">
                  <NavDropdown.Item href="#portfolio/project1">
                    Project 1
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#portfolio/project2">
                    Project 2
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#portfolio/project3">
                    Project 3
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#portfolio/project4">
                    Project 4
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#portfolio/project5">
                    Project 5
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#portfolio/project6">
                    Project 6
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#portfolio/project7">
                    Project 7
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#portfolio/project8">
                    Project 8
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#portfolio/project9">
                    Project 9
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#portfolio/project10">
                    Project 10
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#portfolio/project11">
                    Project 11
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#portfolio/project12">
                    Project 12
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link href="#about">ABOUT</Nav.Link>

                <NavDropdown title="SHOP" id="shop-dropdown">
                  <NavDropdown.Item href="#shop/category1">
                    Category 1
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#shop/category2">
                    Category 2
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#shop/category3">
                    Category 3
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#shop/category4">
                    Category 4
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#shop/category5">
                    Category 5
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#shop/category6">
                    Category 6
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#shop/category7">
                    Category 7
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#shop/category8">
                    Category 8
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#shop/category9">
                    Category 9
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#shop/category10">
                    Category 10
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#shop/category11">
                    Category 11
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#shop/category12">
                    Category 12
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="ARTISTS' RESOURCES" id="resources-dropdown">
                  <NavDropdown.Item href="#resources/item1">
                    Item 1
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#resources/item2">
                    Item 2
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#resources/item3">
                    Item 3
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#resources/item4">
                    Item 4
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#resources/item5">
                    Item 5
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#resources/item6">
                    Item 6
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#resources/item7">
                    Item 7
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="ARTWORK LICENSING" id="licensing-dropdown">
                  <NavDropdown.Item href="#licensing/item1">
                    Item 1
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#licensing/item2">
                    Item 2
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#licensing/item3">
                    Item 3
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#licensing/item4">
                    Item 4
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#licensing/item5">
                    Item 5
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#licensing/item6">
                    Item 6
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#licensing/item7">
                    Item 7
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#licensing/item8">
                    Item 8
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#licensing/item9">
                    Item 9
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#licensing/item10">
                    Item 10
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#licensing/item11">
                    Item 11
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link href="#blog">BLOG</Nav.Link>
                <Nav.Link href="#contact">CONTACT</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
          <div className="container d-flex justify-content-between align-items-center">
            <a href="https://www.facebook.com">
              <i className="bi bi-facebook border text-white icon"></i>
            </a>
            <a href="https://www.instagram.com">
              <i className="bi bi-instagram border text-white icon"></i>
            </a>
            <a href="https://www.youtube.com">
              <i className="bi bi-youtube border text-white icon"></i>
            </a>
            <a href="https://www.twitter.com">
              <i className="bi bi-twitter border text-white icon"></i>
            </a>
            <a href="https://www.gmail.com">
              <i className="bi bi-envelope border text-white icon"></i>
            </a>
          </div>
        </Row>
      </Container>
    </Navbar>
  );
}

export default Navigation;
