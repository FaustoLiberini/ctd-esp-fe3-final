import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ContextGlobal } from '../utils/global.context';
import '../index.css'; // Importamos el archivo de estilos global

const Detail = () => {
  const { state } = useContext(ContextGlobal);
  const { id } = useParams();
  const [dentista, setDentista] = useState(null);

  const themeClass = state.theme === 'dark' ? 'dark' : '';

  useEffect(() => {
    const fetchDentista = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();
        setDentista(data);
      } catch (error) {
        console.error('Error fetching dentista:', error);
      }
    };
    fetchDentista();
  }, [id]);

  return (
    <div className={`main-content ${themeClass}`}>
      {dentista ? (
        <div className="dentista-info">
          <h1>Información de: {dentista.name}</h1>
          <div className='info-dentista'>
            <h4>Email:</h4> <span>{dentista.email}</span>
            <h4>Phone:</h4> <span>{dentista.phone}</span>
            <h4>Website:</h4> <span>{dentista.website}</span>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Detail;