import React from "react";
import '../styles/outsourcing.css';

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
      />
    );
  }
  return img;
};

const Outsourcing = (props) => {
  const lang = ['en'];
  
  let bgurl = props.imageGlobal.image.asset.url;
  let icon = props.icon.image.asset.url;

  return (
    <section className="Outsourcingblock" id="Outsourcing">
      <div>
          <div>{bgurl}</div>
          <div>{icon}</div>
          <div>{props.backgroundColor.hex}</div>
          <div>{props.colorBar.hex}</div>
          <div>{props.title[lang]}</div>
          <div>{props.pargraph[lang]}</div>
          <div>{props.colorLine.hex}</div>
          <div>
            {
              props.textWithNumber.map( (r, i) => (
                  <div>
                      <div>{i+1}{r.title[lang]}</div>
                      <div>{r.texten}</div>
                  </div>
              ))
            }
            </div>
          <div>{props.id}</div>
      </div>
    </section>
  );
};

export default Outsourcing;
