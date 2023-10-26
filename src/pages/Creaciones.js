import Card from "../components/Card";
import { useState, useEffect } from "react";
import axios from "axios";

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
            <div class="row">
                {
                    proyectos.map(proy => <div className="col-sm-4 mb-3"><Card proyecto={proy} /></div>)
                }
            </div>
        </div>
    )
}

export default Creaciones;