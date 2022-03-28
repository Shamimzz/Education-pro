import React from 'react';
import AboutVarsity from '../AboutVarsity/AboutVarsity';
import AdmissionAid from '../AdmissionAid/AdmissionAid';
import Graduate from '../Graduate/Graduate';
import Header from '../Header/Header';
import HowToApply from '../HowToApply/HowToApply';
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
        </div>
    );
};

export default Home;