import React from "react";
import Home from "../src/Home/Home";
import Navbar from "../src/Navbar/Navbar";
import Footer from "../src/Footer/Footer";
import Main from "../src/Main/Main";
import "../src/app.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home/>
    <Main/>
     <Footer/>
    
    </div>
  );
};

export default App;
