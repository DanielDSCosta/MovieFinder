import React from 'react';
import './Home.scss'; 

const Home = () => {
  return (
    <div className="home">
      <h1 className="home__title">Movie Finder</h1>
      <input className="home__search" type="text" placeholder="Search for a movie..." />
    </div>
  );
};

export default Home;