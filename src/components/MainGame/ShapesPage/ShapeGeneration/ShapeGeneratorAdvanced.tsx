import {
  advancedGameImgObj,
  ImgData,
} from "../../../../game_Img_storage/advancedGameStorage.ts";
import ShapeButton from "../../../UI/ShapeButtons/ShapeButton.tsx";
interface ShapeGeneratoradvancedProps {
  colorPicked: (shapeData: ImgData) => void;
}

const ShapeGeneratorAdvanced = ({
  colorPicked,
}: ShapeGeneratoradvancedProps) => {
  let generatedShapes = advancedGameImgObj.map((item: ImgData) => (
    <ShapeButton
      shapeScale={1}
      colorPicked={colorPicked}
      {...item}
      key={item.name}
 
    />
  ));
  return <>{generatedShapes}</>;
};

export default ShapeGeneratorAdvanced;
