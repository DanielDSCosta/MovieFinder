import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './LatestReleases.scss';
import star from '../../assets/star.svg';
import imdb from '../../assets/imdb-logo.svg';

const LatestReleases = () => {
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState('all');
  const [genres, setGenres] = useState([]);
  
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const filteredMovies = category === 'all' ? movies : movies.filter(movie => movie.genre_ids.includes(parseInt(category)));
  
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=ada29726b87fea72cb63967ae3416e83');
      setMovies(response.data.results);
    };
  
    const fetchMoreMovies = async () => {
      const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=ada29726b87fea72cb63967ae3416e83&page=2');
      setMovies(movies => [...movies, ...response.data.results]);
    };
  
    const fetchGenres = async () => {
      const response = await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=ada29726b87fea72cb63967ae3416e83');
      setGenres(response.data.genres);
    };
  
    fetchMovies();
    fetchMoreMovies();  
    fetchGenres();
  }, []);

  return (
    <div className='main-container'>
      <div className="latest-releases">
        <h2>Latest Releases</h2>
        <select className="latest-releases__category" onChange={handleCategoryChange}>
          <option value="all">All</option>
          {genres.map(genre => <option key={genre.id} value={genre.id}>{genre.name}</option>)}
        </select>
        <div className="latest-releases__container">
          {filteredMovies.sort((a, b) => new Date(b.release_date) - new Date(a.release_date)).map(movie => {
            const releaseDate = new Date(movie.release_date);
            const day = releaseDate.getDate();
            const month = releaseDate.getMonth() + 1; // Les mois sont indexés à partir de 0 en JavaScript
            const year = releaseDate.getFullYear();

            return (
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
                  <p>Release Date: {`${day}/${month}/${year}`}</p>
                  <div className='card__buttons'>
                    <button>View Details</button>
                    <button>Add to Favorites</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default LatestReleases