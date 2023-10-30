import React, {useEffect} from "react";
import "./main.css";


import {ImLocation} from 'react-icons/im';
import {TbZodiacLibra} from 'react-icons/tb'

import  img from "../Assets/img(1).jpg"
import  img2 from "../Assets/img(2).jpg"
import  img3 from "../Assets/img(3).jpg"
import  img4 from "../Assets/img(4).jpg"

import Aos from "aos"
import 'aos/dist/aos.css'


const Data =[
  {
  id:1,
  imgScr: img,
  destTitle: 'Bora Bora',
  location: 'New Zealand',
  grade: 'Cultural Relax',
  fees: '$700',
  description: ' The epitome of romance , Bors Bora is one of the best travel destinations in the world.'
  },

  {
    id:2,
  imgScr: img2,
  desTitle: 'Bali Island',
  location: 'Indonesia',
  grade: 'Cultural Relax',
  fees: '$500', 
  description: ' The epitome of romance , Bors Bora is one of the best travel destinations in the world.'
  },
  
  {

  id:3,
  imgScr: img3,
  desTitle: 'Toho Togo',
  location: 'Nigeria',
  grade: 'Cultural Relax',
  fees: '$300',
  description: ' The epitome of romance , Bors Bora is one of the best travel destinations in the world.'
  
  },
  
{
  id:4,
  imgScr: img4,
  desTitle: 'Ghana ',
  location: 'Usa',
  grade: 'Cultural Relax',
  fees: '$400',
  description: ' The epitome of romance , Bors Bora is one of the best travel destinations in the world.'
  
  },
/*
  {
    id:5,
    imgScr: img5,
    desTitle: 'Kenya',
    location: 'Mota',
    grade: 'Cultural Relax',
    fees: '$900',
    description: ' The epitome of romance , Bors Bora is one of the best travel destinations in the world.'
    
    },

    {
      id:6,
      imgScr: img6,
      desTitle: 'brazil',
      location: 'Lagos',
      grade: 'Cultural Relax',
      fees: '$10000',
      description: ' The epitome of romance , Bors Bora is one of the best travel destinations in the world.'
      
      },
*/
  ];





const Main = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
    
      }, [])


  return (
<section className="main container section">
<div className="secTitle">
<h3  data-aos="fade-up"className="title">
  Most visited destionations
</h3>

</div>
<div className="secConent grid">
{ Data.map((item)=>{
const { id, imgScr, destTitle,location, grade,fees,description} =item;
return (

  <div key={id} className="singleDestination">
  <img src={imgScr} alt={destTitle} />

<div className="cardInfo">
  <h4 className="desTitle">{destTitle}</h4>
  <span className="continent flex">
  <ImLocation className="icon"/> 
  <span className="name">{location}</span>
  </span>
  </div>

<div className="fees flex">
<div className="grade">
<span>{grade}<small>+1</small></span>
</div>
<div className="price"></div>
<h5>{fees}</h5>
</div>
 
 <div className="desc">
<p>{description}</p>
</div>

<button className="btn flex">
DETAILS<TbZodiacLibra className="icon"/>

</button>



  </div>
)

})
}
</div>



</section>


  )
};

export default Main;
