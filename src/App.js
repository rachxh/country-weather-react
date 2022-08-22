import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CountrySingle from './components/CountrySingle';
import CountryList from './components/CountryList';
import Layout from './pages/Layout';
import Home from './components/Home';


const App = () => {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout/>}/>
    <Route index element={<Home/>} />
    <Route path="countryList"   element={<CountryList/>}/>
    <Route path="countrySingle" element={<CountrySingle/>}/>
  </Routes>
  </BrowserRouter>
  );
};

export default App;