import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const AdminChoice = () => {
    let navigate =useNavigate()
    const viewDetails =() =>{
        let path = '/ShowEmployee'
        navigate(path)
    }

    const addDetails = () =>{
        let path = '/AddUserData'
        navigate(path)
    }

  return (
    <div className='min-h-screen bg-slate-200'>

      <div className="flex justify-center items-center text-5xl bg-slate-500 mt-10 pt-10 pb-10 mb-10 font-bold">
        Choose The Next Step</div>

        <div>
        <button className='mt-10 ml-10 text-2xl bg-slate-400 shadow-2xl pt-4 pb-4 pr-2 pl-2 border rounded-xl hover:bg-slate-500'>
          <Link to='/'>Go Back To Home Page</Link>
        </button>
      </div>


      <div className="flex justify-center items-center">
        <button onClick={viewDetails}
        className="bg-zinc-400 hover:bg-zinc-300 text-black font-bold  rounded-full mt-20 text-4xl py-10 px-40 "
        ><h2>View Employee Details</h2></button><br></br>

      </div>

      <div className="flex justify-center items-center">

        <button onClick={addDetails}
        className="bg-zinc-400 hover:bg-zinc-300 text-black font-bold  rounded-full mt-20 text-4xl py-10 px-40"
        ><h2>Add Employee Details</h2></button>
      </div>
        
    </div>
  )
}

export default AdminChoice
