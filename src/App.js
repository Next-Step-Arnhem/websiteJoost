import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Carousel,
  Navbar,
  Jumbotron,
} from "react-bootstrap";
import Navigation from "./components/Navbar";
import Blog from "./components/Blog";
import Banner from "./components/Banner";
import Portfolio from "./components/Portfolio";
import IntroCarousel from "./components/IntroCarousel";
import Contact from "./components/Contact";
import Footer from "./Footer";
import Product from "./components/Product";
import IntroText from "./components/IntroText";
import Clients from "./components/Clients";
import Banner2 from "./components/Banner2";
import ClientReviews from "./components/ClientReviews";
import ScrollToTop from "./components/ScrollToTop";
import ParallaxComponent from "./components/parallax";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdlYSGuZ_EWZvtwV9PgVOuu3KoJZU24e8",
  authDomain: "portfoliojoost-709fd.firebaseapp.com",
  projectId: "portfoliojoost-709fd",
  storageBucket: "portfoliojoost-709fd.appspot.com",
  messagingSenderId: "356331225242",
  appId: "1:356331225242:web:eee444da706ce0cec4df23",
  measurementId: "G-1KD4J4VCL7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const App = () => {
  return (
    <div className="root">
      <container fluid>
        <Row>
          <Navigation />
          <Col sm={12}>
            <Container fluid>
              <Row>
                <Col sm={12}>
                  <IntroCarousel />
                  <ParallaxComponent />
                  <Banner />
                  <IntroText />
                  <Col sm={12}>
                    <Portfolio />
                  </Col>
                  <Col sm={12}>
                    <section>
                      <Blog />
                    </section>
                  </Col>
                  <Col sm={12}>
                    <Banner />
                    <hr></hr>
                  </Col>
                  <Clients />
                  <Banner2 />
                  <ClientReviews />
                  <Col sm={12}>
                    <Product />
                    <hr></hr>
                  </Col>
                  <Col sm={12}>
                    <section>
                      <Contact />
                    </section>
                  </Col>
                </Col>
                <ScrollToTop />
              </Row>
            </Container>
          </Col>
        </Row>
        <Col sm={12}>
          <section>
            <Footer />
          </section>
        </Col>
      </container>
    </div>
  );
};

export default App;
