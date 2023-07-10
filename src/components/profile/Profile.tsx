import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const [Loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [employee, setEmployee] = useState<null | any>(null);

  const { id } = useParams();
  useEffect(() => {
    (async function () {
        setLoading(true)
      // const token= localStorage.getItem("token") as string;
      const response = await fetch(`http://localhost:1600/getProfile/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token") as string,
        },
      });
      const data = await response.json();
      setTimeout(() => {
          setLoading(false)
        setEmployee(data.employee) 
    }, 2000)
    })();
  }, []);
  return (
    <div>
      {Loading ? (
          <div className="w-10 h-10 rounded-full animate-spin mx-auto border-2 border-slate-500" />
      ) : (
        <div  className="w-[500px]  border-slate-400 mx-auto">
          <h1 className="text-xl font-bold">Profile</h1>
          <p>Firstname : {employee?.firstName}</p>
          <p>Lastname: {employee?.firstName}</p>
          <p>Email: {employee?.email}</p>
          <p>Username: {employee?.username}</p>
        </div>
      )}
    </div>
  );
};
export default Profile;
