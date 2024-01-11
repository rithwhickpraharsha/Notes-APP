


export default function Note({notes}){
 
return (

    <div style={{display:"flex", flexWrap:"wrap",justifyContent:"space-around"}}>
    { 
      notes.map((x,i)=>{
                                                                       
        return (
            <div key = {i} style = {{height : "200px",width:"300px",backgroundColor: "white",margin:"15px",border:"2px solid black",overflowY:"scroll",whiteSpace:"wrap"}}>
        <div>
        <p style = {{fontWeight:"bold", fontFamily:"cursive",marginTop:"5px",marginLeft:"5px"}}>{x.title}</p>
        <p style= {{fontFamily:"cursive", marginTop:"5px",marginLeft:"5px"}}>{x.description}</p>
        </div>
        </div>
      )
      })
     }
    </div>
)

}