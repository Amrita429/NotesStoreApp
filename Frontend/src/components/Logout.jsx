import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'

function Logout() {
    const [authUser, setAuthUser] = useAuth()   //context se user aa jayega

    const handleLogout = ()=>{
        try {
            setAuthUser({
                ...authUser,  //purani state ki value to rhegi hi
                user:null,
            })
            localStorage.removeItem("Users");
            toast.success("Logout Successful");
            
            setTimeout(()=>{
              window.location.reload();   //so that page apneaap refresh hojaye
            },3000);   //timer set to 3 sec taaki our toast remains on screen for 3sec
           } catch (error) {
            toast.error("Error: " + error);
            setTimeout(()=>{},2000);  //2000ms that is 2 sec
        }
    };

  return (
    <div>
        <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer'
        onClick={handleLogout}>
            Logout
            </button>
    </div>
  )
}

export default Logout