import React, { useState, useEffect } from 'react';

function CallApi() {
    var [numeroFornecedor, setNumeroFornecedor] = useState(0)
    var [data, setData] = useState([]);

    const getData=()=>{
        fetch('http://localhost:5000/v2/listar'
        )
        .then(function(response){
            console.log(response)
            
            setNumeroFornecedor(response.length)
            setData(response);
        })
        .then(function(response) {
            console.log('2')
            setData(response)
        });
      }

      return (
        <div className="CallApi">
            <div style={{backgroundColor:'green'}} className="display-board">
                <h4 style={{color: 'white'}}>Criar Fornecedor</h4>
                <div className="number">
                    {numeroFornecedor}
                </div>
                <div className="btn">
                    <button type="button" onClick={(e) => getData()} className="btn btn-warning">Fornecedores</button>
                </div>
            </div>
        </div>
    );
}

export default CallApi;