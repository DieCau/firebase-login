import React from 'react';

import firebaseApp from '../credentials'
import { getAuth, signOut } from 'firebase/auth'
import { Container, Button } from 'react-bootstrap';

const auth = getAuth(firebaseApp)

const Home = () => {
  return <Container className="my-4">
    <h4>
      Hola, sesion iniciada 
    </h4>
    <Button onClick={ () => signOut(auth) }>Cerrar Sesion</Button>
  </Container>
};

export default Home;
