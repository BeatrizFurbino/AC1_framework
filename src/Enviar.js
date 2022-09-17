import React from 'react';
import {Link} from "react-router-dom";
import './Cadastro.css'
import './Enviar.js'

export default function Cadastro(){
    return (
        <div>
            <Link to='/Home'>Retornar a Página Principal</Link>
            <form name="meu_form">
                <h1>Página enviar</h1>                 
                    <label for="opniao">Comentário</label>                    
                    <textarea placeholder="Deixe sua opnião"></textarea>                    
                    <input type="submit" class="enviar" onclick="Enviar();" value="Enviar" />
                    <input type="submit" class="info" onclick="Info();" value="Informações Preenchidas" />
            </form>
        </div>
    )
}