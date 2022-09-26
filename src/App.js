import React from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import CountrySingle from "./components/CountrySingle";
import CountryList from "./components/CountryList";
import Layout from "./pages/Layout";
import Home from "./components/Home";
import BookmarkPage from "./components/BookmarkPage";

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
          <Route path="bookmarks" element={<BookmarkPage />} />
          </Route>
        </Routes >
    </BrowserRouter>
  );
};

export default App;
