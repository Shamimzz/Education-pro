import React from 'react';
import AboutVarsity from '../AboutVarsity/AboutVarsity';
import Graduate from '../Graduate/Graduate';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <AboutVarsity></AboutVarsity>
              <Graduate/>
        </div>
    );
};

export default Home;