import CardFavorito from "../components/CardFavorito";
import { useContext } from "react";
import { FavoritoContext } from "../context/favoritoContext";

const Favorito = () => {
    const {favorito} = useContext(FavoritoContext);

    return (
        <div className="container mt-5 text-white">
            <h1 className="text-center mb-5">Proyectos favoritos</h1>
            <div className="row">
                {favorito.length > 0 ? favorito.map(proy =><div className='text-center col-sm-4 mb-3' ><CardFavorito proyecto={proy} /></div>) : <h1>No hay proyectos...</h1>}
            </div>
        </div>
    )
}

export default Favorito;