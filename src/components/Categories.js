import React, { Component } from 'react'
// import homepage from '../categories/Homecomp'
// import electronics from '../categories/electronics'
// import office from '../categories/office'
// import fitness from '../categories/Fitness'



export default class Categories extends Component {
    render()
    {
  return (
    <>
        <div id="wrapper" style={{ alignItems:"center"}}>
  <h1>Categories</h1>
<div className="toggles">
   <button id="home">Home</button> 
  <button id="elec" >Electronics</button>
  <button id="office" >Office</button>
  <button id="gym" >Fitness/Gym</button>
  
</div>

<br/>
<br/>
    </div>
    </>
  );
}
}
