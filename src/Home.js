import React from 'react';
import './App.css'

function Home () {
    return(
        <div className='titulo'>
            <h1>Bem-vindo á página inicial da nossa AV2 </h1>
            <h3>Conheça os melhores Cosplays do SESI/SENAI.</h3>

            <div className='fotos'>
                <img src={require('.foto1.png')} alt="Descrição da imagem" />
            </div>
        </div>
    )
}

export default Home;