import React from 'react'
import s from "./Input.module.sass"
import Container from '../Container/Container'

const Input = ({
    type = 'text',
    placeholder,
    name,
    value,
    onChange
}) => {
  return (
    <div className={s.input}>
        <input 
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
         />
    </div>
  )
}

export default Input