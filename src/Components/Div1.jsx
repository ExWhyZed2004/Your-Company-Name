import { useState } from 'react'
import '../Css/Div1.css'
const Div1 = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
<>
<div className="header">
    <div className="heading">COMPANY NAME</div>
  </div>
  <div className="nav-bar">
    <ul>
      <a href="#1">
        <li>HOME</li>
      </a>
      <a href="#2">
        <li>ABOUT</li>
      </a>
      <a href="#3">
        <li>SERVICES</li>
      </a>
      <a href="#4">
        <li>TESTIMONIALS</li>
      </a>
      <a href="#5">
        <li>PORTFOLIO</li>
      </a>
      <a href="#6">
        <li>CONTACT US</li>
      </a>
    </ul>
  </div></>

  )
}

export default Div1
