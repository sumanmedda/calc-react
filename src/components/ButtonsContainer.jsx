import css from '../App.module.css'

const ButtonsContainer = ({onButtonClick}) => {
  let buttons = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0','.']

  return (
    <div className={`${css['buttons-container']}`}>
        {buttons.map(buttonName =>  <button key={buttonName} className={`${css['button-class']}`} onClick={(e) => onButtonClick(buttonName)}>{buttonName}</button>)}
    </div>
  )
}

export default ButtonsContainer