import React from "react";
import '../styles/illWork.css';

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

const IllWork = (props) => {
  const lang = 'en';
  
  let bgurl = props.image.image.asset.url;
  
  return (
    <section lassName="IllWorkblock" id="IllWork">
      <div>
          {bgurl}
          <div>{props.backgroundColor.hex}</div>
          <div>{props.title[lang]}</div>
          <div>{props.lineColor.hex}</div>
          <div>
            {
              props.TextWithIcon.map( (r, i) => (
                  <div>
                      <div>{r.illustration.image.asset.url}</div>
                      <div>{r.title[lang]}</div>
                  </div>
              ))
            }
            </div>
          <div>{props.id}</div>
      </div>
    </section>
  );
};

export default IllWork;
