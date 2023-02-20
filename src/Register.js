import { useEffect, useState } from "react";
 import {useNavigate} from 'react-router-dom';
 import Header from "./Header";

function Register(){

    useEffect(()=>{
            if(localStorage.getItem("user-info")){
                navigate('/add')
            }
    },[])
    
    const[name, setName]=useState("")
    const[email, setEmail]=useState("")
    const[contact, setContact]=useState("")
    const[password, setPassword]=useState("")
    const navigate = useNavigate();

   async function submitForm(){

        let item={name,email,contact,password}
        console.warn(item)
       let result= await fetch("http://localhost:3000/Users", {
            method:'POST',
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify(item)
        });
        result= await result.json();
        console.warn("result:",result)
        localStorage.setItem("user-info",JSON.stringify(result));
        navigate("/add")
    }

    return(
        <>
        <Header />
        <div className="col-md-4 offset-sm-4">
            <h1>Register page</h1>
    
            <input type="text" placeholder="Enter Name" className="form-control" value={name} onChange={(e)=>setName(e.target.value)}/>
            <br></br>
            <input type="text" placeholder="Enter Email"className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <br></br>
            <input type="text" placeholder="Enter Contact"className="form-control" value={contact}onChange={(e)=>setContact(e.target.value)} />
            <br></br>
            <input type="text" placeholder="Enter Password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <br></br>
            <button type="submit" className="btn btn-primary" onClick={submitForm}>Sign Up</button>
        </div>
        </>
    )
}
export default Register;