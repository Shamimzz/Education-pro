import * as React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";


function App() {
  return (
    <div className="App"> 
      <Routes>
        <Route path="/" element={<Header />}/>
        <Route path="home" element={<Header />}/>
      </Routes>
    </div>
  );
}

export default App;
