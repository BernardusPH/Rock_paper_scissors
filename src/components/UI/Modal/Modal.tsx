
import ReactDOM from "react-dom"
import CloseButton from "/images/icon-close.svg"; 
import classes from "./Modal.module.css"
import NormalGameRules from "/images/image-rules.svg";
import AdvancedGameRules from "/images/image-rules-bonus.svg";
import {motion} from "framer-motion"
interface CloseInter{
    onClick:()=>void
}
const Backdrop = ( {onClick}:CloseInter) => {
  return (
    <div onClick={onClick} className={classes["modal-backdrop"]} />
  )
}
interface ModalProps extends CloseInter{
    gameModeNormal:boolean
}
const Modal =({onClick,gameModeNormal}:ModalProps)=>{
    const gameRulesImg:string=gameModeNormal?NormalGameRules:AdvancedGameRules;
    console.log(gameModeNormal);
    

    return (
        <motion.div initial={{scale:0,translateX:"-50%" }} animate={{scale:1}} className={classes["modal-container"]}>
            <button className={classes["close-modal-button"]} onClick={onClick} ><img src={CloseButton} alt="close button"/> </button>
            <h2  className={classes["modal-heading"]}>Rules</h2>
            <img src={gameRulesImg} alt="Game rules"  className={classes["rule-img"]}  />
           
        </motion.div>
    )
}

const myModal = ({ onClick, gameModeNormal }: ModalProps) => {
    const modalRoot = document.querySelector("#modal");
    if (!modalRoot) {
      return null; // Return null if the element with id "modal" does not exist
    }
    return (
        <>
        {ReactDOM.createPortal(<Backdrop onClick={onClick} />, modalRoot)}
        {ReactDOM.createPortal(<Modal gameModeNormal={gameModeNormal} onClick={onClick} />, modalRoot)}
        </>
    );
  };


export default myModal 
