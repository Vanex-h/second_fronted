import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface EmployeeProps {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  _id: string;
  deleteHandler: (_id: string) => void;
}
const Emp: FC<EmployeeProps> = ({
  firstName,
  lastName,
  email,
  username,
  _id,
  deleteHandler,
}: EmployeeProps) => {
  const navigate = useNavigate();
  return (
    <div className="p-4 pl-12 items-start flex flex-row justify-between border-[#a1babf30] border-b-2  shadow-inner">    
        <div className="flex flex-row justify-between w-40 pb-1">

      <span className="font-bold ">{firstName}</span>
      <span className="font-bold">{lastName}</span>
        </div>
      <span className="font-bold w-1/4">{username}</span>
      <span className="font-bold w-1/4">{email}</span>
      <button onClick={() => navigate(`/update/${_id}`)} className="w-1/4 "><span className=" rounded-md py-2 px-6 text-[#5c9e27] border-[#5d9e278d] border-2 hover:bg-[#5c9e27] hover:text-white">Update</span></button>{" "} 
      <button onClick={()=>deleteHandler(_id)} className="w-1/4"><span className="rounded-md py-2 px-6 text-red-400 border-red-400 border-2 hover:bg-red-400 hover:text-white">Delete</span></button>
    </div>
  );
};
export default Emp;