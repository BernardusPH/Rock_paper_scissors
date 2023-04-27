import { ImgData } from "../../../../game_Img_storage/advancedGameStorage.ts";
import { simpleGameImgObj } from "../../../../game_Img_storage/simpleGameStorage.ts";
import ShapeButton from "../../../UI/ShapeButtons/ShapeButton.tsx";
interface ShapeGeneratorNormalProps {
  colorPicked: (shapeData: ImgData) => void;
}
const ShapeGeneratorNormal = ({ colorPicked }: ShapeGeneratorNormalProps) => {
  let generatedShapes = simpleGameImgObj.map((shape: ImgData) => (
    <ShapeButton
      shapeScale={1}
      colorPicked={colorPicked}
      {...shape}
      key={shape.name}
      
    />
  ));
  return <>{generatedShapes}</>;
};

export default ShapeGeneratorNormal;
