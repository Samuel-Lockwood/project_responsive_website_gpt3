import React from 'react'
import { images } from '../../constants' 
import "./CardBlog.css"
const CardBlog = ({ imgUrl, date, title }) => {
  return (
    <div className="gpt3__cardBlog">
      <div className="gpt3__cardBlog_img">
        <img src={imgUrl} alt="blog image" />
      </div>
      <div className="gpt3__cardBlog_content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default CardBlog