import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Contacto from "../components/Contacto";
import axios from "axios";
import './Home.css'
import { Button } from "react-bootstrap";

const Home = () => {
    const [proyectos, setProyectos] = useState([]);
    const [proyRandom, setProyRandom] = useState();

    useEffect(() => {
        axios.get('proyectos.json')
            .then((res) => {
                setProyectos(res.data.Proyectos)
            });
    }, []);


    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1));
    };

    return (
        <html className="container mt-5">
            <section className="m-0 row justify-content-center">
                <div className="text-center mb-3">
                    <h1 className="text-white">¡Un proyecto al azar!</h1>
                    <button className="btn btn-primary btn-lg" onClick={() => { setProyRandom(proyectos[randomNumberInRange(1, proyectos.length - 1)]) }}>Click Aquí</button>
                </div>
                { proyRandom ?  <div class="card w-25 text-center">
                    <div class="card-body">
                        <h5 class="card-title">{proyRandom.Titulo}</h5>
                        <p class="card-text">{proyRandom.Desc}</p>
                        <Button as={Link} to={'/proyecto/' + proyRandom.Id} className='me-1'>Ir al proyecto</Button>
                    </div>
                </div>: <></> }
            </section>
            
            <hr className="text-white" />

            <section className="proyectoFav">
                <div>
                <h1>Mi proyecto favorito</h1>
                <p><small>Autor: Flecha Snieg</small></p>
                <p><em>Fecha de publicación: 27/07/2014</em></p>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempor, turpis id finibus ultrices, felis dolor mattis tortor, in interdum dolor ex eu ante. Proin quis accumsan risus. Donec semper tortor libero, elementum ultricies justo congue quis. Nam at neque et metus porttitor tempus. Pellentesque venenatis elit vel eros pulvinar, eu finibus sem vestibulum. Sed tristique neque elit, a porttitor sem convallis sit amet. Cras sit amet enim non justo pretium mollis. Vivamus at tellus id eros molestie tempus. Cras augue nisl, feugiat eget dignissim non, porttitor sit amet ante.</p>
                <img width='80%' src="https://flag-creator.com/wp-content/uploads/2023/10/cropped-Flag-Creator-Maker-Generator-Design-scaled-1-1024x538.jpg" alt="img+"></img>
                </div>
            </section>

            <footer className="p-5">
                <Contacto></Contacto>
            </footer>
        </html>
    )
}

export default Home;