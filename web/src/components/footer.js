import React from "react";
import '../styles/footer.css';

import "bootstrap/dist/css/bootstrap.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import diagline from '../images/diagline.png';


const Footer = (props) => {
  const lang = ['en'];
  const logo = props.icon.image.asset.url
  
  const StyleBackground = {
    backgroundColor: props.backgroundColor.hex,
  }

  return (
    <section className="Footerblock" id={props.id} style={StyleBackground}>
      <div class="container">
        <Row>
          <Col md={12} class="text-center">
            <img src={logo} width="250" className="logoicon" />
            <img src={diagline} width="30" className="diagline"/>
            <span className="emailtext">{props.email[lang]}</span>
          </Col>
          <Col md={12} className="copyname">
              {props.copyRight[lang]}
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Footer;
