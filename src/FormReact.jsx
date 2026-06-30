import React from 'react';
import { Button, Form } from 'react-bootstrap';

const FormReact = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [checked, setChecked] = React.useState(false);
    const [sms, setSms] = React.useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
     setSms(`"I know everything about you, ${name}!You can't hide from me!" your secret password is ${password} and Ronaldo is the GOAT${checked}`)   }
    return (
        <div>
            <h1>React Bootstrap Form</h1>
             <Form onSubmit={handleSubmit} >
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
                </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
        <Form.Text className="text-muted">
          "We'll never share your email with anyone else".
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} label="Check me out if Ronaldo is the GOAT" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit        
      </Button>
        <p>{sms}</p>
            </Form>
        </div>
    
    );

};


export default FormReact;   