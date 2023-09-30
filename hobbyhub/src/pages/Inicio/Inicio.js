import React from 'react'
import Logo from '../../assets/Logo.png'; 
import bike from '../../assets/bike.jpeg'
import Dançando from '../../assets/Dançando.jpg'
import Música from '../../assets/Música.jpg'
import './Inicio.css'
import Footer from '../../Components/footer';

const Inicio = () => {
  return (
    <div className='main_inicio'>
        <div className='main_content'>
            <div className='container_logo'>
                <img src={Logo} alt="Logo" />
            </div>
            <div className='container_p1'>
                <p>Você já imaginou encontrar pessoas apaixonadas pelos mesmos hobbies que você? Apresentamos o HobbyHub, a plataforma revolucionária que conecta pessoas com interesses semelhantes e as ajuda a explorar juntas o emocionante mundo dos hobbies.</p>
            </div>
        </div>
        <div className='section1'>
            <h1>O que é HobbyHub?</h1>
            <img src={bike} alt="bike" />
            <div className='text_overp1'>
                <p>O HobbyHub é uma comunidade dinâmica de entusiastas de hobbies de todas as partes do mundo. Nosso objetivo é tornar mais fácil do que nunca encontrar, conhecer e interagir com pessoas que compartilham suas paixões e interesses.</p>
            </div>
        </div>
        <div className='section2'>
            <h1>O que nos torna especial?</h1>
            <img src={Dançando} alt="Dançando" />
            <div className='text_overp2'>
                <p>O HobbyHub oferece uma ampla variedade de hobbies e permite que os usuários encontrem eventos e grupos locais relacionados aos seus interesses, promovendo amizades e oportunidades de participação em atividades que amam.</p>
            </div>
        </div>
        <div className='section3'>
            <h1>Como Funciona?</h1>
            <img src={Música} alt="Música" />
            <div className='text_overp3'>
                <p>Explore Hobbies: Explore uma ampla gama de hobbies e encontre aqueles que mais lhe interessam.
                Eventos e Grupos: Explore eventos locais e grupos específicos de hobby para atividades presenciais ou online.</p>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Inicio