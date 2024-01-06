import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  auth, 
  loginWithEmailAndPassword,
  registerWithUsernameAndEmailAndPassword, 
  signInWithGoogle 
} from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";
import "./Login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("")
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/home");
  }, [user, loading]);

  const register = () => {
    if (!name) {
      alert("Entre ton nom");
      return;
    }
    if (password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas");
      return;
    }
    registerWithUsernameAndEmailAndPassword(name, email, password);
  }

  return (
    <div className="main-container">
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="login">
          <div className="form-login">
            <label htmlFor="chk" aria-hidden="true">Login</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Adresse email"
            />
            <input
              type="password"
              name="pswd"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mot de passe"
            />
            <p><Link to="/reset">Mot de passe oublié?</Link></p>
            <button onClick={() => loginWithEmailAndPassword(email, password)}>
              Se connecter
            </button>
            <button onClick={signInWithGoogle}>
              <div>Connecter avec <FcGoogle /></div>
            </button>
          </div>
        </div>

        
        <div className="signup">
          <div className="form-signup">            
            <label htmlFor="chk" aria-hidden="true">Inscription</label>
            <input 
              type="text" 
              name="txt"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nom" 
            />
            <input 
              type="email" 
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Adresse email" 
            />
            <input 
              type="password" 
              name="pswd"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mot de passe" 
            />
            <input 
              type="password" 
              name="pswd" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirmez le mot de passe" 
            />
            <button onClick={register}>
              Inscription
            </button>
            <button onClick={signInWithGoogle}>
              <div>Connecter avec <FcGoogle /></div>
            </button>
          </div>
        </div>
      </div>
    </div>

)
}

export default Login

{/* <div className="main-container">
  <div className="form">
    <h2>Login</h2>
    <input
      type="text"
      className="form__textBox"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Adresse email"
    />
    <input
      type="password"
      className="form__textBox"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="Mot de passe"
    />
    <button className="form__btn" onClick={() => loginWithEmailAndPassword(email, password)}>
      Se connecter
    </button>
    <button className="form__btn form__google" onClick={signInWithGoogle}>
      Connectez avec Google
    </button>
    <div>
      <Link to="/reset">Mot de passe oublié</Link>
    </div>
    <div>
      Tu na pas de compte? <Link to="/register">Inscrit</Link> toi.
    </div>
  </div>
</div>  */}