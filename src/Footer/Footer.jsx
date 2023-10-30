import React,{useEffect} from "react";
import "./footer.css";
import {GiPlayButton} from "react-icons/gi"
import {BiSolidPlane} from "react-icons/bi"
import {AiOutlineTwitter} from "react-icons/ai"
import {BsFacebook} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"
import {AiFillYoutube} from "react-icons/ai"
import {BiChevronRight} from "react-icons/bi"

import Aos from "aos"
import 'aos/dist/aos.css'


import video3 from "../Assets/video.mp4"


const Footer = () => {

  useEffect(()=>{
    Aos.init({duration:4000})
    
      }, [])


  return (
<section className="footer">
<div className="videoDiv">
<video src={video3} loop autoPlay muted type="video/mp4"></video>
</div>

<div className="secContent container">
<div className="contactDiv flex">
<div className="text">
<small data-aos="fade-up">KEEP IN TOUCH</small>
<h2 data-aos="fade-up">Travel with us</h2>

</div>
<div className="inputDiv flex">
<input type="text" placeholder="Enter Email Address"/>
<button className="btn flex" type="submit">
SEND
<GiPlayButton className="icon"/>
</button>
</div>
</div>

<div className="footerCard flex">
<div className=" footerIntro flex">
<div className="logoDiv">
<a href="/#" className="logo flex">
<BiSolidPlane className="icon"/>Travel.
 </a>
</div>
<div className="footerParagraph">
The specific content of 
a travel ticket may vary depending
 on the mode of transportation 
 (e.g., airline, train, bus) and 
 the booking system used by the 
 travel provider. It's important
  for passengers to review their
   travel ticket carefully and 
   follow any instructions provided 
   to ensure a smooth and hassle-free journey. 
</div>
<div data-aos="fade-up" className="footersocials">
<AiOutlineTwitter className="icon"/>
<BsFacebook className="icon"/>
<BsInstagram className="icon"/>
<AiFillYoutube className="icon"/>

</div>
</div>
<div className="footerLinks grid">
  <div className="linkGroup">
<span data-aos="fade-up" className="groupTitle">
OUR AGENCY
</span>
<li className="footerList">
<BiChevronRight className="icon"/>
Services
</li>
<li className="footerList">
<BiChevronRight className="icon"/>
Insurance
</li>
<li className="footerList">
<BiChevronRight className="icon"/>
Agency
</li>
<li className="footerList">
<BiChevronRight className="icon"/>
Tourism
</li>
<li className="footerList">
<BiChevronRight className="icon"/>
Payment
</li>
  </div>
  
  <div className="linkGroup">
<span data-aos="fade-up" className="groupTitle">
PARTNER
</span>
<li className="footerList">
<BiChevronRight className="icon"/>
Bookings
</li>
<li className="footerList">
<BiChevronRight className="icon"/>
Renters
</li>
<li className="footerList">
<BiChevronRight className="icon"/>
HotelWorld
</li>
<li className="footerList">
<BiChevronRight className="icon"/>
Abuja
</li>
<li className="footerList">
<BiChevronRight className="icon"/>
Lagos
</li>
  </div>

  <div className="linkGroup">
<span data-aos="fade-up" className="groupTitle">
LAST MINUTES
</span>
<li className="footerList">
<BiChevronRight className="icon"/>
Liverpool
</li>
<li className="footerList">
<BiChevronRight className="icon"/>
London
</li>
<li className="footerList">
<BiChevronRight className="icon"/>
Paris
</li>
<li className="footerList">
<BiChevronRight className="icon"/>
Madrid
</li>
<li className="footerList">
<BiChevronRight className="icon"/>
Machester City
</li>
  </div>
<div  data-aos="fade-up"className="footerDiv flex">
<h2> BEST TRAVEL WEBSITE MOTO</h2>
<h2> COPYRIGHTS</h2>
</div>


</div>
</div>
</div>
</section>

  )
  }

export default Footer;
