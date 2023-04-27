import classes from "./ShapeButton.module.css";
import { ImgData } from "../../../game_Img_storage/advancedGameStorage.ts";
import { CSSProperties } from "react";
import {motion} from "framer-motion"
interface ImageStyle extends CSSProperties {
  "--first-Linear-color": string;
  "--last-Linear-color": string;
}
interface ShapeButtonProps extends ImgData {
  colorPicked?: (shapeData : ImgData) => void;
  disabled?:boolean;
  shapeScale:number;
  className?:string;
  winner?:boolean;
}
const ShapeButton = ({
  img,
  name,
  bgcolorStart,
  bgcolorEnd,
  colorPicked,
  className,
  disabled,
  shapeScale,
  winner
}: ShapeButtonProps) => {

  function buttonClickHandle(){
    if(colorPicked)colorPicked( { img, name, bgcolorStart, bgcolorEnd})
  }
  const disableButton=disabled || false;
  return (
    <motion.button
    animate={{scale:shapeScale}}
    initial={{scale:0}}
    disabled={disableButton}
      style={
        {
          "--first-Linear-color": bgcolorStart,
          "--last-Linear-color": bgcolorEnd,
        } as ImageStyle
      }
      className={`${classes["shape-btn"]} ${classes[className||""]} ${winner && classes.winner} }`}
      onClick={buttonClickHandle}
    >
      <div className={classes["btn-White-img-container"]}>
        <img style={{transform:`scale( 1.2)`}} className={classes.shape} src={img} alt={name} />
      </div>
    </motion.button>
  );
};

export default ShapeButton;

