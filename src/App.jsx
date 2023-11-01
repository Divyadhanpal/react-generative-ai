import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Allchat from './pages/Allchat.jsx';


const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Allchat" element={<Allchat />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;