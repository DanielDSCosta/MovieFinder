import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

const Home = () => {
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
    if (loading) return;
    if (!user) return navigate("/");

    fetchUserName();
  }, [user, loading]);

  return (
    <div className = "main-container">
      <div>
        <h3>Hello {name} content de te revoir!</h3>
        <button className="form__btn logout" type = "submit" onClick = {logout}>Déconnecter</button>
        <input className="form__textBox" type="text" placeholder="Search for a movie..." />
      </div>
    </div>       
  );
};

export default Home;


