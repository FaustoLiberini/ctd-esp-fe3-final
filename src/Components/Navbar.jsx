import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../utils/routes';
import { ContextGlobal } from '../utils/global.context';

// Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  return (
    <nav>
      <Link to={routes.home}>
        <h4>Home</h4>
      </Link>
      <Link to={routes.contact}>
        <h4>Contacto</h4>
      </Link>
      <Link to={routes.detail}>
        <h4>Detalle Dentista</h4>
      </Link>
      <Link to={routes.favs}>
        <h4>Destacados</h4>
      </Link>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={() => dispatch({ type: 'TOGGLE_THEME' })}>
        Change theme {state.theme === 'light' ? 'Oscuro' : 'Claro'}
      </button>
    </nav>
  );
}

export default Navbar;