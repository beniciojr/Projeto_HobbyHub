import React, { useState } from 'react';
import {Link} from "react-router-dom";

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='container'>
      <button className='button' onClick={toggleMenu}>Menu</button>
      {menuOpen && (
        <ul>
          <li className='Login'><Link to="Login">Login</Link></li>
        </ul>
      )}
    </div>
  );
}

export default Menu;
