import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import  Login from './pages/Login'
import  Register from './pages/Register'
import Home from "./home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
