import { useState } from 'react'
import './App.css';
import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Nav from './core/Nav';
import GalleryDetail from './pages/GalleryDetail';

function App() {
  

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/gallery" element={<Gallery />} ></Route>
        <Route path="/gallery/:id" element={<GalleryDetail />} ></Route>
      </Routes>
      
  
    </>
  )
}

export default App;
