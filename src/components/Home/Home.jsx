import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="section home-section">
      <div className="bubbles">
        <div className="bubble small"></div>
        <div className="bubble medium"></div>
        <div className="bubble large"></div>
        <div className="bubble small"></div>
        <div className="bubble medium"></div>
        <div className="bubble small"></div>
        <div className="bubble large"></div>
        <div className="bubble medium"></div>
        <div className="bubble small"></div>
        <div className="bubble medium"></div>
      </div>
      <div className="home-content">
        <div className="home-image">
          <img src={`${process.env.PUBLIC_URL}/images/vogueNEW.png`} alt="Vogue Magazine Cover" />
        </div>
        <div className="home-text">
          <h2>ELEVATING YOUR GOALS</h2>
          <p>Helping you buy, sell, and invest with confidence – through expert strategy, market insight, and personalized service</p>
        </div>
      </div>
    </section>
  );
};

export default Home;