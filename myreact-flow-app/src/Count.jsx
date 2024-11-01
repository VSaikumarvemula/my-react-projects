import { useState } from "react"

function Count()
{
const[Count,setCount] = useState(0)

const fun = ()=>{
     (Count >0) &&
        setCount(Count-1);
     
}

return(
    <>
    <h1>Counter Value :{Count} </h1>
    <button style={{color:"green"}} onClick={()=>setCount(Count+1)}>Increment</button>
    <button style={{color:"red"}} onClick={fun}>Deccrement</button>
    <button  style={{color:"orange"}}  onClick={()=>setCount(0)}>Reset</button>


   
    </>

)


}
export default Count;