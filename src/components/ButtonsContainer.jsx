import css from '../App.module.css'
import Button from './Button'

const ButtonsContainer = () => {
  let buttons = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0','.']

  return (
    <div className={`${css['buttons-container']}`}>
        {buttons.map(buttons => <Button key={buttons} buttons={buttons}/>)}
    </div>
  )
}

export default ButtonsContainer