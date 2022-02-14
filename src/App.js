import * as React from 'react';
import Login from "./view/Login";
import Home from "./view/Home";
import KebersihanEnamBulan from "./view/KebersihanEnamBulan";
import KebersihanDuaBulan from "./view/KebersihanDuaBulan";
import TigaBulan from "./view/TigaBulan";
import DuaMinggu from "./view/DuaMinggu";
import SatuBulan from "./view/SatuBulan";
import Apar from "./view/Apar";
import PAM from "./view/PAM";

import Energy from "./view/Energy";
import AHU from "./view/AHU";
import Requester from "./view/Requester";
import AC from "./view/AC";
import { Routes, Route } from "react-router-dom";



function App() {
  return (

    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="energy" element={<Energy />} />
          <Route path="/kebersihan/6/bulan" element={<KebersihanEnamBulan />} />
          <Route path="/kebersihan/2/bulan" element={<KebersihanDuaBulan />} />
          <Route path="/3/bulan" element={<TigaBulan />} />
          <Route path="/2/minggu" element={<DuaMinggu />} />
          <Route path="/2/minggu" element={<DuaMinggu />} />
          <Route path="/apar" element={<Apar />} />
          <Route path="/pam" element={<PAM />} />
          <Route path="/requester" element={<Requester />} />
          
          
          <Route path="ahu" element={<AHU />} />
          <Route path="ac" element={<AC />} />
    </Routes>

  


  );
}


export default App;
