import React, { useEffect, useState } from 'react';
import axios from 'axios';
import star from '../../assets/star.svg';
import imdb from '../../assets/imdb-logo.svg';
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
 /* Salut Gael*/
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
      <div className="home__container">
        {movies.map(movie => (
          <div className='card' key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className='card__image'/>
            <div className='card__details'>
              <h2>{movie.title}</h2>
              <div className='card__details--average'>
                <img src={imdb} alt="" className='imdb'/>
                <p>{movie.vote_average}</p>
                <img src={star} alt="" className='star'/>
              </div>
              <p>{movie.overview}</p>
              <div className='card__buttons'>
                <button>View Details</button>
                <button>Add to Favorites</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;