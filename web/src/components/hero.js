import React from "react";
import PortableText from "./portableText";
import CTALink from "./CTALink";
import '../styles/hero.css';

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

function Hero(props) {
  const lang = 'en';
  const img = maybeImage(props.backgroundIllustration);
  const StyleBackground = {
    backgroundImage: 'url(' + img.props.image.images.fallback.src + ')',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top right',
    backgroundColor: '#FFFFFF',
  }
  return (

    <section id={props.id} className="Hero_block" style={StyleBackground}>
      <div class="container">
          <Row>
              <Col md={6}>
                  <div className="row h-100">
                    <h3>{props.headingpartA[lang]}</h3>
                    <h2>{props.headingpartB[lang]}</h2>
                    <p>{props.Subtitle[lang]}</p>
                  </div>
                  {props.cta && props.cta.title && (
                    <CTALink
                    {...props.cta}
                    buttonActionClass="mx-auto ml-4 hover:underline font-bold rounded-full "
                    />
                    )}
              </Col>
          </Row>
      </div>
    </section>
  );
}

export default Hero;
