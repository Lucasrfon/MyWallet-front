import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import TokenContext from './Contexts/TokenContext.js';
import TypeContext from './Contexts/TypeContext.js';
import RegisterContext from './Contexts/RegisterContext.js';
import './Components/reset.css';
import './Components/globalStyle.css';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Home from './Pages/Home';
import Register from './Pages/Register';

export default function App() {
  const [token, setToken] = useState("");
  const [type, setType] = useState("");
  const [register, setRegister] = useState({})

  return (
    <BrowserRouter>
      <TokenContext.Provider value={{ token, setToken }}>
      <TypeContext.Provider value={{ type, setType }}>
      <RegisterContext.Provider value={{ register, setRegister }}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Register' element={<Register />} />
        </Routes>
      </RegisterContext.Provider>
      </TypeContext.Provider>
      </TokenContext.Provider>
    </BrowserRouter>
  );
}