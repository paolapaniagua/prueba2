import React, {useState} from 'react';
import CreadorDePostits from '../CreadorDePostits/CreadorDePostits.js';
import PostIt from '../PostIt/PostIt';
import DeleteIcon from '@material-ui/icons/Delete';
import { Button } from '@material-ui/core';

const Workspace = ({mostrarBoard}) => {

    //función para pasar de board
    const botonCambiar = () => {
        mostrarBoard(false);
    }

    const postitIds = () => {
        let ids = { ...localStorage };
        return Object.keys(ids).filter(s => s.includes('active'))
    }

    //arreglo de los post-its
    //const filtered_ids = Object.keys(postItsIniciales).filter(s => s.includes('active'));
    const [allpostits, guardarAllPostIts] = useState(postitIds);
    

    //función que tome los post-its creados y agrega el nuevo
    const agregarPostIt = (postit) => {
       // guardar un posit
        let postitId = 'active-' + postit.id
        localStorage.setItem(postitId, JSON.stringify(postit));

        guardarAllPostIts(postitIds);
    }

    //función para seleccionar un post-its y moverlo a la papelera
    const moverALaPapelera = (postitId) => {
        
        let postit = JSON.parse(localStorage.getItem(postitId))
        localStorage.removeItem(postitId);
        localStorage.setItem('removed-' + postit.id, JSON.stringify(postit))
        
        guardarAllPostIts(postitIds);
    }

    //editar un post-it
    const editarPostit = (postitId) => {
        console.log(postitId)
        console.log("Aqui")

        let postitRecuperado = JSON.parse(localStorage.getItem(postitId))
    }       

    //--------------------------
    const checkIfEmpty = () => {
        let ids = { ...localStorage }
        let removedIds = Object.keys(ids).filter(s => s.includes('removed'))
        return removedIds.length > 0;
    }
    

    return (
        <div id="workspace">
            <h2 className="">Workspace</h2>
            <div className="workspace">
                <div className="espacioForm">
                    <h3>Formulario para crear Post-its</h3>
                    <CreadorDePostits
                        agregarPostIt={agregarPostIt}
                    />
                </div>
                <div className="cajanotitas">
                    <h3>Lista de Post-its</h3>              
                    {allpostits.map(postitId => (
                        <PostIt
                            className="notita"
                            key={ postitId }
                            postitId={ postitId }
                            moverALaPapelera={moverALaPapelera}
                            editarPostit={editarPostit}
                            mostrarBoard={mostrarBoard}
                        />
                      ))}
                </div>
            </div>
                {checkIfEmpty() ?
                    (<Button 
                        variant="contained"
                        type="button"
                        className='icon-button'
                    
                        onClick={ () => botonCambiar() }
                        endIcon={<DeleteIcon/>}
                    >Trash Bin</Button>)
                    :
                    (<Button 
                        variant="contained" disabled
                        endIcon={<DeleteIcon/>}
                    >Trash Bin</Button>)
                }
        </div>
    )
}

export default Workspace;