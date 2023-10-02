import React, { useState, useEffect } from 'react'
import {doc, collection,getDocs} from 'firebase/firestore'
import {db} from '../Firebase'
import { Link } from 'react-router-dom'

const ShowEmployee = () =>{

    const[users, setUsers] = useState([])
    const docRef = collection(db, "Salary")

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(docRef)
                setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
            
        }
        getUsers()
    }, [])

    return(

        

        <div>

            <div className='font-bold flex justify-center items-center text-5xl bg-slate-500 mt-10 pt-10 pb-10 '>Data Is Ready To Be Viewed !!</div>

            <div>
                <button className='mt-10 ml-10 text-2xl bg-slate-400 shadow-2xl pt-4 pb-4 pr-2 pl-2 border rounded-xl hover:bg-slate-500'>
                <Link to='/'>Home Page</Link>
                </button>

                <button className='mt-10 ml-10 text-2xl bg-slate-400 shadow-2xl pt-4 pb-4 pr-2 pl-2 border rounded-xl hover:bg-slate-500'>
                <Link to='/AdminChoice'>Previous Page</Link>
                </button>
            </div>


            <div className='grid grid-cols-2 gap-4 mb-15 pl-10 pr-10 mr-10 ml-10 mb-10'>

            {users.map( (user) => {
                return(
                    <div>
                        <div className="bg-slate-200 shadow-md rounded px-8 pt-4 mt-20 mb-20 pb-8  r flex flex-col divide-y-2 divide-blue-300">
                            <p className='text-4xl pb-2'>{user.Name}</p>
                            
                            <li className='text-2xl' key={user.userId} >
                                <ul><b>Name : </b>{user.Name}</ul>
                                <ul><b>Age : </b>{user.Age}</ul>
                                <ul><b>Gender : </b>{user.Gender}</ul>
                                <ul><b>Date Of Birth : </b>{user.Date_Of_Birth}</ul>
                                <ul><b>Contact : </b>{user.Contact}</ul>
                                <ul><b>Email Id : </b>{user.Email_Id}</ul>
                                <ul><b>Address : </b>{user.Address}</ul>
                                <ul><b>City : </b>{user.City}</ul>
                                <ul><b>Qualification : </b>{user.Qualification}</ul>
                                <ul><b>Department : </b>{user.Department}</ul>
                                <ul><b>Appointment : </b>{user.Appointment}</ul>
                                <ul><b>Experience : </b>{user.Experience}</ul>
                                <ul><b>Leaves : </b>{user.Leaves}</ul>
                                <ul><b>Salary : </b>{user.Salary}</ul>
                                <ul><b>Salary Status : </b>{user.Status}</ul>
                              

                            </li> 
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default ShowEmployee


{/* <li key={user.userId}>
    <ul>Name : {user.Name}</ul>
    <ul>Salary : {user.Salary}</ul>
    <ul>Department : {user.Department}</ul>
</li> */}