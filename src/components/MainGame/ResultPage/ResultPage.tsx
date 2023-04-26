import { useEffect, useState } from "react";
import {
  advancedGameImgObj,
  ImgData,
} from "../../../game_Img_storage/advancedGameStorage.ts";
import calculation from "./WinLooseCalculations.ts";
import ShapeButton from "../../UI/ShapeButtons/ShapeButton.tsx";
import GameOver from "./GameOver.tsx";
import classes from "./ResultPage.module.css";
interface ResultPage {
  userPickedThrow: ImgData;
  gameModeNormal: boolean;
  tryAgain: () => void;
}
const ResultPage = ({
  userPickedThrow,
  gameModeNormal,
  tryAgain,
}: ResultPage) => {
  const [aiShape, setAiShape] = useState<ImgData>({
    img: "",
    name: "",
    bgcolorStart: "",
    bgcolorEnd: "",
  });
  const [WinLose, setWinLose] = useState<string>("");
  const aiSize = gameModeNormal ? 3 : 5;
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("ghew");
      const randomNumber: number = Math.floor(Math.random() * aiSize);
      setAiShape(advancedGameImgObj[randomNumber]);
      setWinLose(
        calculation(userPickedThrow.name, advancedGameImgObj[randomNumber].name)
      );
    }, 500);
    return ()=>clearTimeout(timer);
  }, []);
  

  return (
    <div className={classes["result-container"]}>
      <ShapeButton shapeScale={1.2} disabled={true} {...userPickedThrow} />
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
        <ShapeButton shapeScale={1.2} disabled={true} {...aiShape} />
      )}
    </div>
  );
};

export default ResultPage;
