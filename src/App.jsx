import './App.css'
import { useDispatch } from 'react-redux'
import { fetchDataThunk } from './redux/contacts/operations.js'
import { useEffect } from 'react'
import HomePage from './pages/HomePage.jsx'
import RegistrationPage from './pages/RegistrationPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import ContactsPage from './pages/ContactsPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import { Route, Routes } from "react-router-dom"
import Header from './components/Header/Header.jsx'


function App() {

  const dispatch = useDispatch()
  
  useEffect (()=>{
  dispatch(fetchDataThunk())
  },[dispatch])

  

  return(
 
     <> 
        <Header />
        <Routes> 
          <Route path='/' element={<HomePage />} />
          <Route path='/register' element={<RegistrationPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/contacts' element={<ContactsPage />} />
          <Route path='*' element={<NotFoundPage />} />     
        </Routes>
      </>
 
 )
}

export default App
