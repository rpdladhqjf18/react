import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { Home, About } from './pages';
import Csi from './csi/main';
import Hjt from './hjt/main';
import Hyg from './hyg/main';
import Lhi from './lhi/main';

function App(){
        return (
          
          <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About />}/>
                <Route path="/test" element={<User />}/>
                <Route path="/hjt" element={<Hjt />}/>
                <Route path="/csi" element={<Csi />}/>
                <Route path="/hyg" element={<Hyg />}/>
                <Route path="/lhi" element={<Lhi />}/>
            </Routes>
          </BrowserRouter>
        );
}

function User() {
  return (
    <>
      <Outlet />
    </>
  )
}

export default App;