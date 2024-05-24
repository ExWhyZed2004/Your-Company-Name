import React from 'react';
import '../Css/Div3.css';

const Card = ({ image, name, description }) => {
  return (
    <div className="card">
      <div className="image">
        <img src={image} alt={name} />
      </div>
      <div className="name">{name}</div>
      <div className="desc">{description}</div>
    </div>
  );
};

const Div3 = () => {
  const cardData = [
    {
      image: 'images/e1.avif',
      name: 'Hugo Silva',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis explicabo molestias deserunt laboriosam, earum eum quos nihil inventore itaque ea.',
    },
    {
      image: 'images/e2.avif',
      name: 'Imanol Arias',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis explicabo molestias deserunt laboriosam, earum eum quos nihil inventore itaque ea.',
    },
    {
      image: 'images/e3.avif',
      name: 'Javier Bardem',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis explicabo molestias deserunt laboriosam, earum eum quos nihil inventore itaque ea.',
    },
  ];

  return (
    <>
      <div id='2' className="leader-head">
        <div className="heading">OUR TEAM LEADERS</div>
        <div className="line">
          <hr />
        </div>
        <p className="leader-p">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati id
          doloremque, voluptatum voluptatem facere, consequatur eaque saepe nisi eum
          accusamus ad tempore laudantium facilis itaque libero quae. Nemo minima
          error laborum illo quis amet aliquam? Ipsum reprehenderit, adipisci amet
          tenetur iure itaque velit ad ducimus delectus nemo saepe, optio illum ea
          quaerat consequuntur. Odio aliquid necessitatibus veritatis facere odit
          assumenda!
        </p>
        <div className="card-container">
          {cardData.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              name={card.name}
              description={card.description}
            />
          ))}
        </div>
      </div>
      <div id='3' className="test">
        <div className="test-desc">
          <h1 className="numbers">2500</h1>
          <div className="xyz">HAPPY CLIENTS</div>
        </div>
        <div className="test-desc">
          <h1 className="numbers">300</h1>
          <div className="xyz">FULL NOTEBOOKS</div>
        </div>
        <div className="test-desc">
          <h1 className="numbers">120</h1>
          <div className="xyz">TEAMMATES</div>
        </div>
        <div className="test-desc">
          <h1 className="numbers">30</h1>
          <div className="xyz">STORES</div>
        </div>
      </div>
    </>
  );
}

export default Div3;
