import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CountryList from './CountryList';

const Home = () => {
    return (
        <div>
          <Header/>
          <CountryList/>
          <Footer/>

        </div>
    );
};

export default Home;