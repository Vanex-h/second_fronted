import { Link, useNavigate } from "react-router-dom"
import {FC, useEffect, useState} from 'react'
interface EmployeeProps{
    firstName:string;
    lastName: string;
    email: string;
    username:string;
    _id: string;
    deleteHandler: (_id:string) => void;
}
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

const update= async(id:string)=>{
    const res= await fetch(`http://localhost:1600/${id}`,{
        method: "PUT",
        body:JSON.stringify({
        })
    })
}
  return (
    <div className="w-screen h-screen bg-white">
    <nav className="h-12 items-center bg-[#7FBA5C] flex flex-row justify-around w-full text-white">
      <section className="relative cursor-pointer " >
        All employees
        <div className="hidden absolute top-full mt-0 bg-[#5cbaba00] text-sm w-40">
          <div className='bg-transparent text-[#7eba5c00] '>
          hello
          </div>
          <div className='bg-transparent'>
          <Link to="/employee" className='bg-transparent text-[#7FBA5C] '>Employees</Link>
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
        Logout
        <div className="hidden absolute top-full mt-0 bg-[#5cbaba00] text-sm w-40">
          <div className='bg-transparent text-[#7eba5c00] '>
          hello
          </div>
          <div className='bg-transparent'>
          <Link to="/" className='bg-transparent text-[#7FBA5C] '>Some Link</Link>
          </div>
        </div>    
      </section>
    </nav>
    <div className="container">
        {Loading&&"Loading"}
        {!Loading &&employees !=null &&(

        <table className="table-auto">
            <tr>
                <thead>First Name</thead>
                <thead>Last Name</thead>
                <thead>Email</thead>
                <thead>Username</thead>
            </tr>
            <tr>
                {/* <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{email}</td>
                <td>{username}</td> */}
            </tr>
        </table>

        )}
        {
            (!loading&&employees==null)||(employees?.length==0 && <div>No employees</div>)
        }
    </div>
  </div>
  )
}

export default Employee