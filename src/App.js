import React from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import CountrySingle from "./components/CountrySingle";
import CountryList from "./components/CountryList";
import Layout from "./pages/Layout";
import Home from "./components/Home";
import FavoritePage from "./components/FavoritePage";

const App = () => {
  const CountryWrapper = (props) => {
    const params = useParams();
    return <CountrySingle params={params} {...props} />;
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index  element={<Home />} />
          <Route path="countries" element={<CountryList />} />
          <Route path="countries/:country" element={<CountryWrapper />} />
          <Route path="favorites" element={<FavoritePage />} />
          </Route>
        </Routes >
    </BrowserRouter>
  );
};

export default App;
