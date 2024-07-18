import React from 'react';
import ReactDOM from 'react-dom/client';
import Xa ,{Mypage1,Mypage2}from './Page';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Xa></Xa>
    <Mypage1></Mypage1>
    <Mypage2></Mypage2>
   
  </React.StrictMode>
);


