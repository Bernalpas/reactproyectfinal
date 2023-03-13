import React from 'react'
import { useState, useEffect } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Tarjeta from './Tarjeta';


//let nombre = 'Pepe';
//nombre = 'Juan';
/* const personaje = [
    {
        id: "recZkNf2kwmdBcqd0",
        name: "accent chair",
        image:
        "https://dl.airtable.com/.attachmentThumbnails/e8bc3791196535af65f40e36993b9e1f/438bd160",
    },
    {
        
    }
    }
]; */
//personaje.push('Pepe');

const URL = 'https://rickandmortyapi.com/api/character';

const Api = () => {

    const [personaje, setPersonaje] = useState([]);

    useEffect(() => {
        //fetch'https://rickandmortyapi.com/api/character')
        fetch(URL)
        .then(res => res.json())
        .then(res => setPersonaje(res.results));

        //.then(respuesta => respuesta.json())
        //.then(respuesta => setPersonaje(respuesta.results));
        //console.log(personaje);
    }, []);

    const handleImprimir = () => {
        console.log(personaje);
    } 
    

    return (
        <>
            <hr></hr>
            <h1 className="text-center m-5">
                API
            </h1>
            <hr></hr>
            <div className="text-center m-5">
                <Button onClick={ handleImprimir } variant="warning w-50 m-1">
                    Imprimir Datos por Consola
                </Button>
            </div>
            <hr></hr>
            <h2 className='m-5 text-center'>
                Personajes de Rick and Morty
            </h2>
            <div>
                <Row>
                    {personaje.map((p)=>(
                        <Col key={p.id}>
                            {/* <h3>{p.name}</h3> */}
                            <Tarjeta personaje={p} />
                        </Col>
                    ))}
                </Row>
            </div>

        </>
    )
}

export default Api;
