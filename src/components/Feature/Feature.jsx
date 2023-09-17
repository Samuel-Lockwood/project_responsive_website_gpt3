import React from 'react';
import './Feature.css';

const Feature = ({ title, text }) => (
  <div className="gpt3__feature">
    <div className="gpt3__feature_title">
      <div className='gpt3__features_dash'/>
      <h1>{title}</h1>
    </div>
    <div className="gpt3__feature_text">
      <p>{text}</p>
    </div>
  </div>
);

export default Feature;
