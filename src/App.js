import { onAuthStateChanged } from '@firebase/auth';
import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import Login from './components/Login';

import firebaseApp from './credentials';
import { getAuth, onAuthStateChanged } from 'firebase/auth'
const auth = getAuth(firebaseApp);

function App() {
  const [userGlobal, setUserGlobal] = useState(null);

  onAuthStateChanged( auth, (userFirebase) => {
    if(userFirebase){
      // En el caso de que haya Iniciado Sesión

    }else{
      // En el caso de que NO haya Sesión Iniciada

    }
  })
  return <>{userGlobal ? <Home /> : <Login />}</>;
}

export default App;
