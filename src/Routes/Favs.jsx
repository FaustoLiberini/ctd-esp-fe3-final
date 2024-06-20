import React, { useContext, useEffect, useState } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../utils/global.context";

const Favs = () => {
  const {state, dispatch} = useContext(ContextGlobal); 
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    const guardadosFavs = JSON.parse(localStorage.getItem("favs")) || [];
    setFavs(guardadosFavs);
  }, []);

  const eliminarFav = (id) => {
    dispatch({ type: "BORRAR_FAVS", payload: { id } });

    const updFavs = favs.filter((fav) => fav.id !== id);
    setFavs(updFavs);
    localStorage.setItem("favs", JSON.stringify(updFavs));
  };

  return (
    <div className={`${state.theme} favs-container`}>
      <h1>Dentistas Favs</h1>
      <div className="card-grid">
        {favs.map((dentista) => (
          <div key={dentista.id}>
            <Card id={dentista.id} name={dentista.name} username={dentista.username} />
            <button className="btn-eliminar" onClick={() => eliminarFav(dentista.id)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favs;
