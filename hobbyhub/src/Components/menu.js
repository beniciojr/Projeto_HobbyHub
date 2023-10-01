import React, { useState } from 'react';
import {Link} from "react-router-dom";
import "./menu.css";

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`sidebar ${menuOpen ? "active" : ""}`}>
      <button className={`menu_button ${menuOpen ? "active" : "inactive"}`} onClick={toggleMenu}>
        <div className="lines_btn_menu right"></div>
        <div className="lines_btn_menu left"></div>
        <div id="btn_menu_text">MENU</div>
      </button>
      {menuOpen && (
        <ul className='menu_ul'>
          <li className='Inicio'><Link to="/">Início</Link></li>
          <li className='Cadastro'><Link to="Cadastro">Cadastro</Link></li>
        </ul>
      )}
    </div>
  );
}

export default Menu;
