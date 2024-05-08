import { useState } from 'react'
import css from './App.module.css'
import ButtonsContainer from './components/ButtonsContainer'
import Display from './components/Display'

function App() {

  let [calVal,setCalVal] = useState("")

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("")
    }else if (buttonText === "=") {
      setCalVal(eval(calVal))
    }else{
      const newDispValue = calVal + buttonText
      setCalVal(newDispValue)
    }
  }
  

  return (
    <div className={`${css['calculator']}`}>
      <Display calVal={calVal}/>
      <ButtonsContainer onButtonClick={onButtonClick}/>
    </div>
  )
}

export default App
