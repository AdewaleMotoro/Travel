import React,{useEffect} from "react";
import "./home.css";
import video from "../Assets/video.mp4"
import {ImLocation2} from "react-icons/im"
import {BiFilterAlt} from "react-icons/bi"
import {TfiFacebook} from "react-icons/tfi"
import {FaTripadvisor} from "react-icons/fa"
import {BsInstagram} from "react-icons/bs"
import {BsReverseListColumnsReverse} from "react-icons/bs"
import {TbAppsFilled} from "react-icons/tb"

import Aos from "aos"
import 'aos/dist/aos.css'




const Home = () => {

  useEffect(()=>{
Aos.init({duration:2000})

  }, [])

  return (

    <section className="home">
    <div className="overlay"></div>
    <video src={video} muted autoPlay loop type="video/mp4"></video>

<div className="homeContent container">
<div className="textDiv">
<span data-aos="fade-left" className="smallText">
Our Packages
</span>
<h1 data-aos="fade-up" className="homeTitle">
Search your Holiday
</h1>

</div>

<div  data-aos="fade-up" className="cardDiv grid">
<div className="destionationInput">
<label htmlFor="city"> Search your destionation:</label>
<div className="input flex">
<input type="text" placeholder="Enter name here....."/>
<ImLocation2 className="icon"/>
</div>
</div>

<div className="dateInput">
<label htmlFor="date"> Select your date:</label>
<div className="input flex">
<input type="date" />

</div>
</div>

<div className="priceInput">
<div className="label_total flex">
  <label htmlFor="price">Max price:</label>
<h3 className="total">$5000</h3>

</div>
<div className="input flex">
<input type="range" max={5000} min={1000}/>

</div>
</div>
<div className="searchOptionsContainer">
<div className="searchOptions flex">
<BiFilterAlt className="icon"/>
<span> MORE FILTERS</span>
</div>
</div>
</div>

<div data-aos="fade-up" className="homeFooterIcons flex">
<div className="rightIcons">
<TfiFacebook className="icon"/>
<BsInstagram className="icon"/>
<FaTripadvisor className="icon"/>
</div>
<div className="leftIcons">
<BsReverseListColumnsReverse className="icon"/>
<TbAppsFilled className="icon"/>

</div>
</div>
</div> 

    </section>
  )
  
};

export default Home;
