import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Usuario from './Usuario';
import Home from './Home';
import Cadastro from './Cadastro';
import Enviar from './Enviar';

export default function App() {
  return (
      <>
    <header>
      <Link to= '/Home'>Home</Link>
      <Link to= '/Usuarios'>Usuario</Link>
      <Link to= '/Cadastro'>Cadastro</Link>
      <Link to= '/Enviar'>Enviar</Link>
    </header>
    <hr></hr>
    <main>
        <Switch>
          <Route path='/Home' component= {Home}/>
          <Route path='/Cadastro' component= {Cadastro}/>
          <Route path='/Usuario' component= {Usuario}/>
          <Route path='/Enviar' component= {Enviar}/>
        </Switch>
      </main></>
  );
}