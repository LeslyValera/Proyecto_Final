import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const feather = require('feather-icons');

function Aside() {
  setTimeout(() => {
    feather.replace();
  }, 1000);

  {/*return (
    <Form className="mb-5 py-5 my-custom-form">
      <h2 style={{ textAlign: 'center', color: '#333', fontFamily: 'Roboto' }}>Registrate</h2>
      <br></br>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label><i data-feather="mail"></i>Correo Electrónico</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          Recuerda que nunca compartiremos tus datos personales.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label><i data-feather="lock"></i>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Acepto uso de mis datos personales" />
      </Form.Group>
      <Button className='button-form' type="Submit">
        <i data-feather="send"></i> Registrarme
      </Button>
    </Form>
  );*/}

}


export default Aside;