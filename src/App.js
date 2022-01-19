import * as React from 'react';
import Login from "./view/Login";
import Home from "./view/Home";
import Energy from "./view/Energy";
import AHU from "./view/AHU";
import AC from "./view/AC";
import { Routes, Route } from "react-router-dom";



function App() {
  return (

    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="energy" element={<Energy />} />
          <Route path="ahu" element={<AHU />} />
          <Route path="ac" element={<AC />} />
    </Routes>

  


  );
}


export default App;
