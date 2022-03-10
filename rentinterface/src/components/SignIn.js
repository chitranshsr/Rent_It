import React from 'react'
import './Style.css'

function SignIn() {
  return (
    <div >
         <div class="user">
    <header class="user__header">
       
        <h1 class="user__title">SIGNIN</h1>
    </header>
    <form class="form">
            <div class="form__group">
            &nbsp;&nbsp;<input type="email" placeholder="Email" class="form__input" />
        </div>
        
        <div class="form__group">
        &nbsp;&nbsp;<input type="password" placeholder="Password" class="form__input" />
        </div>
        <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button class="btn btn-success" type="button">SignIn</button>
        <br/>
        <br/>
        
    </form>
</div>
      </div>
  )
}

export default SignIn