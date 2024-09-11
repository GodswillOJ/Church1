import React, { useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Scenes/Home';
import About from './Scenes/Home/about/about_us';
import Mission from './Scenes/Home/about/mission';
import Vision from './Scenes/Home/about/vision';
import Hope from './Scenes/Home/about/hope';
import Layout from "./Scenes/Layouts/index"; // for admin
import '../src/App.css'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
          <Routes>

            {/* Home_Layouts */}
            <Route element={<Layout/>}>
              <Route path='/' element={<Home />} />
              <Route path='/about/our-mission'  element={<Mission />}/>
              <Route path='/about/our-vision'  element={<Vision />}/>
            </Route>

          </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
