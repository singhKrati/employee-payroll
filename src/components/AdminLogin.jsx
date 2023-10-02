import React from 'react'
import {useNavigate} from 'react-router-dom'


const AdminLogin = () => {

    let navigate = useNavigate();
    const goToSignIn = () =>{
        let path ='/SignIn'
        navigate(path)
    }

  return (
    <div  className="flex justify-center items-center">
      <label><h1 className = 'text-6xl mt-40'>Before Proceeding Further</h1></label>
      <button onClick={goToSignIn} className=' font-bold py-20 px-40 rounded mt-40 text-5xl ml-11 bg-slate-600 
      className="btn shadow-[0_9px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black bg-slate500 ease-out hover:translate-y-1 transition-all rounded"
      
      '>SIGN IN</button>
  </div>
  )
}

export default AdminLogin
