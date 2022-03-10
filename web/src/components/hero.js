import React from "react";
import PortableText from "./portableText";
import CTALink from "./CTALink";
import '../styles/hero.css';

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

function Hero(props) {
  const lang = 'en';
  const img = maybeImage(props.backgroundIllustration);
  const StyleBackground = {
    backgroundImage: 'url(' + img.props.image.images.fallback.src + ')',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }
  return (

    <section id={props.id} className="Hero_block" style={StyleBackground}>

      <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center" >
        {/* Left col */}
        <div className="container flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
          <div className="leading-normal text-2xl mb-8">

            <div className="row h-100">
              <h3>{props.headingpartA[lang]}</h3>
              <h2>{props.headingpartB[lang]}</h2>
              <p>{props.Subtitle[lang]}</p>
            </div>
            {/* <div>{props.backgroundColor.hex}</div> */}

          </div>
          {props.cta && props.cta.title && (
            <CTALink
              {...props.cta}
              buttonActionClass="mx-auto ml-4 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
            />
          )}
        </div>
        {/* Right col */}
        {/* <div className="w-full md:w-3/5 py-6 text-center">{img}</div> */}
      </div>
    </section >


    // <section class="home-banner">
    //   <div class="mask-hero">
    //     </div>
    //     <div class="BackgroundVideo undefined" style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; visibility: visible; overflow: hidden;" tabindex="0"><video src="https://cms.rvstaffing.com/banner-home.mp4" preload="auto" muted="" playsinline="" width="1440" height="810" style="position: absolute; width: 1440px; height: 810px; top: -23px; left: 0px;"></video></div><div class="h-100 container"><div class="h-100 row"><div class="d-md-flex flex-md-column justify-content-md-center padding-top-90 col"><h1><span class="text-red">Your Team</span><br><span class="strike">Outsourcing</span> <br>Redefined.</h1><div class="w-50-desktop"> <p class="padding-top-10 mb-0">Adaptability and innovation aren’t luxuries, they’re necessities. The challenges of today have magnified this truth. </p><p class="padding-top-10 mb-0">Focus on what’s important while we build your dream team and apply solutions tailored to your needs.</p><a href="#services" class="mt-4 padding-left-25 padding-right-25 btn btn-secondary btn-lg  btn-red">Fuel Your Growth</a></div></div></div></div></section>
  );
}

export default Hero;
