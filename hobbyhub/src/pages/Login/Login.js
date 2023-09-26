import React from 'react'; 
import './Login.css'; 
import logoprojeto from '../../assets/logoprojeto.png'; 

const Login = () => { 
  return (
    <div className='container0'> {/* Inicia um container principal com classe 'container0' */}
      <div className='container1'> {/* Inicia um subcontainer com classe 'container1' */}
        <div className='Logo_h2'>
          <h2 className='h2'>Bem-vindo!</h2> {/* Título "Bem-vindo!" com classe 'h2' */}
          <img src={logoprojeto} alt="Logo" className="Logo" /> {/* Imagem do logotipo com classe 'Logo' */}
        </div>
      </div>
      <div className='container2'> {/* Inicia outro subcontainer com classe 'container2' */}
        <div className='conteudoC2'>
          <h1 className='h1'>Login</h1> {/* Título "Login" com classe 'h1' */}
          
          <label htmlFor="emailCpf" className='p'>Email ou CPF</label> 
          <input id="emailCpf" className='input' type="text" /> 
          
          <label htmlFor="senha" className='p'>Senha</label> 
          <input id="senha" className='input' type="password" /> 
          
          <a href="" className='Esqueceu'>Esqueceu a senha?</a> {/* Link "Esqueceu a senha?" */}
          <br></br>
          <br></br>
          <div className='button'>
            <button className='button1'>Login</button> {/* Botão de login */}
            <br></br>
            <button className='button1'>Criar nova conta</button> {/* Botão "Criar nova conta" */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login; 
