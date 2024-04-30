import React from 'react';
import './App.css'

function Home () {
    return(
        <div className='titulo'>
            <h1>Bem-vindo á página inicial da nossa AV2 </h1>
            <br />
            <h3>Conheça os melhores Cosplays do SESI/SENAI.</h3>
        </div>

            <div className='fotos'>
                <img className ="FOTO1" src={require("../assets/FOTO1.jpg")} width={386}/>
            </div>
        </div>
    )
}

export default Home;
