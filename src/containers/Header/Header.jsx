import React from 'react'
import { images } from "../../constants"
import "./Header.css"
const Header = () => {
  return (
    <div className="gpt3__header section__padding" id='home'>
      <div className="gpt3__header_content">
        <h1 className="gradient__text">Let’s Build Something amazing with GPT-3 OpenAI</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

        <form action="" className='gpt3__header_form'>
          <input type="text" placeholder='Your Email Address' required/>
          <button type='button'>Get Started</button>
        </form>

        <div className="gpt3__header_people">
          <img src={images.people} alt="people" />
          <span>1,600 people requested access a visit in last 24 hours</span>
        </div>
      </div>

      <div className="gpt3__header_img">
        <img src={images.ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header