import React from 'react'
import { useState } from 'react'
import '../Css/Div2.css'
const Div2 = ({ images, subtitles, bodyTexts }) => {
  return (
    <>
  <div className="nav-bar2">
    <ul>
      <li>Company Logo</li>
      <li>
        <a href="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu"
          >
            <line x1={4} x2={20} y1={12} y2={12} />
            <line x1={4} x2={20} y1={6} y2={6} />
            <line x1={4} x2={20} y1={18} y2={18} />
          </svg>
        </a>
      </li>
    </ul>
  </div>
  <div className="company-head">
    <h1>WELCOME TO</h1>
    <h3>COMPANY NAME</h3>
  </div>

    </>
  )
}

export default Div2
