import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, sendPasswordReset } from "../../firebase";

function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading]);
  return (
    <div className="main-container">
      <div className="form">
        <h2>Changer mot de passe</h2>
        <input
          type="text"
          className="form__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <button className="form__btn" onClick={() => sendPasswordReset(email)}>
          Send password reset email
        </button>
        <div>
          Tu na pas de compte? <Link to="/register">Inscrit</Link> toi.
        </div>
      </div>
    </div>
  );
}
export default Reset;
