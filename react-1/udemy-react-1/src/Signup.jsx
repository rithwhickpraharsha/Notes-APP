
import { useState,useEffect } from "react";
import dotenv from 'dotenv';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
export default function Signup(){
    const [username,setUsername] = useState('');
    const [Email,setEmail] = useState('');
    const [Password,setPassword] = useState('');
    const navigate = useNavigate();
   
    async function Senddetails(){
      
      try{
       const res = await axios.post('http://localhost:5000/users/signup',{username:username,email:Email,password:Password});
       localStorage.setItem('Talker-APP',JSON.stringify(res.data));
       navigate('/user');
      
      }
      catch(e){
      console.log(e);
    }


      setUsername('');
      setEmail('');
      setPassword('');
    }

    useEffect(()=>{
      const data = localStorage.getItem('Talker-APP');
      if(data){
          navigate('/user');
      }

  },[]);
   
    return(
        <div style ={{backgroundColor:"black",height:"100vh",width:"100vw"}}>
        <div style = {{fontFamily:"cursive",height:"10vh"}}>SignUp</div>
        <div style = {{display:"flex",flexDirection:"column",height:"80vh",width:"50vw",alignItems:"center",justifyContent:"center",backgroundColor:"beige",marginLeft:"400px"}}>
        <div style = {{marginBottom:"80px",fontSize:"50px",fontFamily:"cursive"}}>Signup</div>
        <label style={{fontFamily:"cursive"}}>
        UserName : <input value = {username} style = {{margin:"20px"}} onChange={(e)=>{setUsername(e.target.value)}}/>
        </label>
        <label style={{fontFamily:"cursive"}}>
        Email : <input style = {{margin:"20px"}} value = {Email} onChange={(e)=>{setEmail(e.target.value)}}/>
        </label>
        <label style={{fontFamily:"cursive"}}>
        Password : <input type = "password" style = {{margin:"20px"}}value={Password} onChange={(e)=>{setPassword(e.target.value)}}/>
        </label>
        <button onClick={Senddetails}>submit</button>
        
        <h3 style = {{fontFamily:"cursive"}}>Already had Account  <Link to = "/">Login</Link></h3>
       
        </div>
        </div>
    )
}