import React from "react";
import '../styles/peaceOfMind.css';
import clientConfig from "../../client-config";
import { getGatsbyImageData } from "gatsby-source-sanity";
import { GatsbyImage } from "gatsby-plugin-image";
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
  
  const bgurl =     props.background.image.asset.url;
  const imgglobal = props.imageGlobal.image.asset.url;
  //props.spanishBackgroundImage.image.asset.url;
  return (
    <section className="PeaceOfMindblock" id="PeaceOfMind">
      <div>
          {bgurl}
          {imgglobal}
          <div>{props.backgroundColor.hex}</div>
          <div>{props.titleA[lang]}</div>
          <div>{props.titleB[lang]}</div>
          <div>{props.titleC[lang]}</div>
          <div>{props.pargraph[lang]}</div>
          <div>{props.id}</div>
      </div>
    </section>
  );
};

export default PeaceOfMind;
