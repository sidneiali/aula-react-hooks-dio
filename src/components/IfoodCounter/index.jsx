import { useState, useEffect } from 'react'
import './styles.css'

const IfoodCounter = () => {
  const [value,setValue] = useState(1)
  const [buttonStyle,setButtonStyle] = useState("counter-button-minus-active")

  useEffect(() => {
    if (buttonStyle === "counter-button-minus-desactive") {
      alert("Zero é o menor numero possível")
    }
  }, [buttonStyle])

  const down = () => {
    if (value <= 1) {
      setButtonStyle("counter-button-minus-desactive")
    }
    
    if (value > 0) {
      setValue(value - 1)
    }
  }

  const up = () => {
    setValue(value + 1)
    setButtonStyle("counter-button-minus-active")
  }

  return (
    <div className="countex-wrapper">
      <button 
        onClick={down}
        className={buttonStyle}
      >-</button>
      <p>{value}</p>
      <button
        onClick={up}
        className="counter-button-plus-active"
      >+</button>
    </div>
  )
}

export default IfoodCounter