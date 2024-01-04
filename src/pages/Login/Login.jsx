import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, loginWithEmailAndPassword, signInWithGoogle } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/home");
  }, [user, loading]);
  return(
    <div className="main-container">
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
    </div>
  )
}

export default Login
