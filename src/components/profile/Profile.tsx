import{useState} from 'react'

const Profile = () => {
    const [Loading, setLoading]= useState(false)
    const [error, setError]= useState("")
    const [firstName, setfirstName]= useState("")
    const [lastName, setlastName]= useState("")
    
  return (
    <div>Profile</div>
  )
}

export default Profile