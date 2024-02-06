import { useState, useEffect } from "react";
import "./App.css";

const phrases = [
  "No", "u sure?", "u really really sure?",
  "pookie pls", "ur making me sad..", "imm gunna cry"
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [showFinalGif, setShowFinalGif] = useState(false);
  const yesButtonSize = noCount * 20 + 16;
  const finalGifUrl = "https://media1.tenor.com/m/d4_xTYspX1gAAAAd/side-eye-side-eye-cat.gif"; 

 
  const safeAreaHeight = window.innerHeight - 100; 
  const safeTopStart = 50; 

  function handleNoClick() {
    if (noCount >= phrases.length - 1) {
      setShowFinalGif(true); 
    } else {
      setNoCount(noCount + 1); 
    }

    const noButton = document.querySelector(".noButton");
    const buttonWidth = noButton ? noButton.offsetWidth : 100; 

    const newPosition = {
      top: Math.random() * (safeAreaHeight - noButton.offsetHeight) + safeTopStart,
      left: Math.random() * (window.innerWidth - buttonWidth),
    };

    if (noButton) {
      noButton.style.position = "absolute";
      noButton.style.top = `${newPosition.top}px`;
      noButton.style.left = `${newPosition.left}px`;
    }
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  if (showFinalGif) {
    return (
      <div style={{ width: '100vw', height: '100vh' }}>
        <img src={"https://media1.tenor.com/m/d4_xTYspX1gAAAAd/side-eye-side-eye-cat.gif"} alt="Full Screen Gif" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
    );
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="yay"
            src="https://media1.tenor.com/images/K0QNIySkzdEAAAAd/dog-smile-eeyeyy1.gif"
          />
          <div className="text" style={{ fontWeight: 'bold', fontSize: '36px' }}>Yay!!!</div>
        </>
      ) : (
        <>
          <img
            alt="pikachu"
            src="https://gifdb.com/images/high/pokemon-pikachu-will-you-be-my-valentine-p6pjjlhcdeki4xrw.webp"
          />
          <div className="text" style={{ fontWeight: 'bold', fontSize: '36px' }}>Will you be my valentine? :3</div>
          <div className="buttons-container" style={{ display: "flex", justifyContent: "center" }}>
            <button
              className="yesButton"
              style={{ fontSize: `${yesButtonSize}px` }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className="noButton"
            >
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
