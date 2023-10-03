import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Selection from './components/Selection'
import AdminLogin from './components/AdminLogin'
import UserLogin from './components/UserLogin'
import ShowUserData from './components/ShowUserData'
import ShowEmployee from './components/ShowEmployee'
import AdminChoice from './components/AdminChoice'
import NewSignIn from './components/NewSignIn'
import AddUserData from './components/AddUserData'
import NewSignUp from './components/NewSignUp'

const App = () => {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Selection/>}/>
        <Route path='/AdminLogin' element={<AdminLogin/>}></Route>
        <Route path='/UserLogin' element={<UserLogin/>}></Route>
        <Route path='/ShowUserData' element={<ShowUserData/>}></Route>
        <Route path='/ShowEmployee' element={<ShowEmployee/>}></Route>
        <Route path='/NewSignUp' element={<NewSignUp/>}></Route>
        <Route path='/AdminChoice' element={<AdminChoice/>}></Route>
        <Route path='/newSignIn' element={<NewSignIn/>}></Route>
        <Route path='/AddUserData' element={<AddUserData/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
