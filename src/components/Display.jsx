import css from '../App.module.css'

function Display(){
  return(
    <input type="text" className={`${css['display']}`} />
  )
}

export default Display;