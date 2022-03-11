import React , {useState , useEffect} from 'react'
import './Style.css'
import { useNavigate } from 'react-router-dom';


function SignIn() {
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const navigate=useNavigate();
useEffect(() => {
  if(localStorage.getItem('user-info')){
    navigate("/home");
  }
},[])
async function login()
{
  console.warn(email,password);
  let item={email,password};

  let result= await fetch("http://localhost:3000/signin",{
    method:'POST',
    headers:{
      "Content-Type": "application/json",
       "Accept": 'application/json'
    },
    body:JSON.stringify(item)
  });
  result =await result.json();
  localStorage.setItem("user-info",JSON.stringify(result));
  navigate("/home");
}

  return (
    <div >
         <div class="user">
    <header class="user__header">
       
        <h1 class="user__title">SIGNIN</h1>
    </header>
    <form class="form">
            <div class="form__group">
            &nbsp;&nbsp;<input type="email" placeholder="Email" class="form__input"
            onChange={(e)=>setEmail(e.target.value)} />
        </div>
        
        <div class="form__group">
        &nbsp;&nbsp;<input type="password" placeholder="Password" 
           class="form__input"
           onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button class="btn btn-success" type="button"
        onClick={login}>SignIn</button>
        <br/>
        <br/>
        
    </form>
</div>
      </div>
  )
}

export default SignIn
