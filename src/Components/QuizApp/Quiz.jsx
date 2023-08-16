import React from 'react'
import LoginComponent from './LoginComponent'
import WelcomeComponent from './WelcomeComponent'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HeaderComponent from './HeaderComponent'
import './Quiz.css'
import LogOutComponent from './LogOutComponent'
import QuestionComponent from './QuestionComponent'

const QuizApp = () => {
  return (
    <div>
    <BrowserRouter>
    <HeaderComponent />
        <Routes>
          <Route path='/' Component={LoginComponent}/>
          <Route path='/login' Component={LoginComponent}/>
          <Route path='/welcome' Component={WelcomeComponent}/>
          <Route path='/logout' Component={LogOutComponent}/>
          <Route path='/question' Component={QuestionComponent}/>
          
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default QuizApp