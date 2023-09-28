import React from 'react'; 
import './Login.css'; 
import logoprojeto from '../../assets/logoprojeto.png'; 

const Login = () => { 
  return (
    <div className='main_login'> {/* Inicia um container principal com classe 'container0' */}
      <div className='left_login'> {/* Inicia um subcontainer com classe 'left_login' */}
        <div className='card_left'>
          <h2>Bem-vindo!</h2> {/* Título "Bem-vindo!" com classe 'h2' */}
          <img src={logoprojeto} alt="Logo" /> {/* Imagem do logotipo com classe 'Logo' */}
        </div>
      </div>
      <div className='right_login'> {/* Inicia outro subcontainer com classe 'container2' */}
        <div className='card_right'>
          <h1>Login</h1> {/* Título "Login" com classe 'h1' */}
          
          <label htmlFor="emailCpf">Email ou CPF</label> 
          <input id="emailCpf" className='login_input' type="text" /> 
          
          <label htmlFor="senha">Senha</label> 
          <input id="senha" className='login_input' type="password" /> 
          
          <a href="" >Esqueceu a senha?</a> {/* Link "Esqueceu a senha?" */}
          <br></br>
          <br></br>
          <div className='button'>
            <button className='btn_login'>Login</button> {/* Botão de login */}
            <br></br>
            <button className='btn_login'>Criar nova conta</button> {/* Botão "Criar nova conta" */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login; 
