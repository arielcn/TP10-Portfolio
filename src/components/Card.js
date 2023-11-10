import './Card.css'
import { useContext } from 'react';
import { FavoritoContext } from "../context/favoritoContext";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Card = ({ proyecto }) => {
    const { favorito, setFavorito } = useContext(FavoritoContext);

    const anadirAlFavorito = (proyecto) => {
        setFavorito([...favorito, proyecto]);
        console.log('favorito', proyecto)
        console.log(favorito)
        proyecto.favorito = true;
    }

    return (
        <div id='cardTarjeta' class="card text-bg-dark">
            <img src={proyecto.Imagen} class="card-img" id='imagenCard' alt="..." />
            <div class="card-img-overlay" id='textoCard'>
                <h5 class="card-title bg-light rounded-5">{proyecto.Titulo}</h5>
                <p class="card-text"><small>Fecha de creación: {proyecto.FechaCreacion}</small></p>
                <Button as={Link} to={'/proyecto/' + proyecto.Id} className='me-1'>Ir al proyecto</Button>
                {proyecto.favorito
                    ? <ion-icon style={{ fontSize: '24px' }} name="star"></ion-icon>
                    : <ion-icon style={{ fontSize: '24px' }} name="star-outline" onClick={() => { anadirAlFavorito(proyecto) }}></ion-icon>
                }
                
            </div>
        </div>
    );
}

export default Card;