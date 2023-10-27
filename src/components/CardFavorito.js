import './Card.css'
import { useContext } from 'react';
import { FavoritoContext } from "../context/favoritoContext";
import Button from 'react-bootstrap/Button';

const CardFavorito = ({ proyecto }) => {
    const {favorito, setFavorito} = useContext(FavoritoContext);

    const borrar = (proyecto) => {
        const favoritoNuevo = favorito.filter(p => p.Id !== proyecto.Id);
        setFavorito(favoritoNuevo);
    }

    return (
        <div id='cardTarjeta' class="card text-bg-dark">
            <img src={proyecto.Imagen} class="card-img" id='imagenCard' alt="..."/>
                <div class="card-img-overlay" id='textoCard'>
                    <h5 class="card-title bg-light rounded-5">{proyecto.Titulo}</h5>
                    <p class="card-text"><small>Fecha de creación: {proyecto.FechaCreacion}</small></p>
                    <Button onClick={() => { borrar(proyecto) }} className='me-1'>Quitar de favoritos</Button>
                </div>
        </div>
    );
}

export default CardFavorito;