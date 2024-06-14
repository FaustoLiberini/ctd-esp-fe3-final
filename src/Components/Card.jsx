import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from '../utils/global.context';

const Card = ({ name, username, id }) => {
  const { dispatch } = useContext(ContextGlobal);

  const addFav = (e) => {
    e.preventDefault(); 

    const dentista = { name, username, id };

  

    let favs = JSON.parse(localStorage.getItem("favs")) || [];

    const yaEstaFav = favs.some(fav => fav.id === dentista.id);
    if (yaEstaFav) {
      alert("Este dentista ya está en Destacados");
      return;
    }

    favs.push(dentista);
    localStorage.setItem("favs", JSON.stringify(favs));

    dispatch({ type: 'ADD_FAVS', payload: dentista });
  };

  return (
    <div className="card">
      <img src="/public/images/doctor.jpg" alt="Imagen Dentista" />
      <h3>{name}</h3>
      <p>{username}</p>
      <p>ID: {id}</p>
      <Link to={`/detail/${id}`}>Ver más info</Link>
      <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;