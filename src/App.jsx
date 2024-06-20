import React, { useContext, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { routes } from "./utils/routes";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import { ContextGlobal } from './utils/global.context';

function App() {
  const {state} = useContext(ContextGlobal);

  useEffect(() => {
    document.body.className = state.theme;
  }, [state.theme]);

  return (
    <div className="App">
      <Navbar />
      <>
        <Routes>
          <Route path={routes.home} element={<Home/>} />
          <Route path={routes.contact} element={<Contact/>} />
          <Route path={routes.detail} element={<Detail/>} />
          <Route path={routes.favs} element={<Favs/>} />
        </Routes>
      </>
      <Footer />
    </div>
  );
}

export default App;
