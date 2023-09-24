import React from 'react'
import logoprojeto from '../../assets/logoprojeto.png'
import './Cadastro.css';

const Cadastro = () => {
  return (
    <div className='Cadcontainer0'>
      <div className='Cadcontainer1'>
          <h1 className='Cadcontainer1h1'>Bem-vindo!</h1>
          <p className='Cadcontainer1p'>Comece criando um perfil e explore a ampla gama e hobbies e eventos.</p>
          <img src={logoprojeto} alt="Logo" className="Logo" />
      </div>
        <div className='Cadcontainer2'>
          <h1 className='Cadcontainer2h1'>Criar conta</h1>
          <p className='Cadcontainer2p'>Registre-se com seu Email</p>
            <input type="text" className='inputCad'/>
          
            <input type="text" className='inputCad'/>
          
          
            <input type="text" className='inputCad'/>
         
          
            <input type="date" className='inputCad'/>
          
          
            <input type="number" className='inputCad'/>
          
          
            <input type="number" className='inputCad'/>
          
          <button className='Cadbutton1'>Cadastre-se</button>
        </div>
    </div>
  )
}

export default Cadastro