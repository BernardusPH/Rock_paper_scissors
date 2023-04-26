import { useState } from "react";
import { ImgData } from "./game_Img_storage/advancedGameStorage.ts";
import Header from "./components/Header/Header.tsx";
import "./App.css";
import ShapesPage from "./components/MainGame/ShapesPage/ShapesPage.tsx";
import Rules from "./components/Footer/Rules/Rules.tsx";
import ResultPage from "./components/MainGame/ResultPage/ResultPage.tsx";

function App() {
  const [gameModeNormal, setGameModeNormal] = useState<boolean>(true);
  const [userPickedThrow, setUserPickedThrow] = useState<ImgData>({
    img: "",
    name: "",
    bgcolorStart: "",
    bgcolorEnd: "",
  });
  
  const [userHasChossen, setUserHasChossen] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  function colorPicked(shapeData: ImgData) {
    setUserPickedThrow({...shapeData});
    setUserHasChossen(true);
  }
  function tryAgain(){
    setUserHasChossen(false)
    setUserPickedThrow({
      img: "",
      name: "",
      bgcolorStart: "",
      bgcolorEnd: "",
    })
  }
  return (
    <>
      <Header gameModeNormal={gameModeNormal} score={score} />
      <main className="main-gameplay-screen">
        {userHasChossen ? (
          <ResultPage tryAgain={tryAgain} userPickedThrow={userPickedThrow} gameModeNormal={gameModeNormal}  />
        ) : (
          <ShapesPage
            colorPicked={colorPicked}
            gameModeNormal={gameModeNormal}
          />
        )}
      </main>
      <footer>
        <Rules />
      </footer>
    </>
  );
}

export default App;
