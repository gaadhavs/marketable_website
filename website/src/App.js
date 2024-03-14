import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import  Login from './pages/Login'
import  Register from './pages/Register'
import Home from "./home/Home";
import Display from "./home/Display";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div><Home /><Display /></div>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
