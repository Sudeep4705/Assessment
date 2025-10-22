import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserLayout from '../Layouts/UserLayout'
import Profile from './Components/Profile'
import AccountSettings from './Components/AccountSetting'
import SignIn from './Components/SignIn'
import Signup from './Components/Signup'
import AddTeam from './Components/AddTeam'
import Editor from './Components/Editor'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<UserLayout/>}>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/account' element={<AccountSettings/>}/>
      <Route path='/login' element={<SignIn/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/team' element={<AddTeam/>}/>
      <Route path='/' element={<Editor/>}/>
      </Route>
    </Routes>
    </BrowserRouter> 
    </>
  )
}
export default App
