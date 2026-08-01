import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>
      <p>I'm Robin, a 26-year-old real estate professional based in Woodlands, serving clients across Singapore. I began my career in 2024, driven by a passion for guiding clients through their property journey and finding fulfillment in seeing their satisfaction with each successful transaction. I provide <strong>data-driven insights</strong>, <strong>strategic marketing</strong>, and a <strong>client-first approach</strong> to help you make confident property decisions.</p>
      
      <h3>My Mission & Vision</h3>
      <p className="p2">My passion lies in helping families and investors make <strong>confident</strong> property decisions – whether it's finding their dream home, upgrading to a better space, or selling at the <strong>highest possible price.</strong></p>
      
      <h4>Unique Value</h4>
      <p className="p3">When thinking of selling your home in Singapore with 36,000 property agents for you to choose from, <strong>One question crosses your mind "Why should I Choose you to sell my flat?"</strong></p>
      
      <div className="about-content">
        <div className="about-image">
          <img src={`${process.env.PUBLIC_URL}/images/ootd.png`} alt="Robin Tsai Professional Photo" />
        </div>
        <div className="about-quote">
          <blockquote>"I don't just sell houses, I provide confidence and clarity in your whole property journey" – Robin</blockquote>
        </div>
      </div>
    </section>
  );
};

export default About;