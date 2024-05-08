import css from '../App.module.css'

function Display({calVal}){
  return(
    <input type="text" className={`${css['display']}`} value={calVal} readOnly />
  )
}

export default Display;