
import {BrowserRouter as Router, Routes, Route, BrowserRouter, Navigate} from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import App from "./App";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Head(){
  

    return(
        <>
        <Router>
           <Routes>
            <Route exact path="/" element = {<Login />} />
            <Route exact path= "/signup" element = {<Signup />} />
            <Route exact path = "/user" element = {<App />} />
           </Routes>
        
        </Router>
        
        </>
    )




}