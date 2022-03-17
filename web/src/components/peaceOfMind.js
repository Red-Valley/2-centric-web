import React from "react";
import '../styles/peaceOfMind.css';
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
        loading="auto"
      />
    );
  }
  return img;
};

const PeaceOfMind = (props) => {
  const lang = props.lang;
  
  const imgglobal = props.imageGlobal.image.asset.url;


const Style = {
  backgroundImage: 'url(' + props.background.image.asset.url + ')',
  backgroundRepeat: 'no-repeat',
  backgroundColor: props.backgroundColor.hex,
  

}

  //props.spanishBackgroundImage.image.asset.url;
  return (
    <section className="PeaceOfMindblock" id={props.id} style={Style}>
      <div class="container">
          <Row>
              <Col md={7}>
              <img src={imgglobal} width="80%"  className="img visible-xs" />
                <img src={imgglobal} width="60%" className="img hidden-xs" />
              </Col>
              <Col md={5}>
                  <h2>
                    <span>{props.titleA[lang]}</span>&nbsp;<span className="text-color">{props.titleB[lang]}</span>&nbsp;<span>{props.titleC[lang]}</span>
                  </h2>
                  <p>{props.pargraph[lang]}</p>
              </Col>
          </Row>
      </div>
    </section>
  );
};

export default PeaceOfMind;
