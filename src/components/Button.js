import React from 'react'

const Button = (props) => {
  return (
    <button 
        style={{ 
            color: props.color, 
            margin: props.margin, 
            padding: props.padding, 
            border: props.border, 
            borderRadius: props.borderRadius, 
            backgroundColor: props.backgroundColor 
        }}>
      {props.text}
    </button>
  )
}

export default Button
