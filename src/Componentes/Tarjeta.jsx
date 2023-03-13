import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Tarjeta({personaje}) {
    return (
        <Card style={{ width: '18rem', margin: '0.8rem' }}>
        <Card.Img 
            variant="top" 
            src={personaje.image} 
        />

        <Card.Body className="text-center">
            <Card.Title>{personaje.name}</Card.Title>
            <Card.Text>
                {personaje.description}
            </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroup.Item>{personaje.status}</ListGroup.Item>
            <ListGroup.Item>{personaje.species}</ListGroup.Item>
            <ListGroup.Item>{personaje.gender}</ListGroup.Item>
        </ListGroup>
        </Card>
    );
}

export default Tarjeta;