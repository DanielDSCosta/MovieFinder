import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.scss'; 

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(search)}&api_key=ada29726b87fea72cb63967ae3416e83`);
      console.log(response.data.results);
      setMovies(response.data.results);
    };

    if (search) {
      fetchMovies();
    }
  }, [search]);

  /* const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  ); */

  return (
    <div className="home">
      <h1 className="home__title">Movie Finder</h1>
      <input
        className="home__search"
        type="text"
        placeholder="Search for a movie..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      {movies.map(movie => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        </div>
      ))}
    </div>
  );
};

export default Home;