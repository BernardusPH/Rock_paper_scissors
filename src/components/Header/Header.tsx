import {memo} from "react"

import AdvancedLogo from "/images/logo-bonus.svg";
import NormalLogo from "/images/logo.svg";
import classes from "./Header.module.css"
interface HeaderProps{
  gameModeNormal:boolean;
    score:number
}


const Header = ({gameModeNormal,score}:HeaderProps) => {
  console.log("hello");
  
    const currentLogo:string=gameModeNormal?NormalLogo:AdvancedLogo;
  return (
    <header className={classes.header}>
        <h1 aria-label="Rock Paper Scissors Game"><img className={classes["header-logo"]} src={currentLogo} alt="Logo" /></h1>
        <div className={classes["score-container"]}>
            <h2 className={classes["score-heading"]}>Score</h2>
            <span className={classes["score-number"]}>{score}</span>
        </div>
    </header>
  )
}

export default memo(Header)
