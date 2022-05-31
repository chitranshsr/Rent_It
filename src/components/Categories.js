import React, { Component } from 'react'



export default class Categories extends Component {
    render()
    {
  return (
    <>
        <div id="wrapper" style={{ alignItems:"center"}}>
  <h1>Categories</h1>
<div className="toggles">

  <form action="/products">
   <button id="home" >Home</button> 
  <button id="elec"  >Electronics</button>
  <button id="office" >Office</button>
  <button id="gym"  >Fitness/Gym</button>
  </form>
</div>

<br/>
<br/>
    </div>
    </>
  );
}
}
