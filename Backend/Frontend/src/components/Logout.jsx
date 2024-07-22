import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'

function Logout() {
  const [authUser, setAuthUser] = useAuth()
  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user:null
      })
      localStorage.removeItem("Users")
      toast.success("Logout successfully")
      setTimeout(() => {
        window.location.reload();
      }, 2300)
    } catch(error){
      toast.error("Error :"+error.message)
      setTimeout(() => {}, 2300)
    }
  }
  return (
    <div>
        <button className='px-3 py-2 bg-primary text-white rounded-md cursor-pointer'
        onClick={handleLogout}>Logout</button>
    </div>
  )
}


export default Logout
