import React from "react";
import { Container } from "react-bootstrap";
import "./ParallaxComponent.css"; // Create this CSS file for custom styles

const ParallaxComponent = () => {
  return (
    <div>
      {/* Parallax section */}
      <div className="parallax jumbotron">
        <Container>
          <h1>About my designs</h1>
        </Container>
      </div>

      {/* Content section */}
      <div className="content">
        <Container>
          <h2>About Parallax</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            eu arcu eget neque sollicitudin viverra. Nullam ac nulla quis neque
            feugiat ultrices non a mi. Sed porta neque eu augue sollicitudin, ac
            faucibus massa aliquet. Aliquam vel varius enim, id rutrum nisi.
          </p>
          <p>
            Aenean tempor eget ante eget mollis. Nam mi ipsum, lobortis eget
            odio et, cursus venenatis sapien.
          </p>
        </Container>
      </div>
    </div>
  );
};

export default ParallaxComponent;
