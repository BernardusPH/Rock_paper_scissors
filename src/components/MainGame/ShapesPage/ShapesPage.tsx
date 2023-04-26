import ShapeGeneratorNormal from "./ShapeGeneration/ShapeGeneratorNormal.tsx";
import ShapeGeneratorAdvanced from "./ShapeGeneration/ShapeGeneratorAdvanced.tsx";
import classes from "./ShapesPage.module.css";
import NormalBackgroundImg from "/images/bg-triangle.svg";
import AdvancedBackgroundImg from "/images/bg-pentagon.svg";
import { CSSProperties } from "react";
import { ImgData } from "../../../game_Img_storage/advancedGameStorage.ts";


interface ImageStyle extends CSSProperties {
  "--game-Mode-background": string;
}
interface ShapesPage {
  gameModeNormal: boolean;
  colorPicked: (shapeData : ImgData) => void;
}
const ShapesPage = ({ gameModeNormal, colorPicked }: ShapesPage) => {
  const backgroundImg: string = gameModeNormal
    ? NormalBackgroundImg
    : AdvancedBackgroundImg;
  return (
    <div
      style={
        { "--game-Mode-background": `url(${backgroundImg})` } as ImageStyle
      }
      className={`${classes["shape-game-container"]} ${
        gameModeNormal
          ? classes["game-mode-normal"]
          : classes["game-mode-advanced"]
      }`}
    >
      {gameModeNormal ? (
        <ShapeGeneratorNormal colorPicked={colorPicked} />
      ) : (
        <ShapeGeneratorAdvanced colorPicked={colorPicked} />
      )}
    </div>
  );
};

export default ShapesPage;
