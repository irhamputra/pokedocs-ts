import React from 'react'
import './App.css'
import Search from './components/Search'

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Pokemon</h1>
      <Search name="John Doe" />
    </div>
  )
}

export default App
