  import Header from "./Header";  
  import { useEffect } from "react";
  import { useNavigate } from "react-router-dom";
    function Login(){
        const Navigate = useNavigate();
        useEffect(()=>{
            if(localStorage.getItem("user-info")){
                Navigate("/add")
            }
        },[])

    return(
        <div>
            <Header />
            <h1>Login page</h1>
        </div>
    )
}
export default Login;