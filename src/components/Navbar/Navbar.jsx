import React, { useState, useEffect } from 'react'
import { images } from "../../constants"
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri"
import "./Navbar.css"
const Navbar = () => {
  const [ toggleMenu, setToggleMenu ] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const hiddeMenu = () => {
    setToggleMenu(false);
  }
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarStyle = {
    backgroundColor: scrollY >= 10 ? "#031B34" : "transparent",
  };

  return (
    <div className="gpt3__navbar" style={navbarStyle}>
      <a href="#home" className="gpt3__navbar_logo">
        <img src={images.logo} alt="logo" />
      </a>

      <div className="gpt3__navbar_links_desktop">
        <p><a href="#home">Home</a></p>
        <p><a href="#wgpt3">What is GPT?</a></p>
        <p><a href="#openAI">Open AI</a></p>
        <p><a href="#studies">Case Studies</a></p>
        <p><a href="#library">Library</a></p>
      </div>

      <div className="gpt3__navbar_login">
        <a href="#">Sign in</a>
        <button type='button'>Sign up</button>
      </div>

      <div className="gpt3__navbar_menu">
        {toggleMenu 
          ? null
          : <RiMenu3Fill color='#fff' size={27} onClick={()=>setToggleMenu(true)}/>
        }
        {toggleMenu &&(
          <div className="gpt3__navbar_links_mobile slide-bottom">
            <p><a href="#home" onClick={hiddeMenu}>Home</a></p>
            <p><a href="#wgpt3" onClick={hiddeMenu}>What is GPT?</a></p>
            <p><a href="#openAI" onClick={hiddeMenu}>Open AI</a></p>
            <p><a href="#studies" onClick={hiddeMenu}>Case Studies</a></p>
            <p><a href="#library" onClick={hiddeMenu}>Library</a></p>
            <div className="gpt3__navbar_login_mobile">
              <a href="#">Sign in</a>
              <button type='button'>Sign up</button>
            </div>
            <RiCloseFill color='#fff' size={27} onClick={()=>setToggleMenu(false)}/>
        </div>
        )}
      </div>      
    </div>
  )
}

export default Navbar