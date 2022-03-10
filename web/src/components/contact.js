import React from "react";
import CTALink from "./CTALink";
import '../styles/contact.css';

import "bootstrap/dist/css/bootstrap.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Contact = (props) => {
  const lang = ['en'];
  console.log("Contact props ",props);

  const StyleBackground = {
    backgroundColor: props.backgroundColor.hex,
  }
  
  return (
    <section className="Contactblock" id={props.id} style={StyleBackground}>
      <Row>
          <Col md={6}>
            <h2>
                <span>{props.titlePartA[lang]}</span>&nbsp;<span>{props.titlePartB[lang]}</span>&nbsp;
                <span>{props.titlePartC[lang]}</span>&nbsp;<span>{props.titlePartD[lang]}</span>
            </h2>
            <p>{props.pargraph[lang]}</p>
          </Col>
          <Col md={6}>
              <div>{props.labelName[lang]}</div>
              <div>{props.labelEmail[lang]}</div>
              <div>{props.labelCompany[lang]}</div>
              <div>{props.labelInterest[lang]}</div>
              <div>{props.labelMessage[lang]}</div>
              <div>
              <CTALink
                    {...props.cta}
                    buttonActionClass="text-gray-800 font-bold"
                    lang={lang} />
              </div>

          </Col>
      </Row>
    </section>
  );
};

export default Contact;
