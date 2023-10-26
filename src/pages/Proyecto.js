const Proyecto = () => {
    return (
        <div class="container mt-5 text-center">
            <h5 class="card-title">{proyecto.Titulo}</h5>
            <p class="card-text">{proyecto.Desc}</p>
            <p>Link del proyecto<a href={proyecto.Link} target='_blank'>Click Aquí</a></p>
            <p class="card-text"><small>Fecha de creación: {proyecto.FechaCreacion}</small></p>
        </div>
    )
}

export default Proyecto;