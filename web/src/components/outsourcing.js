import React from "react";
import '../styles/outsourcing.css';

import clientConfig from "../../client-config";
import { getGatsbyImageData } from "gatsby-source-sanity";
import { GatsbyImage } from "gatsby-plugin-image";

import "bootstrap/dist/css/bootstrap.css";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const maybeImage = illustration => {
  let img = null;
  if (illustration && illustration.image && illustration.image.asset && !illustration.disabled) {
    const imageData = getGatsbyImageData(
      illustration.image,
      { maxWidth: 960 },
      clientConfig.sanity
    );

    img = (
      <GatsbyImage
        className="w-full md:w-4/5 z-50"
        image={imageData}
        alt={illustration.image.alt}
      />
    );
  }
  return img;
};

const Outsourcing = (props) => {
  const lang = ['en'];
  
  let bgurl = props.imageGlobal.image.asset.url;
  let icon = props.icon.image.asset.url;
  const Style = {
      backgroundColor: props.backgroundColor.hex,
  }

 

  return (
    <section className="Outsourcingblock" style={Style} id={props.id}>
      <Row>
        <Col md={12}>
            <img src={icon} width={70}/>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <h2>{props.title[lang]}</h2>
          <hr/>
          {props.colorBar.hex} 
        </Col>
      </Row>
      <Row>
        <Col md={12}>
            {props.pargraph[lang]}
            <hr/>
            {props.colorLine.hex} 
        </Col>
      </Row>
      <Row>
        <Col md={4}>
            {
              props.textWithNumberLeftColumn.map( (r, i) => (
                <Row>
                  <Col md={2}>
                    {r.number[lang]}
                  </Col>
                  <Col md={10}>
                      {r.title[lang]}
                      {r.texten}
                  </Col>
                </Row>
              ))
            }
        </Col>
        <Col md={4}>
          <img src={bgurl}/>
        </Col>
        <Col md={4}>
            {
              props.textWithNumberRightColumn.map( (r, i) => (
                <Row>
                  <Col md={2}>
                    {r.number[lang]}
                  </Col>
                  <Col md={10}>
                      {r.title[lang]}
                      {r.texten}
                  </Col>
                </Row>
              ))
            }

        </Col>
      </Row>
    </section>
  );
};

export default Outsourcing;
