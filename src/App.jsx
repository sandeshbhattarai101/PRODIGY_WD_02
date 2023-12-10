import { useState } from 'react'
import './App.css'
import Stopwatch from './components/Stopwatch';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";



function App() {

  return (
    <>
     <Router>
      <Routes>
        <Route exact path='/' element={<Stopwatch/>}/>

      </Routes>
     </Router>
    </>
  )
}

export default App
