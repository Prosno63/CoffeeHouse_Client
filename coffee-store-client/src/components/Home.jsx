import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Banner from './Banner';
import Question from './Question';
import Shop from './Shop';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>

            <Banner></Banner>
            <Shop></Shop>
            <Question></Question>

            <Footer></Footer>
            
        </div>
    );
};

export default Home;