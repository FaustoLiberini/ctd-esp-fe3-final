import React, { useContext, useEffect, useState } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../utils/global.context";;

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {state} = useContext(ContextGlobal);
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem("favs")) || [];
    setFavs(storedFavs);
  }, []);

  return (
    <div> {/*className={state.theme}*/}
      <h1>Dentistas Favs</h1>
      <div className="card-grid">
        {favs.map(dentista => (
          <Card key={dentista.id} id={dentista.id} name={dentista.name} username={dentista.username}/>
        ))}
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </div>
  );
};

export default Favs;
