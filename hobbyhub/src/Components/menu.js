import React, { useState } from 'react';
import {Link} from "react-router-dom";
import menu from "../Components/menu.css";

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='menu_container'>
      <button className='menu_button' onClick={toggleMenu}>Menu</button>
      {menuOpen && (
        <ul className='menu_ul'>
          <li className='Login'><Link to="Login">Login</Link></li>
          <li className='Cadastro'><Link to="Cadastro">Cadastro</Link></li>
        </ul>
      )}
    </div>
  );
}

export default Menu;
