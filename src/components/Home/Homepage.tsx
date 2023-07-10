import { Link, useNavigate } from "react-router-dom";
import {FC} from "react"
import "./Home.css";
// import './Homepage.css'
interface EmployeeProps {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  _id: string;
}
const Homepage: FC<EmployeeProps> = ({ _id }: EmployeeProps) => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen second bg-white">
      <nav className="h-12 items-center bg-[#7FBA5C] bg-transparent flex flex-row justify-around w-full text-white">
        <section className="relative cursor-pointer">
          Home
          <div className="hidden absolute top-full mt-0 bg-[#5cbaba00] text-sm w-40">
            <div className="bg-transparent text-[#7eba5c00] ">hello</div>
            <div className="bg-transparent">
              <Link to="/homepage" className="bg-transparent text-[#7FBA5C] ">
                Some Link
              </Link>
            </div>
          </div>
        </section>
        <section className="relative cursor-pointer ">
          All employees
          <div className="hidden absolute top-full mt-0 bg-[#5cbaba00] text-sm w-40">
            <div className="bg-transparent text-[#7eba5c00] ">hello</div>
            <div className="bg-transparent">
              <Link to="/employees" className="bg-transparent text-[#7FBA5C] ">
                Employees
              </Link>
            </div>
          </div>
        </section>
        <section className="relative cursor-pointer">
          My profile
          <div className="hidden absolute top-full mt-0 bg-[#5cbaba00] text-sm w-40">
            <div className="bg-transparent text-[#7eba5c00] ">hello</div>
            <div className="bg-transparent">
              <button
                
                onClick={() => navigate(`/userProfile/${_id}`) }
                className="bg-transparent text-[#7FBA5C] "
              >
                User profile
              </button>
            </div>
          </div>
        </section>
        <section className="relative cursor-pointer">
          <Link to="/login">Logout</Link>
        </section>
      </nav>
      {/* <div className='' >
      <div style={{ textAlign: 'center' }} className="mid">
         {/* <div style={{ color: '#96BB7C', fontSize: '12px' }}><strong>For Better Future</strong></div>
        <h1><strong>HIGH QUALITY <br/> COURSES</strong></h1>
       
        <button style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} className="join">
      <strong style={{ margin: 'auto' }}>JOIN US<i className="fa fa-arrow-right" aria-hidden="true" style={{ paddingLeft: '6px' }}></i></strong>
    </button> */}
      {/* </div>  */}
      {/* </div> */}
    </div>
  );
};

export default Homepage;
