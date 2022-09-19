import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CountryList from './CountryList';

const Home = () => {
    return (
        <div>
          <Header/>
          <h2> Countries API is a simple React application made in BCH lessons. App used
      Rest Countries API and Open Weather API</h2>
          <Footer/>

        </div>
    );
};

export default Home;