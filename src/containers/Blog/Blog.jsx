import React from 'react'
import { CardBlog } from "../../components"
import { images } from '../../constants'
import "./Blog.css"
const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id='blog'>
      <div className="gpt3__blog_heading">
        <h1 className="gradient__text">A lot is happening, We are blogging about it.</h1>
      </div>

      <div className="gpt3__blog_container">
        <div className="gpt3__blog_container_groupA">
          <CardBlog imgUrl={images.blog01} date={"Sep 26, 2021"} title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}/>
        </div>
        <div className="gpt3__blog_container_groupB">
          <CardBlog imgUrl={images.blog02} date={"Sep 26, 2021"} title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}/>
          <CardBlog imgUrl={images.blog03} date={"Sep 26, 2021"} title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}/>
          <CardBlog imgUrl={images.blog04} date={"Sep 26, 2021"} title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}/>
          <CardBlog imgUrl={images.blog05} date={"Sep 26, 2021"} title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}/>
        </div>
      </div>
    </div>
  )
}

export default Blog