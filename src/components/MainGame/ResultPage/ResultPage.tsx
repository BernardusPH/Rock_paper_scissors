import { useEffect, useState } from "react";

import {
  advancedGameImgObj,
  ImgData,
} from "../../../game_Img_storage/advancedGameStorage.ts";
import calculation from "./WinLooseCalculations.ts";
import ShapeButton from "../../UI/ShapeButtons/ShapeButton.tsx";
import GameOver from "./GameOverText.tsx";
import classes from "./ResultPage.module.css";
interface ResultPage {
  userPickedThrow: ImgData;
  gameModeNormal: boolean;
  tryAgain: () => void;
  scoreAdder:()=> void;
}

const ResultPage = ({
  userPickedThrow,
  gameModeNormal,
  scoreAdder,
  tryAgain,
}: ResultPage) => {
  const [preverdScaleSize, setpreverdScaleSize] = useState<number>(1.2);
  const [aiShape, setAiShape] = useState<ImgData>({
    img: "",
    name: "",
    bgcolorStart: "",
    bgcolorEnd: "",
  });
  const [WinLose, setWinLose] = useState<string>("");



  const aiSize = gameModeNormal ? 3 : 5;

  ///////Calculations for win lose
  useEffect(() => {
    const timer = setTimeout(() => {
      const randomNumber: number = Math.floor(Math.random() * aiSize);
      setAiShape(advancedGameImgObj[randomNumber]);
      setWinLose(
        calculation(userPickedThrow.name, advancedGameImgObj[randomNumber].name)
      );
    
    }, 500);
    return () => clearTimeout(timer);
  }, []);

useEffect(()=>{
  if(WinLose==="You win") scoreAdder()
},[WinLose])
  ////calculations for scale size with window width
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 700 && preverdScaleSize !== 1.2) {
        setpreverdScaleSize(1.2);
      } else if (window.innerWidth < 700 && preverdScaleSize !== 1) {
        setpreverdScaleSize(1);
      }
    }
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <div className={classes["result-container"]}>
      <span
        className={`   ${classes["your-pick-heading"]} ${classes["color-picked-heading"]}   `}
      >
        You Picked
      </span>
      <span
        className={`${classes["house-pick-heading"]} ${classes["color-picked-heading"]} `}
      >
        The House Picked
      </span>
      <ShapeButton
        winner={WinLose === "You win"}
        className="your-picked-shape"
        shapeScale={preverdScaleSize}
        disabled={true}
        {...userPickedThrow}
      />
      {WinLose === "" ? (
        ""
      ) : (
        <GameOver resultMessage={WinLose} tryAgain={tryAgain} />
      )}
      {WinLose === "" ? (
        <div className={classes["loading-block-container"]}>
          <div className={classes["black-circle"]} />
        </div>
      ) : (
        <ShapeButton
          winner={WinLose === "You lose"}
          className="house-picked-shape"
          shapeScale={preverdScaleSize}
          disabled={true}
          {...aiShape}
        />
      )}
    </div>
  );
};

export default ResultPage;
