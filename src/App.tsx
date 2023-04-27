import { useState,useCallback } from "react";
import { ImgData } from "./game_Img_storage/advancedGameStorage.ts";
import Header from "./components/Header/Header.tsx";
import "./App.css";
import ShapesPage from "./components/MainGame/ShapesPage/ShapesPage.tsx";
import Rules from "./components/Footer/Rules/Rules.tsx";
import ResultPage from "./components/MainGame/ResultPage/ResultPage.tsx";
import Button from "./components/UI/Button/Button.tsx";
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
  const scoreAdder=useCallback(()=>{
    setScore(prevScore=>{
      if(prevScore<=99){
        return ++prevScore
      }
      return prevScore
    })
  },[])

  
  return (
    <>
      <Header gameModeNormal={gameModeNormal} score={score} />
      <main className="main-gameplay-screen">
        {userHasChossen ? (
          <ResultPage scoreAdder={scoreAdder} tryAgain={tryAgain} userPickedThrow={userPickedThrow} gameModeNormal={gameModeNormal}  />
        ) : (
          <ShapesPage
            colorPicked={colorPicked}
            gameModeNormal={gameModeNormal}
          />
        )}
      </main>
      <footer>
        <Button className="mode-change" onClick={()=>setGameModeNormal(prev=>!prev)}>Change Mode</Button>
        <Rules gameModeNormal={gameModeNormal} />
      </footer>
      <aside className="profile-link" >
      <span>Challenge by <a target='_blank' href="https://www.frontendmentor.io/home">Frontend Mentor</a>. Coded by <a href="https://www.frontendmentor.io/profile/BernardusPH">Bernard</a>.</span>
      </aside>
    </>
  );
}

export default App;
