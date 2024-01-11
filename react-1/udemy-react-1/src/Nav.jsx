import { useNavigate } from "react-router-dom";

export default function Nav(){
    const navigate = useNavigate();
function Checkout(){
    localStorage.removeItem('Talker-APP');
    navigate('/');
    
}
    return( <>
    <header>
        <div style = {{fontFamily : 'sans-serif',backgroundColor:"#db9833",height:"10vh",width:"100vw",display:'flex',alignItems: 'center',justifyContent:'center'}}>
            <h1 style = {{display:'flex',justifyContent:'center',fontSize:"50px",fontFamily:'cursive'}}>Note</h1>
        </div>
        <div style ={{display:"flex",flexDirection:"row-reverse"}}>
            <button onClick = {Checkout}>Logout</button>
        </div>
        </header> 
        </>);
};