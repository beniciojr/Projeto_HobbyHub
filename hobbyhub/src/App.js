import './App.css';
import Menu from './Components/menu';
import Login from './pages/Login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
<Router>
      <div className="Container">
      <Menu/>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
