import React from "react";
import '../styles/illWork.css';

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
      />
    );
  }
  return img;
};

const IllWork = (props) => {
  const lang = 'en';
  
  let bgurl = props.image.image.asset.url;

  const Style = {
    backgroundColor: props.backgroundColor.hex,
  }


  const stylehr = {
    border: '1px solid '+props.lineColor.hex,
    backgroundColor: props.lineColor.hex
  }

  
  return (
    <section className="IllWorkblock" id={props.id} style={Style}>
      <div class="container">
          <Row className="justify-content-md-center">
            <Col md={5}>
                <h2>
                  {props.title[lang]}
                </h2>
                <hr className="hrsmall" style={stylehr}/>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md={9}>
                <p>
                  {props.SubTitle[lang]}
                </p>
            </Col>
          </Row>
          <Row className="content-illwork">
            <Col md={6} className="text-center">
                <img src={bgurl} width="60%" className="img" />
            </Col>
            <Col md={6}>
                <Row className="mt-50">

                  {
                    props.TextWithIcon.map( (r, i) => (
                        <Col md={6} className="textwithicon">
                            <Row>
                              <Col md={3}>
                                  <img src={r.illustration.image.asset.url} width="50" className="icon"/>
                              </Col>
                              <Col  md={4}>
                                  <h3>
                                      {r.title[lang]}
                                  </h3>
                              </Col>
                            </Row>
                            
                        </Col>
                    ))
                  }
                </Row>
            </Col>
          </Row>
      </div>
    </section>
  );
};

export default IllWork;
