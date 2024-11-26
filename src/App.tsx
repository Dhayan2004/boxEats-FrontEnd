import { useState } from 'react'
import './App.css'
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './pages/Login';

function App() {

  return (
    <>
      <Router>
        {/*<Route path="/" element={<Home />} />*/}
        <Route path="/login" element={<Login />} />
      </Router>
    </>
  )
}

export default App
