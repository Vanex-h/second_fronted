// import React from "react";
import { Link } from 'react-router-dom';
import './Home.css'
const Home = () => {
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
    </div>
  );
};

export default Home;
