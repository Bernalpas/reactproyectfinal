import { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Tarjeta from './Tarjeta';

const Productos = () => {

    const [productos, setProductos] = useState([]);


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(res=>setProductos(res))
    }, [])

    console.log(productos);

    return (
        <div>
            <hr></hr>
                <h1 className="text-center m-5">
                    Productos en Stock
                </h1>
            <hr></hr>

            <div>
                <Row>
                    {productos.map((p)=>(
                        <Col key={p.id}>
                        
                            <Tarjeta personaje={p} />

                            {/* <h3>{p.title}</h3>
                            <h2>Precio: {p.price}</h2>
                            <div>
                                <img src={p.image} alt="imagen de producto" />
                            </div> */}
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    )
}

export default Productos;