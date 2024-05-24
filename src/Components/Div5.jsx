import React from 'react'
import { useState } from 'react'
import '../Css/Div5.css'
const Div5 = ({ imageUrl, title, description }) => {
  return (

<>
<div id='4' className="gallery">
    <div className="heading1">OUR GALLERY</div>
    <div className="gdesc">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam iusto
      molestiae architecto dolore magni maiores deleniti veniam facere! Maxime
      nobis ea voluptatum blanditiis ratione amet in praesentium vero autem ex
      qui velit animi magni rerum repellendus, libero fuga voluptatem
      perspiciatis, nesciunt quae consequatur iusto dicta! Omnis voluptas
      officiis impedit placeat!
    </div>
    <div className="gallerycontainer">
      <img src="images/g4.avif" alt="" />
      <img src="images/g1.avif" alt="" />
      <img src="images/g2.avif" alt="" />
      <img src="images/g5.avif" alt="" />
      <img src="images/g3.avif" alt="" />
    </div>
  </div>

</>
  );
};

export default Div5;
