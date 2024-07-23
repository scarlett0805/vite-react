import { useState, FC } from 'react'
import './App.css'
import ILayout  from './components/Layout'

interface IProps {

}
const App:FC<IProps> = ()=>{
  const [count, setCount] = useState(0)

  return (
    <>
      <ILayout></ILayout>
    </>
  )
}

export default App
