import { useState, FC } from 'react'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
import RouteView from './router'
import './App.css'

interface IProps {

}
const App:FC<IProps> = ()=>{
  const [count, setCount] = useState(0)

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
      </button>
      <Router>
        <NavLink to="/home">首页</NavLink>
        <NavLink to="/test">test</NavLink>
        <RouteView />
      </Router>

    </>
  )
}

export default App
