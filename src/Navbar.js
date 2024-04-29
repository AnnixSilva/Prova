import React from 'react'
import './App.css'

function Navbar() {
    return(
      <nav className='Nav'>
        <ul>
            <li>
              <a href='/loja' className='link'> <h2>ome</h2></a>
            </li>
            <li> 
              <a href='/contato' className='link'> <h2>Contato</h2></a>        
            </li>
            <li>
              <a href='/sobre' className='link'> <h2>Quem Somos</h2></a>
            </li>
          </ul>
        </nav>
    )
}
export default Navbar;