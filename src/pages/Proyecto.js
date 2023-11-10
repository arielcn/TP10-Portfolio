import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Proyecto = () => {
    const [proyecto, setProyecto] = useState({});
    const { proyId } = useParams();
    useEffect(() => {
        axios.get('/proyectos.json')
            .then((res) => {
                setProyecto(res.data.Proyectos.find(p => p.Id == proyId))
            });
    }, []);


    return (
        <div class="container mt-5 text-center">
            <img src={proyecto.Imagen} width='50%' alt="img-proy"></img>
            <h1 class="card-title">{proyecto.Titulo}</h1>
            <p class="card-text">{proyecto.Desc}</p>
            <p>Link del proyecto: <a href={proyecto.Link} rel="noreferrer" target='_blank'>Click Aquí</a></p>
            <p class="card-text"><small>Fecha de creación: {proyecto.FechaCreacion}</small></p>
        </div>
    )
}

export default Proyecto;