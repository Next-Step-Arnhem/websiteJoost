import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/myStyles.css";

function Clients() {
  return (
    <div className="container-fluid">
      <div className="row">
        <h3>These are some of my top clients:</h3>
        <br />
        <hr />
        <ul className="d-flex image-list">
          <div className="col">
            <li>
              <img src="images/marvel.png" alt="client1" />
            </li>
          </div>
          <div className="col">
            <li>
              <img src="images/nextstep.png" alt="client2" />
            </li>
          </div>
          <div className="col">
            <li>
              <img src="images/activition.png" alt="client3" />
            </li>
          </div>
          <div className="col">
            <li>
              <img src="images/arnhem.png" alt="client4" />
            </li>
          </div>
          <div className="col">
            <li>
              <img src="images/hva.png" alt="client5" />
            </li>
          </div>
          <div className="col">
            <li>
              <img src="images/autos.jpg" alt="client6" />
            </li>
          </div>
        </ul>
        <hr />
      </div>
    </div>
  );
}

export default Clients;
