import React, { useContext, useEffect, useState } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../utils/global.context";

const Favs = () => {
  const { state, dispatch } = useContext(ContextGlobal); // Aquí desestructuramos dispatch del contexto
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem("favs")) || [];
    setFavs(storedFavs);
  }, []);

  const eliminarFav = (id) => {
    dispatch({ type: "BORRAR_FAVS", payload: { id } });

    const updFavs = favs.filter((fav) => fav.id !== id);
    setFavs(updFavs);
    localStorage.setItem("favs", JSON.stringify(updFavs));
  };

  return (
    <div className={state.theme}>
      <h1>Dentistas Favs</h1>
      <div className="card-grid">
        {favs.map((dentista) => (
          <div key={dentista.id}>
            <Card id={dentista.id} name={dentista.name} username={dentista.username} />
            <button onClick={() => eliminarFav(dentista.id)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favs;
