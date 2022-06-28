
import './Css/reset.css';
import './Css/globalStyle.css';
import Login from './Routes/Login';
import SignUp from './Routes/SignUp';
import Home from './Routes/Home';
import Register from './Routes/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}