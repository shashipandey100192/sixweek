import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./style.css";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Myloginpage from './modules/auth/Myloginpage';
import Myregistorpage from './modules/auth/Myregistorpage';
import Myerrorpage from './modules/shares/Myerrorpage';
import Mylandingpage from './modules/dashboard/Mylandingpage';
import Myhomepage from './modules/dashboard/Myhomepage';
import Myaboutpage from './modules/components/Myaboutpage';
import Mystatepage from './modules/components/Mystatepage';
import Mainpage from './modules/components/Mainpage';
import Myfetchdatapage from './modules/components/Myfetchdatapage';
import Myaxiosdatapage from './modules/components/Myaxiosdatapage';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Myloginpage/>}></Route>
        <Route path='registor' element={<Myregistorpage/>}></Route>
        <Route path='dashboard' element={<Mylandingpage/>}>
            <Route path='' element={<Myhomepage/>}></Route>
            <Route path='about' element={<Myaboutpage/>}></Route>
            <Route path='state' element={<Mystatepage/>}></Route>
            <Route path='props' element={<Mainpage/>}></Route>
            <Route path='fetchpage' element={<Myfetchdatapage/>}></Route>
            <Route path='axiospage' element={<Myaxiosdatapage/>}></Route>
            
            <Route path='*' element={<Myerrorpage/>}></Route>
        </Route>
        <Route path='*' element={<Myerrorpage/>}></Route>
        
      </Routes>
    </BrowserRouter>
  
  </React.StrictMode>
);


