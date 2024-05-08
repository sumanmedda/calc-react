import css from '../App.module.css'

function Button({buttons}){
  return(
    <button className={`${css['button-class']}`}>{buttons}</button>
  )
}

export default Button