import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './Nav'
import Note from './Note'
import Footer from './Footer'
import axios from 'axios';
import Signup from './Signup'

function App() {
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [notes,setNotes] = useState([]);
    async function Submit(){
        try{
            const route = "http://localhost:5000/add";
            const data = localStorage.getItem('Talker-APP');
            const value = JSON.parse(data);
            const user_gmail = value.email;
          await axios.post(route,{title : title, description : description, user_gmail : user_gmail});
             setTitle('');
             setDescription('');
        }
        catch(err){
            console.log(err);
        }
        
    }
    useEffect(()=>{
        async function call(){
            const route = "http://localhost:5000/show";
            const data = localStorage.getItem('Talker-APP');
            const value = JSON.parse(data);
            const user_gmail = value.email;
            const res = await axios.post(route,{email:user_gmail});
            setNotes(res.data);
        }
        call();

    },[notes])
    return(
        <>
       
       <Nav/> 
        <div style = {{ marginTop:"20px", display : "flex", flexDirection:"column",alignItems:"center"}}>
       <div ><label> Title : <input  value = {title} style = {{height:"30px",width:"260px",marginBottom:"20px"}} onChange={(e)=>{console.log("changing title"); setTitle(e.target.value)}}/></label></div>
        <div ><label>description : <input value = {description} style = {{height:"150px",width:"300px",overflowX:"auto"}} onChange={(e)=>{console.log("changing description"); setDescription(e.target.value)}}/></label></div>
        <div><button onClick={Submit}>Submit</button></div>
    
       </div>
       <Note notes = {notes}/>
       <Footer />
        </>
    )


}

export default App
