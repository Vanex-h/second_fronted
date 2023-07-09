import { Link, useNavigate } from "react-router-dom"
import {useState} from 'react'

const Login = () => {
    const navigate=useNavigate();
const [isLoading,setisLoading]= useState(false);
const [username, setusername]= useState("");
const [password, setpassword]= useState("");
const [error, seterror]= useState("");
const empLogin=async ()=>{
    setisLoading(true)
    let response= await fetch("http://localhost:1600/login",{
        method:"POST",
        body: JSON.stringify({
            username,
            password,
        }),
        headers:{
            "Content-Type": "application/json"
    },})
    setisLoading(false)
    if(response.status==200){
        const data= await response.json();
        localStorage.setItem('token', data.token)
        navigate('/home')
    }
    else{
        seterror("Something is wrong");
        setTimeout(()=>{
            seterror("");
        },3000)
    }
}
  return (
    <div className="w-screen h-screen bg-[#7FBA5C] flex flex-col">
    <div className="m-auto bg-white w-96 h-3/5 flex flex-col justify-evenly">
    <h3 className="text-[#7FBA5C] text-lg font-extrabold">LOGIN</h3> 
    <p className="text-red-400">{error}</p>
    <input className="p-2 w-11/12 text-sm self-center h-12 focus:outline-none bg-[#F2F2F2]" type="text" placeholder="Username" onChange={(e)=>setusername(e.target.value)} /> 
    <input className="p-2 w-11/12 text-sm self-center h-12 focus:outline-none bg-[#F2F2F2]" type="password" placeholder="Password" onChange={(e)=>setpassword(e.target.value)} /> 
    <button className="p-2 w-11/12  self-center h-12 focus:outline-none bg-[#7FBA5C] text-white" disabled={isLoading} onClick={empLogin} > 
    {isLoading?"Loading...":"Login"}
    </button> 
    <div className="text-xs">Don't have an account? <Link to ='/signup' className="text-[#7FBA5C]">Signup</Link></div>

    </div>

</div>
  )
}

export default Login