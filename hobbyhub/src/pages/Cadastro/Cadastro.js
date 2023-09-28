import React from 'react'; 
import logoprojeto from '../../assets/logoprojeto.png'; 
import './Cadastro.css'; 

const Cadastro = () => { 
  return (
    <div className='Cadcontainer0'> {/* Inicia um container principal com classe 'Cadcontainer0' */}
      <div className='Cadcontainer1'> {/* Inicia um subcontainer com classe 'Cadcontainer1' */}
        <h1 className='Cadcontainer1h1'>Bem-vindo!</h1> {/* Título com classe 'Cadcontainer1h1' */}
        <p className='Cadcontainer1p'>Comece criando um perfil e explore a ampla gama de hobbies e eventos.</p> {/* Parágrafo com classe 'Cadcontainer1p' */}
        <img src={logoprojeto} alt="Logo" className="Logo" /> {/* Imagem do logotipo com classe 'Logo' */}
      </div>
      <div className='Cadcontainer2'> {/* Inicia outro subcontainer com classe 'Cadcontainer2' */}
        <h1 className='Cadcontainer2h1'>Criar conta</h1> {/* Título com classe 'Cadcontainer2h1' */}
        <p className='Cadcontainer2p'>Registre-se com seu Email</p> {/* Parágrafo com classe 'Cadcontainer2p' */}

        <label>
          <input type="email" className='inputCad' placeholder='Digite seu Email' />
        </label>

        <label>
          <input type="text" className='inputCad' placeholder='Digite seu nome completo' />
        </label>

        <label>
          <input type="text" className='inputCad' placeholder='Nome de usuário' />
        </label>

        <label>
          <input type="date" className='inputCad' placeholder='Selecione a Data de Nascimento' />
        </label>

        <label>
          <input type="text" className='inputCad' placeholder='Digite seu CPF' />
        </label>

        <label>
          <input type="password" className='inputCad' placeholder='Digite sua Senha' />
        </label>

        <button className='Cadbutton1'>Cadastre-se</button> {/* Botão de cadastro com classe 'Cadbutton1' */}
      </div>
    </div>
  )
}

export default Cadastro; 