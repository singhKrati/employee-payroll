import React from 'react'
import {useNavigate} from 'react-router-dom'

const Selection = () => {

    let navigate = useNavigate()
    const goToAdmin = () => {
        let path = '/NewSignIn'
        navigate(path)
    }
    const goToUser = () => {
        let path = '/UserLogin'
        navigate(path)
    }

  return (
    <div className='bg-purple-100 pb-20 min-h-screen'>
      <h2 className='text-center text-6xl pt-10 bg-purple-300 pb-10'>
        Welcome To Portal !!  Choose Your Role     </h2>
      <div className="flex justify-center items-center  ">
        <button 
        className=" text-white font-bold py-20 px-40 rounded text-5xl mt-40 bg-gradient-to-l from-purple-500 to-pink-500
        hover:bg-gradient-to-r border-4 border-spacing-4 border-purple-400 "
        type='button' onClick={goToAdmin}>ADMIN</button>
        <button
        className=" text-white font-bold py-20 px-40 rounded mt-40 text-5xl ml-11 bg-gradient-to-l from-purple-500 to-pink-500
        hover:bg-gradient-to-r  border-4 border-spacing-4 border-purple-400"
        type='button' onClick={goToUser}>EMPLOYEE</button>
      </div>
    </div>
  )
}

export default Selection
