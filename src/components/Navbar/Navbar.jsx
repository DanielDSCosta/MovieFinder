import { NavLink } from 'react-router-dom'; 
import { SiThemoviedatabase } from "react-icons/si";
import { BiExit } from "react-icons/bi";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, logout } from '../../firebase';
import './Navbar.scss';

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar__logo"> 
        <SiThemoviedatabase size={50} />  {/*  Logo provisoire */}
        <h1 className='navbar__logo--title'>FINDER</h1>
      </NavLink>
      <div className="navbar__links">
        <NavLink to="/home">Accueil</NavLink> 
        <NavLink to="/latest-releases">Dernières sortis</NavLink> 
        <NavLink to="/favorites">Favoris</NavLink> 
        {user && 
          <button className="navbar__logout" onClick={logout}><BiExit /></button>
        }
      </div>
      
    </nav>
  );
};

export default Navbar;