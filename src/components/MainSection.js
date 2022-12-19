import React, { useEffect, useState } from 'react'
import Card from './Card';



export default function MainSection() {

  const[info,setInfo] = useState([]);
  const[city,setCity] = useState('noida')



  const fetchData =async() =>{
    const data = await fetch(`https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231&city=${city}`);
    const apiInfo = await data.json();
   console.log(apiInfo);
    setInfo(apiInfo.data);

  }
const cityChange = (event)=>{
  setCity(event.target.value);
 //console.log(event.target.value)
}
  useEffect(()=>{
    fetchData();
  },[city])
  
  return (
    <div id='main-section'>

      <div id='search-bar-container'>

        <div id='search-component'>
      
          <input id='search-bar' type='text' placeholder='Search Gym Name Here' />

          <div id='buttons'>
            <button id='map'><i class="fa fa-map-marker fa-lg" aria-hidden="true"></i></button>
            <button id='clear'>Clear</button>
          </div>

        </div>


      </div>

      <div id='filter-and-content'>

        <div id='filter'>
          <h1>Filters</h1>
          <h4>Location</h4>
          <input id='location' className='filter-input grey-bg' type='text' placeholder='Enter Loaction' />

          <h4>Price</h4>
          <input id='min' type='text' className='filter-input grey-bg' placeholder='min' />
          <input id='max' type='text' className='filter-input grey-bg' placeholder='max' />

          <h4>Cities</h4>
          <select className='grey-bg' onChange={cityChange}>
            <option value='noida'>Select City</option>
            <option value="ghaziabad">Ghaziabad</option>
            <option value="new-delhi">New Delhi</option>
            <option value="delhi">Delhi</option>
            <option value="noida">Noida</option>
          </select>

        </div>

        <div id='content'>
          
           
           {
            info == undefined ? <h1>Failed to load data</h1> :
              info.map((ele)=>{
                return(
               <Card name={ele.gym_name} address1={ele.address1} address2={ele.address2} km={ele.distance_text} time={ele.duration_text}/>)
              })
             //console.log(info)
            }
          


          </div>

      </div>

    </div>
  )
}
