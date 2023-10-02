import React,{useState} from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import auth from '../Firebase'
import { Link } from 'react-router-dom'


const NewSignUp = () => {

  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')

  const CreateUser = () =>{
    createUserWithEmailAndPassword(auth, email, password).then ((value)=>{
      alert("Success")
    })
    .catch((error) =>  {
      const errorMessage = "Please Enter A Valid Email And Password"
      alert(errorMessage)
    })
  }

  return (
    <div className='bg-slate-200 min-h-screen'>
      <div className='font-bold flex justify-center items-center text-5xl bg-slate-500 mt-10 pt-10 pb-10 '>SIGN UP PAGE</div>
            
      <div>
        <button className='mt-10 ml-10 text-2xl bg-slate-400 shadow-2xl pt-4 pb-4 pr-2 pl-2 border rounded-xl hover:bg-slate-500'>
          <Link to='/UserLogin'>Go Back To Previous Page</Link>
        </button>
      </div>

      <div className="flex flex-col justify-center items-center">


          <form className="bg-slate-300 shadow-md rounded px-8 pt-6 mt-20 mb- 40 pb-8 mb-4 r">
            <div >
              <label className="block text-gray-700  mb-2 text-5xl">Enter Email : </label>
              <input type='text'required placeholder='Email Id' value={email} onChange={e => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 pl-2 pr-40 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
              text-3xl mt-4"
              ></input>
            </div>

            <div>
              <label className="block text-gray-700   mb-2 text-5xl mt-16">Enter Password : </label>
              <input type='text' required placeholder='Password' value={password} onChange={e => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 pr-40 pl-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
              text-3xl mt-4"
              ></input>
            </div>

            <div className="flex items-center justify-between">
              <button type='button' onClick={CreateUser}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-8"
              >Submit</button>
            </div>


          </form>
          
      </div>
    </div>
  )
}

export default NewSignUp
