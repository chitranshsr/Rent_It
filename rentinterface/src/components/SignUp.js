import React,{useState} from 'react'
import axios from 'axios';
function SignUp() {

const [name,setName]=useState("");
const [password,setPassword]=useState("");
const [email,setEmail]=useState("");


function signup()
{
const data={
  username:`${name}`,
  email:`${email}`,
  password:`${password}`

};
axios.post("http://localhost:8080/signup",data)
.then(
  response=>{console.log(response)}
)
.catch(
  err=>{console.log(err)}
)

}





  return (
    <div><div className="user">
    <header className="user__header">
        
        <h1 className="user__title">SIGNUP</h1>
    </header>
    
    <form className="form" >
        <div className="form__group">
        &nbsp;&nbsp;<input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Username" className="form__input" />
        </div>
        
        <div className="form__group">
        &nbsp; <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" className="form__input" />
        </div>
        
        <div className="form__group">
        &nbsp;  <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" className="form__input" />
        </div>
  
        <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button className="btn btn-primary" onClick={signup} type="button">Register</button>
        <br/>
        <br/>
    </form>
</div></div>
  )
}

export default SignUp