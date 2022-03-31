import React from 'react';
import './TuitionFees.css';
import { AiOutlineArrowRight } from 'react-icons/ai';

const TuitionFees = () => {
    return (
    <div className="Tuition-container">
     <div className="container mt-4 pt-5 pb-5">
            <h2 className="m-auto mb-5 tuition-header">Tuition & Fees</h2>
         <div className="columns">
          <div className="first-col p-5">
          <div className="price-header mb-5">
              <h5>Tuition Costs,</h5>
               <h5>2020-2022</h5>
            </div>
            <div className="mb-5">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sint ipsum distinctio asperiores laboriosam eaquenam natuilloea fugit?</p>
            </div>
            <span className="d-flex align-items-start"><AiOutlineArrowRight style={{fontSize: '30px'}}/></span>
          </div>
         </div>

         <div className="columns">  
          <div className="second-col p-4">
          <div className="price-header">
           <h5>Tuition Costs,</h5>
            <h5>2020-2022</h5>
         </div>
          <ul className="price d-flex justify-content">
            <ul className="align">
              <li className="fess-li">Fall 2020</li>
              <li className="fess-li">Spring 2021</li>
              <li className="fess-li">Summer 2021</li>
              <li className="fess-li">Fall 2022</li>
              <li className="mt-2 total-li fess-li">TOTAL</li>
            </ul>
            <div>
              <li className="fess-li">Price</li>
              <li className="fess-li">10GB </li>
              <li className="fess-li">10 </li>
              <li className="fess-li">10 </li>
              <li className="mt-2 total-li fess-li">$75.00</li>
              </div>
            </ul>
          </div>
        </div>

        <div className="columns">  
          <div className="third-col p-4">
          <div className="price-header">
           <h5 >Tuition Costs,</h5>
            <h5>2020-2022</h5>
         </div>
           <ul className="price d-flex justify-content">
            <ul className="align">
              <li className="fess-li">Fall 2020</li>
              <li className="fess-li">Spring 2021</li>
              <li className="fess-li">Summer 2021</li>
              <li className="fess-li">Fall 2022</li>
              <li className="mt-2 total-li fess-li">TOTAL</li>
            </ul>
            <div>
              <li className="fess-li">Price</li>
              <li className="fess-li">10GB </li>
              <li className="fess-li">10 </li>
              <li className="fess-li">10 </li>
              <li className="mt-2 total-li fess-li">$75.00</li>
              </div>
            </ul>
          </div>
        </div>
      
     </div>
    </div>
    );
};

export default TuitionFees;