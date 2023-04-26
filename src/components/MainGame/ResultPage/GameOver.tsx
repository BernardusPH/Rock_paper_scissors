

interface GameOverProps{
    resultMessage:string,
    tryAgain:()=>void;
}
const GameOver = ({resultMessage,tryAgain}:GameOverProps) => {
  return (
    <div>
      <h3>{resultMessage}</h3>
      <button onClick={tryAgain}>Try Again</button>
    </div>
  )
}

export default GameOver
