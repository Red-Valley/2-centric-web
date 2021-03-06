import React, { useState } from "react";
import { graphql } from "gatsby";

import Hero from "../components/hero";
import FutureProof from "../components/futureProof";
import Outsourcing from "../components/outsourcing";
import PeaceOfMind from "../components/peaceOfMind";
import IllWork from "../components/illWork";
import Contact from "../components/contact";
import Footer from "../components/footer";
import InfoRows from "../components/InfoRows";
import CTAColumns from "../components/cta-columns";
import CTA from "../components/cta";
import Pricing from "../components/pricing";
import { TopWave, BottomWave } from "../components/wave";

import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";

export const query = graphql`
  query PageTemplateQuery($id: String!) {
    route: sanityRoute(id: { eq: $id }) {
      slug {
        current
      }
      useSiteTitle
      page {
        ...PageInfo
      }
    }
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      primaryColor {
        hex
      }
      secondaryColor {
        hex
      }
      title
      openGraph {
        title
        description
        image {
          ...SanityImage
        }
      }
    }
  }
`;

const Page = props => {
  const { data, errors } = props;

  
  let iniLang = '';
  // if(window.localStorage.getItem('lang') !== null){
  //   iniLang = window.localStorage.getItem('lang');
  // }else{
  //   iniLang = 'en';
  // }
  iniLang = 'en';

  const [lang,setLang] = useState(iniLang);

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }
  console.log('site settings ',site.openGraph.image);
  const page = data.page || data.route.page;

  const content = (page._rawContent || [])
    .filter(c => !c.disabled)
    .map((c, i) => {
      let el = null;
      switch (c._type) {
        case "pricing":
          el = <Pricing key={c._key} {...c}  lang={lang}  />;
          break;
        case "infoRows":
          el = <InfoRows key={c._key} {...c}  lang={lang}  />;
          break;
        case "hero":
          el = <Hero key={c._key} {...c}  lang={lang}  />;
          break;
        case "futureProof":
          el = <FutureProof key={c._key} {...c}  lang={lang}  />;
          break;
        case "outsourcing":
          el = <Outsourcing key={c._key} {...c}  lang={lang}  />;
          break;
        case "peaceOfMind":
          el = <PeaceOfMind key={c._key} {...c}  lang={lang}  />;
          break;
        case "illWork":
          el = <IllWork key={c._key} {...c}  lang={lang}  />;
          break;
        case "contact":
          el = <Contact key={c._key} {...c}  lang={lang}  />;
          break;
        case "footer":
          el = <Footer key={c._key} {...c}  lang={lang}  />;
          break;
          
        case "ctaColumns":
          el = <CTAColumns key={c._key} {...c}  lang={lang}  />;
          break;          
        case "ctaPlug":
          el = <CTA key={c._key} {...c}  lang={lang}  />;
          break;
        case "uiComponentRef":
          switch (c.name) {
            case "topWave":
              el = <TopWave  lang={lang}  />;
              break;
            case "bottomWave":
              el = <BottomWave  lang={lang}  />;
              break;
            default:
              break;
          }
          break;
        default:
          el = null;
      }
      return el;
    });

  const gradient = {
    from: (site.primaryColor && site.primaryColor.hex) || "#d53369",
    to: (site.secondaryColor && site.secondaryColor.hex) || "#daae51"
  };

  const menuItems = page.navMenu && (page.navMenu.items || []);
  const pageTitle = data.route && !data.route.useSiteTitle && page.title;

  return (
    <Layout navMenuItems={menuItems} textWhite={true}  setLang={setLang} lang={lang}>
      <SEO
        title={pageTitle}
        description={site.description}
        keywords={site.keywords}
        bodyAttr={{
          class: "leading-normal tracking-normal gradient"
        }}
        gradient={gradient}
      />
      <div>{content}</div>
    </Layout>
  );
};

export default Page;
