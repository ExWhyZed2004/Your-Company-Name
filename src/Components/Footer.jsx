import { useState } from 'react'
import '../Css/Footer.css'
const Footer = () => {
  return (
    <>
  <div className="footer">
    <div className="footermain">
      <ul>
        <li className="lihead">CONTENT</li>
        <a href={9} style={{ color: "white" }}>
          <li>Lorem Ipsum</li>
        </a>
        <a href={9} style={{ color: "white" }}>
          <li>Dolor sit</li>
        </a>
      </ul>
      <ul>
        <li className="lihead">INFORMATION</li>
        <a href={9} style={{ color: "white" }}>
          <li>Lorem ipsum</li>
        </a>
        <a href={9} style={{ color: "white" }}>
          <li>Asdfgh Lkjhgbn</li>
        </a>
      </ul>
      <ul>
        <li className="lihead">LEGAL</li>
        <a href={9} style={{ color: "white" }}>
          <li>Adfghj</li>
        </a>
        <a href={9} style={{ color: "white" }}>
          <li>Lmnbj</li>
        </a>
        <a href={9} style={{ color: "white" }}>
          <li>Mpoijh</li>
        </a>
      </ul>
      <ul>
        <li className="lihead">HELP</li>
        <a href={9} style={{ color: "white" }}>
          <li>Lasdf vcx</li>
        </a>
        <a href={9} style={{ color: "white" }}>
          <li>Ojhsdvb Nmajhdg</li>
        </a>
      </ul>
      <ul>
        <li>
          <div className="phonecon">
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
              className="lucide lucide-phone"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <div className="num">98785221254852122588852</div>
          </div>
        </li>
        <li>
          <div className="location">
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
              className="lucide lucide-map-pin"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx={12} cy={10} r={3} />
            </svg>
            <div className="loc">lkjhgfdcv</div>
          </div>
        </li>
      </ul>
    </div>
    <div className="footerend">
      <div className="descfe">
        Copyright{" "}
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
          className="lucide lucide-copyright"
        >
          <circle cx={12} cy={12} r={10} />
          <path d="M14.83 14.83a4 4 0 1 1 0-5.66" />
        </svg>{" "}
        2024. FaceKitaab All Rights Reserved
      </div>
      <div className="icons">
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
          className="lucide lucide-mail-plus"
        >
          <path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          <path d="M19 16v6" />
          <path d="M16 19h6" />
        </svg>
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
          className="lucide lucide-twitter"
        >
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
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
          className="lucide lucide-instagram"
        >
          <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
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
          className="lucide lucide-facebook"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      </div>
    </div>
  </div>

    </>
  )
}

export default Footer
