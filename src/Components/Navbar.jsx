import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../utils/routes';
import { ContextGlobal } from '../utils/global.context';


const Navbar = () => {
  const {state, dispatch} = useContext(ContextGlobal);

  const themeClass = state.theme === 'dark' ? 'dark' : '';

  return (
    <nav className={themeClass}>
      <div className="links-left">
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
      </div>
      <div className="theme-switcher">
        <button onClick={() => dispatch({type: 'CAMBIO_THEME'})}>
          {state.theme === 'light' ? (
            <span role="img" aria-label="luna">
              🌙
            </span>
          ) : (
            <span role="img" aria-label="sol">
              ☀️
            </span>
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;