import React from "react";
import '../styles/footer.css';

const Footer = (props) => {
  const lang = ['en'];
  const logo = props.icon.image.asset.url
  return (
    <section className="Footerblock" id="Footer">
      <div>
            {logo}
            <div>{props.backgroundColor.hex}</div>
            <div>{props.email[lang]}</div>
            <div>{props.copyRight[lang]}</div>
            <div>{props.id}</div>
      </div>
    </section>
  );
};

export default Footer;
