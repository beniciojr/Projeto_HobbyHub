import React, { useState } from 'react';
import {Link} from "react-router-dom";

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <button onClick={toggleMenu}>Menu</button>
      {menuOpen && (
        <ul>
          <li><Link to="Login">Login</Link></li>
        </ul>
      )}
    </div>
  );
}

export default Menu;
