import React from "react";
import '../styles/futureProof.css';
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

const FutureProof = (props) => {
  // const lang = props.lang;
  const lang = 'en';
  const img = maybeImage(props.backgroundIllustration);

  return (
    <section className="FutureProofblock" id="futureProof">
      <div>
            {img}
            <div>{props.backgroundColor.hex}</div>
            <div>{props.headingpartA[lang]}</div>
            <div>{props.headingpartB[lang]}</div>
            <div>{props.Subtitle[lang]}</div>
            <div>
            {
              props.Proofs.map( (r, i) => (
                  <div>
                      <div>{r.illustration.image.asset.url}</div>
                      <div>{r.title[lang]}</div>
                      <div>{r.text[lang]}</div>
                  </div>
              ))
            }
            </div>
            <div>{props.id}</div>
      </div>
    </section>
  );
};

export default FutureProof;
