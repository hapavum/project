import React from 'react'
import s from "./Button.module.sass"

const Button = ({children, type="button", url="/", isButton=true, variant, styles={}}) => {
  return isButton ?
  <button type={type} className={`${s.button} ${s[variant]}`}>{children}</button> :
  <Link to={url} className={`${s.button} ${s[variant]}`}>{children}</Link>
}