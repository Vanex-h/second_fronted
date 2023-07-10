import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
const UpdateForm = () => {
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const navigate = useNavigate();
  const [employee, setEmployee] = useState<null | any>(null);
  const { id } = useParams();
  useEffect(() => {
    (async function () {
      const response = await fetch(`http://localhost:1600/employee/${id}`);
      const data = await response.json();
      console.log(data);
      
      setEmployee(data);

      setfirstName(data.firstName);
      setlastName(data.lastName);
      setemail(data.email);
      setusername(data.username);
    })();
  }, []);

  const handleUpdate = async () => {
    setisLoading(true);
    let res = await fetch(`http://localhost:1600/update/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        username,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setisLoading(false);
    if (res.status == 200) {
      navigate("/employees");
    } else {
      setError("The user was not updated");
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };
  return (
    <div className="w-screen h-screen bg-[#7FBA5C] flex flex-col">
      <div className="m-auto bg-white w-4/12 h-4/5 flex flex-col justify-around">
        <h3 className="text-[#7FBA5C] text-lg font-extrabold">UPDATE FORM</h3>
        <p className="text-red-400">{error}</p>
        <input
          className="p-2 w-11/12 text-sm self-center h-12 focus:outline-none bg-[#F2F2F2]"
          type="text"
          defaultValue={employee?.firstName}
          placeholder="First Name"
          onChange={(e) => setfirstName(e.target.value)}
        />
        <input
          className="p-2 w-11/12 text-sm self-center h-12 focus:outline-none bg-[#F2F2F2]"
          type="text"
          defaultValue={employee?.lastName}
          placeholder="Last Name"
          onChange={(e) => setlastName(e.target.value)}
        />
        <input
          className="p-2 w-11/12 text-sm self-center h-12 focus:outline-none bg-[#F2F2F2]"
          type="email"
          defaultValue={employee?.email}
          placeholder="Email "
          onChange={(e) => setemail(e.target.value)}
        />
        <input
          className="p-2 w-11/12 text-sm self-center h-12 focus:outline-none bg-[#F2F2F2]"
          type="text"
          defaultValue={employee?.username}
          placeholder="Username"
          onChange={(e) => setusername(e.target.value)}
        />

        <button
          className="p-2 w-11/12  self-center h-12 focus:outline-none bg-[#7FBA5C] text-white cursor-pointer"
          disabled={isLoading}
          onClick={handleUpdate}
        >
          {isLoading ? "Loading..." : "Update"}
        </button>
      </div>
    </div>
  );
};

export default UpdateForm;
