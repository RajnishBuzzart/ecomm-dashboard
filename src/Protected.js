import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Protected(props){
    let Cmp = props.cmp
    const Navigate =useNavigate();
       useEffect(()=>{
           if(!localStorage.getItem("user-info")){
            Navigate("/register")
           }
       },[])
    return(
        <div>
        
                <Cmp />
            
        </div>
    )
}
export default Protected;