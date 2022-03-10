import React from "react";
import '../styles/illWork.css';

import clientConfig from "../../client-config";
import { getGatsbyImageData } from "gatsby-source-sanity";
import { GatsbyImage } from "gatsby-plugin-image";

import "bootstrap/dist/css/bootstrap.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


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

const IllWork = (props) => {
  const lang = 'en';
  
  let bgurl = props.image.image.asset.url;

  const Style = {
    backgroundColor: props.backgroundColor.hex,
  }
  
  return (
    <section lassName="IllWorkblock" id={props.id} style={Style}>
      <Row>
        <Col>
            {props.title[lang]}
            <hr />
            {props.lineColor.hex}
        </Col>
      </Row>
      <Row>
        <Col>
          {props.SubTitle[lang]}
        </Col>
      </Row>
      <Row>
        <Col md={6}>
            <img src={bgurl} width="50%" />
        </Col>
        <Col md={6}>
            <Row>

              {
                props.TextWithIcon.map( (r, i) => (
                    <Col md={6}>
                        <Row>
                          <Col md={3}>
                              <img src={r.illustration.image.asset.url} width="50"/>
                          </Col>
                          <Col  md={9}>
                              {r.title[lang]}
                          </Col>
                        </Row>
                        
                    </Col>
                ))
              }
            </Row>
        </Col>
      </Row>
    </section>
  );
};

export default IllWork;
