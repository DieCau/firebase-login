import React, { useState } from 'react';
import { Stack, Container, Form, Button } from 'react-bootstrap';

import firebaseApp from '../credentials';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
const auth = getAuth(firebaseApp);

const Login = () => {
  const [nowRegister, setNowRegister] = useState(false);

  async function submitHandler(e) {
    e.preventDefault();
    const email = e.target.formBasicEmail.value;
    const pass = e.target.formBasicPassword.value;

    if (nowRegister) {
      // Si el User usa "Regístrese"
      const user = await createUserWithEmailAndPassword(
          auth, 
          email, 
          pass
      );
    } else { 
      // Si el User "Inicia Sesión" 
      signInWithEmailAndPassword(
          auth, 
          email, 
          pass
      );
    }
  }

  return (
    <Container>
      <Stack gap={3}>
        <h1>{nowRegister ? 'Regístrate' : 'Inicia Sesión'}</h1>
        <Form onSubmit={submitHandler} className="my-4">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="dark" type="submit">
            {nowRegister ? 'Regístrate' : 'Inicia Sesión'}
          </Button>
        </Form>

        <Button variant="primary" type="submit">
          Acceder con Google
        </Button>

        <Button variant="secondary" onClick={() => setNowRegister(!nowRegister)}>
          {nowRegister
            ? '¿Ya tienes cuenta? Inicia Sesión'
            : '¿No tienes cuenta? Regístrate'}
        </Button>
      </Stack>
    </Container>
  );
};

export default Login;
