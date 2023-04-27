import React from 'react'
import classes from "./Button.module.css"
interface ButtonProps {
    onClick:()=>void;
    className?:string;
    children: React.ReactNode;
  }
const Button = ({onClick,className,children}:ButtonProps) => {
  return (
    <button onClick={onClick} className={`${className && classes["game-btn"]} ${classes[className||""]}`}>
        {children}
    </button>
  )
}

export default Button
