import { Link } from "react-router-dom"


const Welcome = () => {
  return (
    <div className="flex fex-col w-screen h-screen bg-[#7FBA5C]" >
        
    <div className="m-auto text-white">Welcome <Link to="/login">
    <div className="hover:text-lg">Continue</div>
    </Link>
    
    </div>
    
    </div>
  )
}

export default Welcome