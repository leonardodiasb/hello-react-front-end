import React from "react"
import { Route, Routes } from 'react-router-dom'
import Greeting from './components/Greeting'

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Greeting />}/>
    </Routes>
  )
}

export default App;
