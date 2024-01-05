import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { 
  auth, 
  registerWithUsernameAndEmailAndPassword, 
  signInWithGoogle 
} from "../../firebase";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("")
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
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

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/home");
  }, [user, loading]);

  return(
    <div className="main-container">
      <div className="form">
        <h2>Inscription</h2>
        <input
          type="text"
          className="form__textBox"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nom"
        />
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
        <input
          type="password"
          className="form__textBox"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirmez le mot de passe"
        />
        <button className="form__btn" onClick={register}>
          Inscription
        </button>
        <button className="form__btn form__google" onClick={signInWithGoogle}>
          Inscription avec Google
        </button>
        <div>
          Tu a deja un compte? <Link to="/">Login</Link> maintenant.
        </div>
      </div>
    </div>
  )
}

export default Register
     /*  <form>
        <div>
          <button type = "submit" onClick = {(e) => signInWithGoogle(e)}>S'inscrire avec Google</button>
        </div>
        <div>
          <input id = "signupEmail" type = "email" aria-describedby = "emailHelp" placeholder = "nom@exemple.fr" value = { email } onChange = { (e) => setEmail(e.target.value) }></input>                   
        </div>                                   
        <div>
          <input id = "signupPassword" type = "password" placeholder = "Mot de passe" value = { password } onChange = { (e) => setPassword(e.target.value) }></input>                   
        </div>                                   
        <div>
          <input id = "confirmPassword" type = "password" placeholder = "Confirmez le mot de passe" value = { confirmPassword } onChange = { (e) => setConfirmPassword(e.target.value) }></input>
        </div>                                   
        <div>
          <button type = "submit" onClick = {(e) => registerWithUsernameAndEmailAndPassword(e)}>S'inscrire</button>
        </div>                                   
        <span>Retourner vers login <Link to = "/">Cliquer ici.</Link></span>                                       
      </form> */