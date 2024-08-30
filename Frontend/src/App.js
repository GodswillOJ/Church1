import React, { useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Scenes/Home';
import About from './Scenes/Home/about';
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
              <Route path='/tutors'  />
              <Route path='/events'  />
              <Route path='/our_faces'  />
              <Route path='/chemistry_class'  />
              <Route path='/school_facilities'  />
              <Route path='/excursions'  />
              <Route path='/courses'  />
              <Route path="/login"  /> 
              <Route path="/contact"  /> 
              <Route path="/registerStudent"  />
              <Route path="/user_verify/:id"  />
            </Route>

          </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
