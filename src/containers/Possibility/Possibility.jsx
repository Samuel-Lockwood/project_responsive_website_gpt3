import React from 'react'
import { images } from "../../constants"
import "./Possibility.css"
const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding">
      <div className="gpt3__possibility_img">
        <img src={images.possibility} alt="possibility img" />
      </div>

      <div className="gpt3__possibility_content" id='possibility'>
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility