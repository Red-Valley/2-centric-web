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
  }
  return (
    <>
    
    <section className="FutureProofblock" id={props.id} style={StyleBackground}>
      <Row>
        <Col md={6} xs={12}>
          <h2>
              <span>{props.headingpartA[lang]}&nbsp;</span>
              <span>{props.headingpartB[lang]}</span>
          </h2>
          <p>
            {props.Subtitle[lang]}
          </p>
        </Col>
        <Col md={6} xs={12}>
            {
              props.Proofs.map((r, i) => (
                <Row>
                  <Col md={2}>
                      <img src={r.illustration.image.asset.url} width="70px" />
                  </Col>
                  <Col md={10}>
                      <div>{r.title[lang]}</div>
                      <div>{r.text[lang]}</div>
                  </Col>
                </Row>
              ))
            }

        </Col>
      </Row>
    </section>
    </>
  );
};

export default FutureProof;
