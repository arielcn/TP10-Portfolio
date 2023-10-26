import './Card.css'
import { useContext } from 'react';
import { FavoritoContext } from "../context/favoritoContext";
import { Link } from 'react-router-dom';

const Card = ({ proyecto }) => {
    const {favorito, setFavorito} = useContext(FavoritoContext);

    const anadirAlFavorito = (proyecto) => {
        setFavorito([...favorito, proyecto]);
    }

    return (
        <div class="card text-bg-dark">
            <img src={proyecto.Imagen} class="card-img" id='imagenCard' alt="..."/>
                <div class="card-img-overlay" id='textoCard'>
                    <h5 class="card-title bg-light">{proyecto.Titulo}</h5>
                    <p class="card-text"><small>Fecha de creación: {proyecto.FechaCreacion}</small></p>
                    <button onClick={ () => {anadirAlFavorito(proyecto)}} className='me-1'>Añadir a Favorito</button>
                </div>
        </div>
    );
}

export default Card;