import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from "./Components/Header"
import Banner from "./Components/Banner"
import Contacts from "./Components/Contacts";
import Footer from "./Components/Footer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header />
    <Banner />


    <Contacts />
    <Footer />
  </BrowserRouter>
);

