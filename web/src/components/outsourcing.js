import React from "react";
import '../styles/outsourcing.css';
import PortableText from "./portableText";

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

const Outsourcing = (props) => {
  const lang = props.lang;
  
  let bgurl = props.imageGlobal.image.asset.url;
  let icon = props.icon.image.asset.url;
  const Style = {
      backgroundColor: props.backgroundColor.hex,
  }
  const stylehr = {
    border: '1px solid '+props.colorBar.hex,
    backgroundColor: props.colorBar.hex
  }

  const stylehrbig = {
    border: '1px solid '+props.colorLine.hex,
    backgroundColor: props.colorLine.hex
  }

 

  return (
    <section className="Outsourcingblock" style={Style} id={props.id}>
      <div class="container text-center">
          <Row>
            <Col md={12} className="text-center iconbloque">
                <img src={icon} width={60} className="iconlogo"/>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md={6}>
              <h2>{props.title[lang]}</h2>
              <hr className="hrsmall" style={stylehr}/>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md={9}>
                <p>
                  {props.pargraph[lang]}
                </p>
                <hr className="hrbig" style={stylehrbig}/>
            </Col>
          </Row>
          <Row className="rowmap">
            <Col md={4} className="visible-xs">
              <img src={bgurl} width={'80%'}/>
            </Col>
            <Col md={4}>
                {
                  props.textWithNumberLeftColumn.map( (r, i) => (
                    <Row>
                      <Col md={2}>
                        <p className="number">
                          {r.number}
                        </p>
                      </Col>
                      <Col md={10} className="text_bloq">
                        <div className="title">
                          {r.title[lang]}
                        </div>
                        <div className="text">
                        <PortableText blocks={r.TextEn} />
                        </div>
                      </Col>
                    </Row>
                  ))
                }
            </Col>
            <Col md={4} className="hidden-xs">
              <img src={bgurl} width={'80%'}/>
            </Col>
            <Col md={4}>
                {
                  props.textWithNumberRightColumn.map( (r, i) => (
                    <Row>
                      <Col md={2}>
                        <p className="number">
                          {r.number}
                        </p>
                      </Col>
                      <Col md={10} className="text_bloq">
                        <div className="title">
                          {r.title[lang]}
                        </div>
                        <div className="text">
                        <PortableText blocks={r.TextEn} />
                        </div>
                      </Col>
                    </Row>
                  ))
                }

            </Col>
          </Row>
      </div>
    </section>
  );
};

export default Outsourcing;
