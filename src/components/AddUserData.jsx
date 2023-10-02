import React, {useState} from 'react'
import {addDoc, doc, collection} from 'firebase/firestore'
import {db} from '../Firebase'
import { Link } from 'react-router-dom'


const AddUserData =() => {

    const[name, setName] = useState("")
    const[age, setAge] = useState("")
    const[address, setAddress] = useState("")
    const[dept, setDept] = useState("")
    const[salary, setSalary] = useState("")
    const[status, setStatus] = useState("")
    const[appointment, setAppointment] = useState("")
    const[emailId, setemailId] = useState("")
    const[contact, setContact] = useState("")
    const[dob, setDOB] = useState("")
    const[qualification, setQualification] = useState("")
    const[experience, setExperience] = useState("")
    const[gender, setGender] = useState("")
    const[leaves, setLeaves] = useState("")
    const[city, setCity] = useState("")
    const[employeeId, setId] = useState("")

    const addData = async() =>{
        await addDoc(collection(db, "Salary"), {
      
            Name: name,
            Age: age, 
            Address: address,
            City: city,
            Department: dept,
            Salary: salary,
            Status: status,
            Appointment: appointment,
            Employee_id: employeeId,
            Email_Id: emailId,
            Contact: contact,
            Qualification: qualification,
            Experience: experience,
            Gender: gender,
            Leaves: leaves,
            Date_Of_Birth: dob
            
        }).then ((value)=>{
            alert("Success")
          })
    }
    
    return(
        <div>

            <div className=' text-4xl flex flex-col justify-center items-center mt-10 mb-10 bg-slate-400 pt-8 pb-8'>Proceed To Add Employee Data</div>

            <div>
                <button className='mt-10 ml-10 text-2xl bg-slate-400 shadow-2xl pt-4 pb-4 pr-2 pl-2 border rounded-xl hover:bg-slate-500'>
                <Link to='/'>Home Page</Link>
                </button>

                <button className='mt-10 ml-10 text-2xl bg-slate-400 shadow-2xl pt-4 pb-4 pr-2 pl-2 border rounded-xl hover:bg-slate-500'>
                <Link to='/AdminChoice'>Previous Page</Link>
                </button>
            </div>

                <div className='grid grid-cols-2 gap-4 mb-15 ml-20 pl-10 mt-10  '>


                    <input type='text' placeholder='Name' onChange={e => setName(e.target.value)} value={name}
                    className="shadow appearance-none bg-slate-200  rounded w-2/3  pl-2 pr-2 pt-4 pb-4  text-black leading-tight focus:outline-none focus:shadow-outline
                    mt-4 border border-blue-gray-200 placeholder-gray-600 text-2xl"
                    ></input>


                    <input type='text' placeholder='Age' onChange={e => setAge(e.target.value)} value={age}
                    className="shadow appearance-none bg-slate-200  rounded w-2/3  pl-2 pr-2 pt-4 pb-4  text-black leading-tight focus:outline-none focus:shadow-outline
                    mt-4 border border-blue-gray-200 placeholder-gray-600 text-2xl"
                    ></input>


                    <input type='text' placeholder='Gender' onChange={e => setGender(e.target.value)} value={gender}
                    className="shadow appearance-none bg-slate-200  rounded w-2/3  pl-2 pr-2 pt-4 pb-4  text-black leading-tight focus:outline-none focus:shadow-outline
                    mt-4 border border-blue-gray-200 placeholder-gray-600 text-2xl"
                    ></input>


                    <input type='text' placeholder='Date Of Birth' onChange={e => setDOB(e.target.value)} value={dob}
                    className="shadow appearance-none bg-slate-200  rounded w-2/3  pl-2 pr-2 pt-4 pb-4  text-black leading-tight focus:outline-none focus:shadow-outline
                    mt-4 border border-blue-gray-200 placeholder-gray-600 text-2xl"
                    ></input>


                    <input type='text' placeholder='Contact Number' onChange={e => setContact(e.target.value)} value={contact}
                    className="shadow appearance-none bg-slate-200  rounded w-2/3  pl-2 pr-2 pt-4 pb-4  text-black leading-tight focus:outline-none focus:shadow-outline
                    mt-4 border border-blue-gray-200 placeholder-gray-600 text-2xl"
                    ></input>


                    <input type='text' placeholder='Give Unique Employee Id' onChange={e => setId(e.target.value)} value={employeeId}
                    className="shadow appearance-none bg-slate-200  rounded w-2/3  pl-2 pr-2 pt-4 pb-4  text-black leading-tight focus:outline-none focus:shadow-outline
                    mt-4 border border-blue-gray-200 placeholder-gray-600 text-2xl"
                    ></input>


                    <input type='text' placeholder='Email Id' onChange={e => setemailId(e.target.value)} value={emailId}
                    className="shadow appearance-none bg-slate-200  rounded w-2/3  pl-2 pr-2 pt-4 pb-4  text-black leading-tight focus:outline-none focus:shadow-outline
                    mt-4 border border-blue-gray-200 placeholder-gray-600 text-2xl"
                    ></input>


                    <input type='text' placeholder='Address' onChange={e => setAddress(e.target.value)} value={address}
                    className="shadow appearance-none bg-slate-200  rounded w-2/3  pl-2 pr-2 pt-4 pb-4  text-black leading-tight focus:outline-none focus:shadow-outline
                    mt-4 border border-blue-gray-200 placeholder-gray-600 text-2xl"
                    ></input>


                    <input type='text' placeholder='City' onChange={e => setCity(e.target.value)} value={city}
                    className="shadow appearance-none bg-slate-200 rounded w-2/3  pl-2 pr-2 pt-4 pb-4  text-black leading-tight focus:outline-none focus:shadow-outline
                    mt-4 border border-blue-gray-200 placeholder-gray-600 text-2xl"
                    ></input>


                    <input type='text' placeholder='Highest Qualification' onChange={e => setQualification(e.target.value)} value={qualification}
                    className="shadow appearance-none bg-slate-200  rounded w-2/3  pl-2 pr-2 pt-4 pb-4  text-black leading-tight focus:outline-none focus:shadow-outline
                    mt-4 border border-blue-gray-200 placeholder-gray-600 text-2xl"
                    ></input>


                    <input type='text' placeholder='Department' onChange={e => setDept(e.target.value)} value={dept}
                    className="shadow appearance-none bg-slate-200  rounded w-2/3  pl-2 pr-2 pt-4 pb-4  text-black leading-tight focus:outline-none focus:shadow-outline
                    mt-4 border border-blue-gray-200 placeholder-gray-600 text-2xl"
                    ></input>


                    <input type='text' placeholder='Temporary / Permanent Employee' onChange={e => setAppointment(e.target.value)} value={appointment}
                    className="shadow appearance-none bg-slate-200  rounded w-2/3  pl-2 pr-2 pt-4 pb-4  text-black leading-tight focus:outline-none focus:shadow-outline
                    mt-4 border border-blue-gray-200 placeholder-gray-600 text-2xl"
                    ></input>


                    <input type='text' placeholder='Experience' onChange={e => setExperience(e.target.value)} value={experience}
                    className="shadow appearance-none bg-slate-200  rounded w-2/3  pl-2 pr-2 pt-4 pb-4  text-black leading-tight focus:outline-none focus:shadow-outline
                    mt-4 border border-blue-gray-200 placeholder-gray-600 text-2xl"
                    ></input>


                    <input type='text' placeholder='Leaves In Current Month' onChange={e => setLeaves(e.target.value)} value={leaves}
                    className="shadow appearance-none bg-slate-200  rounded w-2/3  pl-2 pr-2 pt-4 pb-4  text-black leading-tight focus:outline-none focus:shadow-outline
                    mt-4 border border-blue-gray-200 placeholder-gray-600 text-2xl"
                    ></input>


                    <input type='text' placeholder='Salary Count / Month' onChange={e => setSalary(e.target.value)} value={salary}
                    className="shadow appearance-none bg-slate-200  rounded w-2/3  pl-2 pr-2 pt-4 pb-4  text-black leading-tight focus:outline-none focus:shadow-outline
                    mt-4 border border-blue-gray-200 placeholder-gray-600 text-2xl"
                    ></input>


                    <input type='text' placeholder='Salary Status' onChange={e => setStatus(e.target.value)} value={status}
                    className="shadow appearance-none bg-slate-200  rounded w-2/3  pl-2 pr-2 pt-4 pb-4  text-black leading-tight focus:outline-none focus:shadow-outline
                    mt-4 border border-blue-gray-200 placeholder-gray-600 text-2xl"
                    ></input>





                </div>

            <div className='flex flex-col justify-center items-center'>
                    <button onClick={addData}
                               className="bg-slate-400 hover:bg-slate-500 text-3xl text-black shadow-2xl rounded-2xl  py-2 px-4  focus:outline-none focus:shadow-outline mt-8 mb-10"
                    >Add To Database</button>

            </div>
    </div>
)

}

export default AddUserData