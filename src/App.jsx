import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import HomePage from './pages/HomePage.jsx'
import RegistrationPage from './pages/RegistrationPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import ContactsPage from './pages/ContactsPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import { Route, Routes } from "react-router-dom"
import Header from './components/Header/Header.jsx'
import SharedLayout from './components/SharedLayout.jsx'
import { refreshThunk } from './redux/auth/operation.js'
import { selectIsRefresh } from './redux/auth/selectors.js'
import PrivateRoute from './components/PrivateRoute.jsx'
import RestrictedRoute from './components/RestrictedRoute.jsx'


function App() {

  const dispatch = useDispatch()
  const isRefreshing = useSelector(selectIsRefresh)
  useEffect (()=>{
  dispatch(refreshThunk())
  },[dispatch])

  

  return isRefreshing? null : (
 
     <> 
        <Routes> 
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/contacts"
              element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
              }
            />
          </Route>

          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegistrationPage />}
              />
            }
          />

          <Route path='/login' 
            element={
              <RestrictedRoute redirectTo="/contacts" Component={<LoginPage />} />
            }
          />
          <Route path='*' element={<NotFoundPage />} />     

        </Routes>
      </>
 
 )
}

export default App
