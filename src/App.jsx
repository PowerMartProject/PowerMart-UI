import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {store} from './redux/store'
import Start from './components/start'
import {useDispatch,useSelector} from 'react-redux'
import {addFunction,subFunction} from './action'


function App() {
  const counter=useSelector((store)=>store.counter)
  const disptach=useDispatch()
  const increment=()=>{
    disptach(addFunction(1))
  }
  const decrement=()=>{
    disptach(subFunction(1))
  }

  return (
    <div>
    <Start/>
    </div>
  )
}

export default App
