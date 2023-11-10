import Card from "../components/Card";
import { useState, useEffect } from "react";
import axios from "axios";
import './Creaciones.css'

const Creaciones = () => {
    const [proyectos, setProyectos] = useState([]);

    useEffect(() => {
        axios.get('proyectos.json')
            .then((res) => {
                setProyectos(res.data.Proyectos)
            });
    }, []);

    return (
        <div class="container mt-5 text-center">
            <div class="wrapper">
                <div class="bg"> Proyectos </div>
                <div class="fg"> Proyectos </div>
            </div>
            <div class="row">
                {
                    proyectos.map(proy => <div className="col-sm-4 mb-3"><Card proyecto={proy} /></div>)
                }
            </div>
        </div>
    )
}

export default Creaciones;