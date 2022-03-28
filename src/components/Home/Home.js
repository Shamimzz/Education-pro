import React from 'react';
import AboutVarsity from '../AboutVarsity/AboutVarsity';
import AdmissionAid from '../AdmissionAid/AdmissionAid';
import Graduate from '../Graduate/Graduate';
import Header from '../Header/Header';
import HowToApply from '../HowToApply/HowToApply';
import NewsEvents from '../NewsEvents/NewsEvents';
import TuitionFees from '../TuitionFees/TuitionFees';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <AboutVarsity></AboutVarsity>
            <Graduate/>
            <AdmissionAid/>
            <HowToApply/>
            <TuitionFees/>
            <NewsEvents/>
        </div>
    );
};

export default Home;