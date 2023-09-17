import React from 'react'
import { images } from "../../constants"
import "./Brands.css"
const Brands = () => {
  return (
    <div className="gpt3__brands section__padding">
      <div>
        <img src={images.google} alt="google" />
      </div>

      <div>
        <img src={images.slack} alt="slack" />
      </div>

      <div>
        <img src={images.atlassian} alt="atlassian" />
      </div>

      <div>
        <img src={images.dropbox} alt="dropbox" />
      </div>

      <div>
        <img src={images.shopify} alt="shopify" />
      </div>

    </div>
  )
}

export default Brands