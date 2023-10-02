import React, {useState} from 'react'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import auth from '../Firebase'
import {useNavigate} from 'react-router-dom'

const NewSignIn = () => {
    let navigate=useNavigate()

    const[email, setEmail] =  useState("")
    const[password, setPassword] = useState("")

    const SignInUser = () =>{
        if(email === "admin@gmail.com" && password === "admin1234" ){
      
            signInWithEmailAndPassword(auth, email, password).then(() => {
              let path = '/AdminChoice'
              navigate (path)
            })
          }
          else{
            

              signInWithEmailAndPassword(auth, email, password).then( () =>{
                let path = '/ShowUserData'
                navigate (path)
              })
            
            .catch((error) => {
              const errorMessage = "You Have To Sign In First";
              alert(errorMessage)
          });
          } 
    }

  return (
    <div  className='bg-slate-200 min-h-screen'>
      <div className='font-bold flex justify-center items-center text-5xl bg-slate-500 mt-10 pt-10 pb-10 '>LOGIN PAGE</div>

      <div className="flex flex-col justify-center items-center">


          <form className="bg-slate-300 shadow-md rounded px-8 pt-6 mt-40 mb- 40 pb-8 mb-4 r">
            <div >
              <label className="block text-gray-700  mb-2 text-5xl">Enter Email : </label>
              <input type='text' placeholder='Email Id' value={email} onChange={e => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 pl-2 pr-40 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
              text-3xl mt-4"
              ></input>
            </div>

            <div>
              <label className="block text-gray-700   mb-2 text-5xl mt-16">Enter Password : </label>
              <input type='text' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 pr-40 pl-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
              text-3xl mt-4"
              ></input>
            </div>

            <div className="flex items-center justify-between">
              <button type='button' onClick={SignInUser}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-8"
              >Submit</button>
            </div>

            
          </form>
          
      </div>
    </div>
  )
}

export default NewSignIn
