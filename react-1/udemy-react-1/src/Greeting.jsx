
const morning = {
    color : "Red"
  }
  const Afternoon = {
    color : "Blue"
  }
  const Evening = {
    color : "Green"
  }
  let time = new Date();
  time = time.getHours() ;
  
export default function Greeting(){

 return(<div>
 <h1 style = {time <= 12 ? morning : (time <=18) ? Afternoon : Evening}>Good {time <= 12 ? "Morning" : (time <=18) ? "Afternoon" : "Evening"}</h1>
</div>)
};
