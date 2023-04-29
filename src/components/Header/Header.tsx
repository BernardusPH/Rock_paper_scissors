import {memo} from "react"

import AdvancedLogo from "/images/logo-bonus.svg";
import NormalLogo from "/images/logo.svg";
import classes from "./Header.module.css";
import {motion} from "framer-motion"
interface HeaderProps{
  gameModeNormal:boolean;
    score:number
}


const Header = ({gameModeNormal,score}:HeaderProps) => {
 
  
    const currentLogo:string=gameModeNormal?NormalLogo:AdvancedLogo;
  return (
    <header className={classes.header}>
        <h1 aria-label="Rock Paper Scissors Game"><img className={classes["header-logo"]} src={currentLogo} alt="Logo" /></h1>
        <div className={classes["score-container"]}>
            <h2 className={classes["score-heading"]}>Score</h2>
            <motion.span key={score} animate={{scale:1}} initial={{scale:0}}  className={classes["score-number"]}>{score}</motion.span>
        </div>
    </header>
  )
}

export default memo(Header)
