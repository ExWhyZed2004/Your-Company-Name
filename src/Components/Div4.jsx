import React from 'react';
import '../Css/Div4.css';

const Div4 = ({ imageUrl, title, description }) => {
  return (
    <>
      <div className="bg">
        <img src="images/bg.avif" alt="" />
      </div>
      <div id='6' className="contactus-form">
        <h1>CONTACT US </h1>
        <div className="desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores minima
          ipsa cumque repellendus, doloremque repellat nisi! Quia quis voluptatum
          exercitationem!
        </div>
        <form action="">
          <div className="form">
            <input type="text" id="name" placeholder="Name" />
            <input type="text" id="category" placeholder="Category" />
            <input type="text" id="phone" placeholder="Phone" />
            <input type="text" id="city" placeholder="City" />
          </div>
          <input type="email" id="email" placeholder="E-mail" />
          <h4>Message</h4>
          <textarea id="message" cols={30} rows={10} defaultValue={""} />
          <button>Contact Us</button>
        </form>
      </div>
      <div className="aboutus">
        <img className="imageab" src="images/bg.avif" alt="" />
        <div className="maindiv">
          <div className="leftdiv">
            <img src="images/aboutus.avif" alt="" />
          </div>
          <div id='5' className="rightdiv">
            <h2>ABOUT US</h2>
            <div className="rddesc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
              laborum alias cum pariatur culpa iste molestiae libero et tempora
              minima, dolore modi eligendi voluptatibus veniam, sapiente quos
              obcaecati. Eaque, commodi.
            </div>
            <div className="imgcontainer">
              <div className="im">
                <img src="images/ft.avif" alt="" />
                <div className="imline" />
                <div className="text">FRIENDLY TEAM</div>
              </div>
              <div className="im">
                <img src="images/inv.avif" alt="" />
                <div className="imline" />
                <div className="text">INVOLVED</div>
              </div>
              <div className="im">
                <img src="images/247.avif" alt="" />
                <div className="imline" />
                <div className="text">24/7 ASSISTANCE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Div4;
