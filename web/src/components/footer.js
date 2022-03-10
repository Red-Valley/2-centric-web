import React from "react";
import '../styles/footer.css';

import "bootstrap/dist/css/bootstrap.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Footer = (props) => {
  const lang = ['en'];
  const logo = props.icon.image.asset.url
  
  const StyleBackground = {
    backgroundColor: props.backgroundColor.hex,
  }

  return (
    <section className="Footerblock" id={props.id} style={StyleBackground}>
      <Row>
        <Col md={12}>
          <img src={logo} width="200" />
          <div>{props.email[lang]}</div>

        </Col>
        <Col md={12}>
            {props.copyRight[lang]}
        </Col>
      </Row>
    </section>
  );
};

export default Footer;
