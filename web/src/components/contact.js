import React from "react";
import CTALink from "./CTALink";
import '../styles/contact.css';

const Contact = (props) => {
  const lang = ['en'];
  console.log("Contact props ",props);
  
  return (
    <section className="Contactblock" id="Contact">
      <div>
          <div>{props.backgroundColor.hex}</div>
          <div>{props.titlePartA[lang]}</div>
          <div>{props.titlePartB[lang]}</div>
          <div>{props.titlePartC[lang]}</div>
          <div>{props.titlePartD[lang]}</div>
          <div>{props.pargraph[lang]}</div>
          <div>{props.labelName[lang]}</div>
          <div>{props.labelEmail[lang]}</div>
          <div>{props.labelCompany[lang]}</div>
          <div>{props.labelInterest[lang]}</div>
          <div>{props.labelMessage[lang]}</div>
          <div>
          <CTALink
                {...props.cta}
                buttonActionClass="text-gray-800 font-bold"
                lang={lang} />
          </div>
          <div>{props.id}</div>
      </div>
    </section>
  );
};

export default Contact;
