import React, { useEffect, useState } from 'react'
import Register from './infoandauth/register'
import Login from './infoandauth/login'
import { Outlet, useNavigate } from 'react-router-dom'

const Experiments = () => {
  const [activeScreen, setActiveScreen] = useState('register')
  const navigate = useNavigate();
  const pathName = window.location.pathname;
  console.log(pathName)
  useEffect(() => {
    if (!localStorage.getItem('portfolioToken')) {
        navigate('/home/experiments')
    }else if(pathName === '/home/experiments'){
      navigate('/home/experiments/profile')
    }
},[navigate])
  return (
    <div className='experiments-main-page'>
      {
        pathName === '/home/experiments' ?
          <div className='experiments-innner'>
            {
              activeScreen === 'register' ? <Register setActiveScreen={setActiveScreen} /> :
                activeScreen === 'login' ? <Login setActiveScreen={setActiveScreen} /> : ''
            }
          </div> : <Outlet />
      }

    </div>
  )
}

export default Experiments
