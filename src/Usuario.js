import React from 'react';
import { Link } from "react-router-dom";

export default function QuemSomos(){
    return (
        <div>
            <Link to='/Home'>Retornar a Página Principal</Link>
            <form name="meu_form">
                <h1>Página do usuário</h1>
                <h2>Bem vindo</h2>
            </form>
        </div>
    )
}