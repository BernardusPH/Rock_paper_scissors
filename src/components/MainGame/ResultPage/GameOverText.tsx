import classes from "./GameOverText.module.css";
import Button from "../../UI/Button/Button";
import {motion} from "framer-motion"

interface GameOverProps {
  resultMessage: string;
  tryAgain: () => void;
}

const GameOver = ({ resultMessage, tryAgain }: GameOverProps) => {
  return (
    <motion.div animate={{scale:1}} initial={{scale:0}}  className={classes["game-over-text-container"]}>
      <h3 className={classes["game-over-text"]}>{resultMessage}</h3>
      <Button className="try-again" onClick={tryAgain}>
        Play Again
      </Button>
    </motion.div>
  );
};

export default GameOver;
