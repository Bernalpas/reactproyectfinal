import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Formulario() {
    return (
        <>

            <h1 className="text-center m-5">
                Formulario Page
            </h1>
            <div className="container">
                <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Acepto lo Términos" />
                </Form.Group>

                <div className="text-center">
                <Button variant="primary" type="submit" className="w-50">
                    Enviar Datos
                </Button>
                </div>
                </Form>
            </div>
        </>
    );
}

export default Formulario;