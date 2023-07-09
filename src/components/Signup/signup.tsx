// import React from 'react'
import { useState  } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate=useNavigate();
    const [isLoading, setisLoading] = useState(false);
    const [error, setError] = useState("");
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [username, setusername] = useState("");
    const [email, setemail]= useState("");
    const [password, setPassword] = useState("");
    const handleSignUp= async()=>{
        setisLoading(true);
        let resp= await fetch("http://localhost:1600/createEmployee",{
            method:"POST",
            body: JSON.stringify({
                firstName,
                lastName,
                username,
                email,
                password,
            }),
            headers:{
                "Content-Type":"application/json"
            },
            });

            setisLoading(false);

            if(resp.status==200){
                
                navigate("/login")
            }
            else{
                setError("Something is not right");
                setTimeout(()=>{setError("");}
                ,3000)
            }
    }
  return (
    <div className="w-screen h-screen bg-[#7FBA5C] flex flex-col">
      <div className="m-auto bg-white w-4/12 h-4/5 flex flex-col justify-around">
        <h3 className="text-[#7FBA5C] text-lg font-extrabold">SIGN UP</h3>
        <p className="text-red-400">{error}</p>
        <input
          className="p-2 w-11/12 text-sm self-center h-12 focus:outline-none bg-[#F2F2F2]"
          type="text"
          placeholder="First Name"
       onChange={(e)=>{setfirstName(e.target.value)}} />
        <input
          className="p-2 w-11/12 text-sm self-center h-12 focus:outline-none bg-[#F2F2F2]"
          type="text"
          placeholder="Last Name"
          onChange={(e)=>{setlastName(e.target.value)}}
        />
        <input
          className="p-2 w-11/12 text-sm self-center h-12 focus:outline-none bg-[#F2F2F2]"
          type="email"
          placeholder="Email "
          onChange={(e)=>{setemail(e.target.value)}}
        />
        <input
          className="p-2 w-11/12 text-sm self-center h-12 focus:outline-none bg-[#F2F2F2]"
          type="text"
          placeholder="Username"
            onChange={(e)=>{setusername(e.target.value)}}
        />
        <input
          className="p-2 w-11/12 text-sm self-center h-12 focus:outline-none bg-[#F2F2F2]"
          type="password"
          placeholder="Password"
            onChange={(e)=>{setPassword(e.target.value)}}
        />
        <button className="p-2 w-11/12  self-center h-12 focus:outline-none bg-[#7FBA5C] text-white cursor-pointer" disabled={isLoading} onClick={handleSignUp}  >
          {isLoading? "Loading...":"Submit"}
                </button>
        <div className="text-xs">
          Already have an account?{" "}
          <Link to="/login" className="text-[#7FBA5C]">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
