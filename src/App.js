import React from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import CountrySingle from "./components/CountrySingle";
import CountryList from "./components/CountryList";
import Layout from "./pages/Layout";
import Home from "./components/Home";
import Favlist from "./components/Favlist";

const App = () => {
  const CountryWrapper = (props) => {
    const params = useParams();
    return <CountrySingle params={params} {...props} />;
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="countryList" element={<CountryList />} />
        <Route path="countries/:country" element={<CountryWrapper />} />
        <Route path="FavList" element={<Favlist />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
