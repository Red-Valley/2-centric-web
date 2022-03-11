import React from "react";
import '../styles/futureProof.css';
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

const FutureProof = (props) => {
  // const lang = props.lang;
  const lang = 'en';
  const img = maybeImage(props.backgroundIllustration);
  const StyleBackground = {
    backgroundImage: 'url(' + img.props.image.images.fallback.src + ')',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor: props.backgroundColor.hex,
  }
  return (
    <>
    
    <section className="FutureProofblock" id={props.id} style={StyleBackground}>
      <div class="container">
          <Row>
            <Col md={6} xs={12}>
              <h2>
                  <span className="partA">{props.headingpartA[lang]}&nbsp;</span>
                  <span className="partB">{props.headingpartB[lang]}</span>
              </h2>
              <p>
                {props.Subtitle[lang]}
              </p>
            </Col>
            <Col md={6} xs={12} className="group-icon">
                {
                  props.Proofs.map((r, i) => (
                    <Row className="bloque_icon">
                      <Col md={2}>
                          <img src={r.illustration.image.asset.url} width="70px" />
                      </Col>
                      <Col md={10}>
                          <div className="titleicon">{r.title[lang]}</div>
                          <div className="texticon">{r.text[lang]}</div>
                      </Col>
                    </Row>
                  ))
                }

            </Col>
          </Row>
      </div>
    </section>
    </>
  );
};

export default FutureProof;
