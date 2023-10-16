import React from 'react';

const Contacto = () => {

    return (
        <section>
            <h1>Contacto</h1>
            <form onSubmit={(e) => {
                e.preventDefault()
            }}>
            <div class="row mb-3">
                <div className='col-sm-6'>
                <label for="exampleFormControlInput1" class="form-label">Email</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className='col-sm-6'>
                <label for="exampleFormControlInput2" class="form-label">Number</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Ej: +54 9 11..." />
                </div>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Mensaje</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type='submit' className='btn btn-primary btn-lg'>Enviar</button>
            </form>
        </section>
    );
};

export default Contacto;