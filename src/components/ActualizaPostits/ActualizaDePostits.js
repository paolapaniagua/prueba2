import React, {Fragment, useState} from 'react';
import {v4 as uuid} from "uuid";

const ActualizaPostits = ({postitact}) => {
    //Funcion permite re-escribir el objeto de actualizar Post-it (se usa esta funcion cuando el usuario esta
    //escribiendo en el form):
  
    let postitactn = JSON.parse(localStorage.getItem(postitact))

    const [ postit, actualizarPostIt ] = useState({
        titulo: '',
        date: '',
        descripcion: '',
        active: true
    })

 //crea un state para mostrar el mensaje de error (form vacio o incompleto)
 const [ error, actualizarError ] = useState(false)

 
 //Funcion que se ejecuta cada vez que el usuario escribe en un imput:
 const actualizarState = (evento) => {
     actualizarPostIt({
         ...postit,
         [evento.target.name] : evento.target.value
     })
 }

    return (
        <Fragment>

            <form 
                className="creador"  
            >
                <label className="etiqueta">Título</label>
                <input
                    type="text"
                    name="titulo"
                    onChange={actualizarState}
                    value={postitactn.titulo}
                />

                <label className="etiqueta">Fecha</label>
                <input
                    type="date"
                    name="date"
                    onChange={actualizarState}
                    value={postitactn.date}
                />

                <label className="etiqueta">Descripción</label>
                <textarea
                    type="text"
                    name="descripcion"
                    onChange={actualizarState}
                    value={postitactn.descripcion}
                ></textarea>

                <button
                    className="boton"
                    type="submit"
                >Agregar Post-it</button>
            </form>
        </Fragment>
    )
}

export default ActualizaPostits;
