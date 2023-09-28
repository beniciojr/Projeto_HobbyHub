import React from 'react'; 
import logoprojeto from '../../assets/logoprojeto.png'; 
import './Cadastro.css'; 

const Cadastro = () => { 
  return (
    <div className='main_cadastro'> {/* Inicia um container principal com classe 'Cadcontainer0' */}
      <div className='left_cadastro'> {/* Inicia um subcontainer com classe 'Cadcontainer1' */}
        <h1>Bem-vindo!</h1> {/* Título com classe 'Cadcontainer1h1' */}
        <p>Comece criando um perfil e explore a ampla gama de hobbies e eventos.</p> {/* Parágrafo com classe 'Cadcontainer1p' */}
        <img src={logoprojeto} alt="Logo" className="Logo" /> {/* Imagem do logotipo com classe 'Logo' */}
      </div>
      <div className='right_cadastro'> {/* Inicia outro subcontainer com classe 'Cadcontainer2' */}
        <div className='card_cadastro'>
          <h1>Criar conta</h1> {/* Título com classe 'Cadcontainer2h1' */}
          <p>Registre-se com seu Email</p> {/* Parágrafo com classe 'Cadcontainer2p' */}

          <label>
            <input type="email" className='input_cad' placeholder='Digite seu Email' />
          </label>

          <label>
            <input type="text" className='input_cad' placeholder='Digite seu nome completo' />
          </label>

          <label>
            <input type="text" className='input_cad' placeholder='Nome de usuário' />
          </label>

          <label>
            <input type="date" className='input_cad' placeholder='Selecione a Data de Nascimento' />
          </label>

          <label>
            <input type="text" className='input_cad' placeholder='Digite seu CPF' />
          </label>

          <label>
            <input type="password" className='input_cad' placeholder='Digite sua Senha' />
          </label>

          <button className='btn_cad'>Cadastre-se</button> {/* Botão de cadastro com classe 'Cadbutton1' */}
        </div>
      </div>
    </div>
  )
}

export default Cadastro; 