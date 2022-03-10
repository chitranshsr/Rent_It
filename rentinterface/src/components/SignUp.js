import React from 'react'

function SignUp() {
  return (
    <div><div class="user">
    <header class="user__header">
        
        <h1 class="user__title">SIGNUP</h1>
    </header>
    
    <form class="form">
        <div class="form__group">
        &nbsp;&nbsp;<input type="text" placeholder="Username" class="form__input" />
        </div>
        
        <div class="form__group">
        &nbsp; <input type="email" placeholder="Email" class="form__input" />
        </div>
        
        <div class="form__group">
        &nbsp;  <input type="password" placeholder="Password" class="form__input" />
        </div>
        <div class="form__group">
        &nbsp;  <input type="password" placeholder=" Confirm Password" class="form__input" />
        </div>
        <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class="btn btn-primary" type="button">Register</button>
        <br/>
        <br/>
    </form>
</div></div>
  )
}

export default SignUp