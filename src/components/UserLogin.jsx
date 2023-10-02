import React from 'react'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';


const UserLogin = () => {

    let navigate = useNavigate();
    const goToSignIn = () =>{
        let path ='/NewSignIn'
        navigate(path)
    }

    const goToSignUp = () =>{
        let path ='/NewSignUp'
        navigate(path)
    }

  return (
    <div className='min-h-screen bg-slate-200'>
        <div className="flex justify-center items-center text-5xl bg-slate-500 mt-10 pt-10 pb-10 font-bold">Choose To Proceed Further</div>

        <button className='mt-10 ml-10 text-2xl bg-slate-400 shadow-2xl pt-4 pb-4 pr-2 pl-2 border rounded-xl hover:bg-slate-500'>
                <Link to='/'>Previous Page</Link>
                </button>

          <div className='flex justify-center items-center'>
            <label className=' mt-20 mb-10 text-4xl font-bold'><h4>Create A New Account</h4></label>
          </div>

          <div className='flex justify-center items-center'>
            <button onClick={goToSignUp}
            className='text-white font-bold  bg-cyan-700 text-4xl pt-5 pb-5 pr-10 pl-10 border-4 border-spacing-4 rounded border-cyan-800'
            >SIGN UP</button>
          </div>



          <div className='flex justify-center items-center'>
            <label className=' mt-20 mb-10 text-4xl font-bold'><h4>Already Have An Account</h4></label>
          </div>

          <div className='flex justify-center items-center'>
            <button onClick={goToSignIn}
            className='text-white font-bold  bg-cyan-700 text-4xl pt-5 pb-5 pr-10 pl-10 border-4 border-spacing-4 rounded border-cyan-800'
            >SIGN IN</button>
          </div>

    </div>
  )
}

export default UserLogin
