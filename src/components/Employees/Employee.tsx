import { Link, useNavigate } from "react-router-dom"
import {FC, useEffect, useState} from 'react'
import Emp from "./Emp"
const Employee =()=> {
    const [Loading, setLoading]= useState(false)
    const navigate= useNavigate(); 
    const [employees, setEmployees]= useState<null | any[]>(null) ;

    useEffect(()=>{
        (async function(){
            setLoading(true);
            const token= localStorage.getItem('token') as string;
            const response= await fetch('http://localhost:1600/all', {
                method:"GET", 
                headers:{
                    authorization: token,
                },
            });
            const data= await response.json();
            setLoading(false);
            setEmployees(data);    
    })();
},[]);
const handleDelete= async(id:string)=>{
    const res= await fetch(`http://localhost:1600/delete/${id}`, {
        method: "DELETE",
    });
    if(res.status==200){
        const newEmployees=employees?.filter((employees)=>employees._id!=id);
        setEmployees(newEmployees as any[]);
    }
}

// const update= async(id:string)=>{
//     const res= await fetch(`http://localhost:1600/update/${id}`,{
//         method: "PUT",
//         body:JSON.stringify({
//         })
//     })
// }
  return (
    <div className="w-screen h-screen bg-white overflow-x-hidden">
    <nav className="h-12 items-center bg-[#7FBA5C] flex flex-row justify-around w-full text-white">
      <section className="relative cursor-pointer " >
        All employees
        <div className="hidden absolute top-full mt-0 bg-[#5cbaba00] text-sm w-40">
          <div className='bg-transparent text-[#7eba5c00] '>
          hello
          </div>
          <div className='bg-transparent'>
          <Link to="/employees" className='bg-transparent text-[#7FBA5C] '>Employees</Link>
          </div>
        </div>
      </section>
      <section className="relative cursor-pointer">
        My employees
        <div className="hidden absolute top-full mt-0 bg-[#5cbaba00] text-sm w-40">
          <div className='bg-transparent text-[#7eba5c00] '>
          hello
          </div>
          <div className='bg-transparent'>
          <Link to="/" className='bg-transparent text-[#7FBA5C] '>Some Link</Link>
          </div>
        </div>
      </section>
      <section className="relative cursor-pointer">
        My profile
        <div className="hidden absolute top-full mt-0 bg-[#5cbaba00] text-sm w-40">
          <div className='bg-transparent text-[#7eba5c00] '>
          hello
          </div>
          <div className='bg-transparent'>
          <Link to="/" className='bg-transparent text-[#7FBA5C] '>Some Link</Link>
          </div>
        </div>
      </section>
      <section className="relative cursor-pointer">
          <Link to="/login">

          Logout
          </Link>
             
        </section>
    </nav>
    <h1 className="text-2xl text-[#5c9e27] font-extrabold m-3">Employee Table</h1>
    <div className="first-letter: ">
        {Loading&&"Loading"}
        {!Loading &&employees !=null &&(
            <div>
    <div className="p-4 pl-12  items-start flex flex-row justify-around  bg-[#5c9e27] text-white border-b-2">
    <div className="flex flex-row justify-between w-40 ">

<span className="font-bold text-sm">First Name</span>
<span className="font-bold text-sm">Last Name</span>
  </div>
<span className="font-bold w-1/4 ">Username</span>
<span className="font-bold w-1/4">Email</span>
<span className="font-bold w-1/4">Update</span>
<span className="font-bold w-1/4">Delete</span>
</div>
                
                {employees.map((employee, i)=>(
                    <Emp key={i}
                    
                    firstName={employee.firstName}
                    
                    lastName={employee.lastName} username={employee.username} email={employee.email} _id={employee._id} deleteHandler={handleDelete}  />
                ))}{" "}
            </div>

        )}
        {
            (!Loading&&employees==null)||(employees?.length==0 &&<div>Users empty</div>)
        }

    </div>
  </div>
  )
}

export default Employee