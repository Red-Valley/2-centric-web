import { Link } from "gatsby";
import React, {useState, useEffect}  from "react";
import CTALink from "./CTALink";
import logotype from '../images/logo.png';
import '../styles/layout.css';
import flag_en from '../images/united-states.png';
import flag_es from '../images/colombia.png';

const Header = ({ showNav, siteTitle, scrolled, navMenuItems = [], textWhite = true, logo, setLang, lang  }) => {
  let headerClass = "fixed w-full z-30 top-0 text-white";
  headerClass += scrolled ? " bg-white shadow" : "";


  const [lang_bloque_es, setLang_bloque_es] = useState('lang_bloque');
  const [lang_bloque_en, setLang_bloque_en] = useState('lang_bloque active');
  //const [changeLanguage, setChangeLanguage] = useState('lang_bloque');

  const changeLanguage = (k) => {
    if(k === 'es'){
      setLang_bloque_es('lang_bloque active');
      setLang_bloque_en('lang_bloque');
      window.history.replaceState(null,null,'es')
    }else{
      setLang_bloque_es('lang_bloque');
      setLang_bloque_en('lang_bloque active');
      window.history.replaceState(null,null,'/')
    }
  }
  
  let navActionClass =
    "mx-auto lg:mx-0 hover:underline font-bold rounded-full mt-4 mb-4  lg:mt-0 opacity-75";

  let navContentClass =
    "flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 text-black lg:p-0 z-20";
  navContentClass += !textWhite || !scrolled ? " lg:bg-transparent bg-gray-100" : "";
  navContentClass += textWhite || scrolled ? "" : "";

  let titleClass = "toggleColour no-underline hover:no-underline font-bold text-2xl lg:text-4xl";
  titleClass += !textWhite || scrolled ? " text-gray-800" : "";
  titleClass += textWhite || !scrolled ? " text-white" : "";

  return (
    <nav id="header" className={headerClass}>
      <div id="containerheader" className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 pl-0 pr-0">
        <div className="pl-4 flex items-center">
          <Link id="siteTitle" className={titleClass} to="/">
            <img src={logotype} alt="logotype" width="70%"/>
          </Link>
        </div>


        {showNav && navMenuItems && (
          <div className={navContentClass} id="nav-content">
            <ul className="list-reset lg:flex justify-end flex-1 items-center">
              {navMenuItems.map(i => (
                <li className="mr-3">
                  <CTALink {...i} buttonActionClass={navActionClass} />
                </li>
              ))}
            </ul>
            <div className="langnav hidden-xs">
                <nav style={{width:'200px'}}>
                  <ul>
                      <li onClick={
                        ()=>{
                          setLang('en');
                          window.localStorage.setItem('lang','en');
                          changeLanguage('en');
                        }
                      }>
                        <span className={lang_bloque_en}>
                            <img src={flag_en} className="flag_icon" />
                            <span className="lang_text">EN</span>
                        </span>
                      </li>
                      <li onClick={
                          ()=>{
                            setLang('es');
                            window.localStorage.setItem('lang','es');
                            changeLanguage('es');
                          }
                        } className="bl ">
                        <span className={lang_bloque_es} id="lang_es">
                          <img src={flag_es} className="flag_icon" />
                          <span className="lang_text">ES</span>
                        </span>
                      </li>
                  </ul>
                </nav>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
