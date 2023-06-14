import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from "./Components/Header"
import Banner from "./Components/Banner"
import Contacts from "./Components/Contacts";
import Footer from "./Components/Footer";
import Icons from "./Components/Icons";
import Category from "./Components/Category";
import Eletronics from "./Components/Eletronics";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header />
    <Banner />

    <Icons />
    
    <Routes>
        <Route path="/" element={<Category/>}/>
        <Route path="/eletronicos" element={<Eletronics />}/>
    </Routes>

    <Contacts />
    <Footer />
  </BrowserRouter>
);

