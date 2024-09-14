import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
const App = () => {
  return (
    <div className='h-screen w-full p-4 flex items-center justify-center'> 
      <Routes>
          <Route path='/' element={<Home/>}/> 
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </div>
  )
}

export default App