import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Profile from './components/Profile';
import Tasks from './components/Tasks';
import FormTask from './components/FormTask';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/signup' element={<SignUp />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/profile' element={<Profile />}/>
      <Route path='/tasks' element={<Tasks />}/>
      <Route path='/tasks/create' element={<FormTask />}/>
      <Route path='/tasks/edit/:id' element={<FormTask />}/>
    </Routes>
  )
}

export default App