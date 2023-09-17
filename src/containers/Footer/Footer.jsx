import React from 'react'
import { images } from "../../constants"
import "./Footer.css"
const Footer = () => {
  return (
    <div className="gpt3__footer section__padding" id='footer'>
      <div className="gpt3__footer_heading">
        <h1 className="gradient__text">Do you want to step in to the <br /> future before others</h1>
        <button type='button'>Request Early Access</button>
      </div>

      <div className="gpt3__footer_links_container section__padding">
        <div className="gpt3__footer_logo">
          <img src={images.logo} alt="logo" />
          <p>Crechterwoord K12 182 DK <br /> Alknjkcb, All Rights Reserved</p>
        </div>


        <div className="gpt3__footer_links">
          <h4>Links</h4>
          <p><a href="#">Overons</a></p>
          <p><a href="#">Social Media</a></p>
          <p><a href="#">Counters</a></p>
          <p><a href="#">Contact</a></p>
        </div>

        <div className="gpt3__footer_links">
          <h4>Company</h4>
          <p><a href="#">Terms & Conditions</a></p>
          <p><a href="#">Privacy Policy</a></p>
          <p><a href="#">Contact</a></p>
        </div>

        <div className="gpt3__footer_links">
          <h4>Get in touch</h4>
          <p><a href="#">Crechterwoord K12 <br /> 182 DK Alknjkcb</a></p>
          <p><a href="#">085-132567</a></p>
          <p><a href="#">info@payme.net</a></p>
        </div>
      </div>

      <div className="gpt3__footer_copy">
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer