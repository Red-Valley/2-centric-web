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
  const lang = ['en'];
  
  const imgglobal = props.imageGlobal.image.asset.url;


const Style = {
  backgroundImage: 'url(' + props.background.image.asset.url + ')',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '15%',
  backgroundColor: props.backgroundColor.hex,
  backgroundPosition: 'top right',

}

  //props.spanishBackgroundImage.image.asset.url;
  return (
    <section className="PeaceOfMindblock" id={props.id} style={Style}>
      <Row>
          <Col md={6}>
            <img src={imgglobal} width="50%" />
          </Col>
          <Col md={6}>
              <h2>
                <span>{props.titleA[lang]}</span>&nbsp;<span>{props.titleB[lang]}</span>&nbsp;<span>{props.titleC[lang]}</span>
              </h2>
              <div>{props.pargraph[lang]}</div>
              <div></div>

          </Col>
      </Row>
    </section>
  );
};

export default PeaceOfMind;
