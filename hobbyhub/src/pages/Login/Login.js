import React from 'react';
import './Login.css';
import logoprojeto from '../../assets/logoprojeto.png'

const Login = () => {
  return (
    <div className='container0'>
    <div className='container1'>
      <div className='Logo_h2'>
      <h2 className='h2'>Bem-vindo!</h2>
      <img src={logoprojeto} alt="Logo" className="Logo" />
      </div>
     </div> 
      <div className='container2'>
        <div className='conteudoC2'>
        <h1 className='h1'>Login</h1>
        <p className='p'>Email ou CPF</p>
        <input className='input' type="text"/>
        <p className='p'>Senha</p>
        <input className='input' type="password" />
        <a href="" className='Esqueceu'>Esqueceu a senha?</a>
        <br></br>
        <br></br>
        <div className='button'>
        <button className='button1'>Login</button>
        <br></br>
        <button className='button1'>Criar nova conta</button>
        </div>
        </div>
      </div>
      </div>
  )
}

export default Login