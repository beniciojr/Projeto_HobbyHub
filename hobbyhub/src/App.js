import './App.css';
import Menu from './Components/menu';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio/Inicio';

function App() {
  return (
<Router>
      <div className="Container">
      <Menu className="menu_button_header"/>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/inicio" element={<Inicio />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;