import React from 'react'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import Feed from './pages/Feed'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path = '/feed' element = {<Feed/>} />
        <Route path = '/' element = {<CreatePost/>} />
      </Routes>
    </Router>
  )
}

export default App
