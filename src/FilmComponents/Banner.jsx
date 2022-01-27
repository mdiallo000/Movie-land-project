import React from 'react';

function Banner({text, backdrop}) {
  return (
  
    <header className="bg-dark text-danger p-5 hero-container">
    <h1 className="hero-text">{text}</h1>
    {backdrop &&
      <div className="hero-backdrop" style={{backgroundImage: `url(${backdrop})`}}></div>
    }
  </header>
  );
}

export default Banner;
