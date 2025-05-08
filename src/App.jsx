import './App.css'
import SearchBox from './components/SearchBox/SearchBox'
import ContactList from './components/ContactList/ContactList.jsx'
import ContactForm from './components/ContactForm/ContactForm'
import { useDispatch } from 'react-redux'
import { fetchDataThunk } from './redux/contactsOps.js'
import { useEffect } from 'react'


function App() {

  const dispatch = useDispatch()
  
  useEffect (()=>{
  dispatch(fetchDataThunk())
  },[dispatch])

  

  return(
 
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox/>
        <ContactList/>
        </div> 
 
 )
}

export default App
