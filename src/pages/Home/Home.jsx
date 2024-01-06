import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import axios from 'axios';
import star from '../../assets/star.svg';
import imdb from '../../assets/imdb-logo.svg';
import './Home.scss';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();

      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("Une erreur s'est produite lors de la récupération des données de l'utilisateur.");
    }
  };
  
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(search)}&api_key=ada29726b87fea72cb63967ae3416e83`);
      console.log(response.data.results);
      setMovies(response.data.results);
    };
  
    if (search) {
      fetchMovies();
    }
    if (loading) return;
    if (!user) return navigate("/");

    fetchUserName();
  }, [user, loading, search]);

  return (
    <div className="main-container">
      <div className="home" >
        <h2>Hello {name} content de te revoir!</h2>
        <button className="form__btn logout" type = "submit" onClick = {logout}>Déconnecter</button>
        <input
          className="form__textBox"
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
    </div>       
  );
};

export default Home;



