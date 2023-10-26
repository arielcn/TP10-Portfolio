import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FavoritoContext } from "./context/favoritoContext";
import Creaciones from "./pages/Creaciones";
import Favorito from "./pages/Favorito";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import error404 from './error404.gif';
import Proyecto from "./pages/Proyecto";

const App = () => {
  let fav = localStorage.getItem('favorito');
  
  const [favorito, setFavorito] = useState(fav ? JSON.parse(fav) : []);

  useEffect(() => {
    localStorage.setItem('favorito', JSON.stringify(favorito));
  }, [favorito]);

  return (
    <FavoritoContext.Provider value={{ favorito, setFavorito }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/mis-creaciones" element={<Creaciones />}></Route>
            <Route path="/favorito" element={<Favorito />}></Route>
            <Route path="/proyecto/:proyId" element={<Proyecto />}></Route>
          </Route>
            <Route path="*" element={
              <div  className="text-center">
                <h1 className="mt-5 text-white display-1">Page not found</h1>
                <img src={error404} alt="my-gif" />
              </div>
            }></Route>
        </Routes>
      </BrowserRouter>
    </FavoritoContext.Provider>
  );
};

export default App;
