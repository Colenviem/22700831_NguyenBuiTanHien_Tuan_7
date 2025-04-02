import { useState } from 'react'
import './App.css'
import './css/Layout.css'

function App() {

  return (
    <div className='flex justify-center'>
      <div className="container">
      <div className="header">
        <h2>My Header</h2>
      </div>

      <div className="menu">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
      <div className="content">
        <h3>content</h3>
      </div>
    </div>
    </div>
  )
}

export default App
