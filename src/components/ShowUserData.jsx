import React, { useState, useEffect } from 'react'
import {doc, collection,getDocs} from 'firebase/firestore'
import {db} from '../Firebase'
import { Link } from 'react-router-dom'
import html2canvas from "html2canvas";
// import { jsPDF } from "jspdf";




const ShowUserData = () =>{

    const[users, setUsers] = useState([])
    const[email, setEmail] = useState("")

    const docRef = collection(db, "Salary")

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(docRef)
                setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
            
        }
        getUsers()
    }, [])

    // const generatePDF = () => {

    //   const report = new jsPDF('portrait','pt','a4');
    //   report.html(document.querySelector('#report')).then(() => {
    //       report.save('report.pdf');
    //   });
    // }


  //   const printRef = React.useRef();

  // const handleDownloadPdf = async () => {
  //   const element = printRef.current;
  //   const canvas = await html2canvas(element);
  //   const data = canvas.toDataURL('image/png');

  //   const pdf = new jsPDF();
  //   const imgProperties = pdf.getImageProperties(data);
  //   const pdfWidth = pdf.internal.pageSize.getWidth();
  //   const pdfHeight =
  //     (imgProperties.height * pdfWidth) / imgProperties.width;

  //   pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
  //   pdf.save('print.pdf');
  // };
    
    return(
        <div className='bg-purple-100 min-h-screen'>

          <div className='flex justify-center items-center bg-purple-400 text-6xl pt-10 pb-10'>Enter Your Email Id To View Your Data</div>

          <div>
                <button className='mt-10 ml-10 text-2xl bg-slate-400 shadow-2xl pt-4 pb-4 pr-2 pl-2 border rounded-xl hover:bg-slate-500'>
                <Link to='/'>Home Page</Link>
                </button>

                <button className='mt-10 ml-10 text-2xl bg-slate-400 shadow-2xl pt-4 pb-4 pr-2 pl-2 border rounded-xl hover:bg-slate-500'>
                <Link to='/NewSignIn'>Log In Page</Link>
                </button>
         </div>

                    

                    <div className='flex justify-center items-center'>
                      <input type='text' placeholder='Enter Email Id' onChange={(e) => { setEmail(e.target.value) }} value={email}
                      className=' appearance-none bg-slate-200 border rounded text-3xl mt-10 mb-2 pl-4 pr-2 pt-4 pb-4
                       border-blue-gray-200 placeholder-gray-600 shadow-2xl'
                      ></input>
                    </div>

                    {/* <div>
                      <button className='ml-10 text-2xl bg-slate-400 shadow-2xl pt-4 pb-4 pr-2 pl-2 border rounded-xl hover:bg-slate-500' onClick={handleDownloadPdf}>Download Report</button>
                    </div> */}


                    <div className='flex justify-center items-center '>
                        {users.map( (user) => {
          
                          if(user.Email_Id === email){

                            return(

                              <div className='grid grid-cols-1 gap-4 mb-15 bg-orange-200 pt-10 pb-10 pl-10 p-20 mt-20 mb-20 shadow-2xl
                              border-8 rounded-lg border-orange-300 w-1/2' ref={printRef}>

                                <li className='space-y-4' key={user.userId}>

                                    <ul className='text-2xl'><b>Name</b> : {user.Name}</ul>

                                    <ul className='text-2xl'><b>Age</b> : {user.Age}</ul>

                                    <ul className='text-2xl'><b>Gender</b> : {user.Gender}</ul>

                                    <ul className='text-2xl'><b>Date Of Birth</b> : {user.Date_Of_Birth}</ul>

                                    <ul className='text-2xl'><b>Contact Number</b> : {user.Contact}</ul>

                                    <ul className='text-2xl'><b>Employee Id</b> : {user.Employee_Id}</ul>

                                    <ul className='text-2xl'><b>Email Id</b> : {user.Email_Id}</ul>

                                    <ul className='text-2xl'><b>Permanent Address</b> : {user.Address}</ul>

                                    <ul className='text-2xl'><b>City</b> : {user.City}</ul>

                                    <ul className='text-2xl'><b>Educational Qualification</b> : {user.Qualification}</ul>

                                    <ul className='text-2xl'><b>Department</b> : {user.Department}</ul>

                                    <ul className='text-2xl'><b>Appointment</b> : {user.Appointment}</ul>

                                    <ul className='text-2xl'><b>Experience</b> : {user.Experience}</ul>

                                    <ul className='text-2xl'><b>Leaves</b> : {user.Leaves}</ul>

                                    <ul className='text-2xl'><b>Salary Count</b> : {user.Salary}</ul>

                                    <ul className='text-2xl'><b>Salary Status</b> : {user.Status}</ul>


                                </li>
                                
                              </div>
                            )
                          }
                        })}
                    </div>
           
        </div>
    )

}

export default ShowUserData