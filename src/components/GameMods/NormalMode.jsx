import rock from "../../assets/rock.png";
import paper from "../../assets/paper.png";
import scissors from "../../assets/scissors.png";

import { Card } from "./Card";
import { useState } from "react";

export const NormalMode = () => {
  const [score, setScore] = useState(0);
  const pcSelect = () => {
    let random = Math.floor(Math.random() * 3);
    let pcCard = "";
    switch (random) {
      case 0:
        pcCard = "rock";
        break;
      case 1:
        pcCard = "paper";
        break;
      case 2:
        pcCard = "scissors";
        break;
    }
    return pcCard;
  };

  const handleClick = (event) => {
    let pcChoise = pcSelect();
    let loseMessage = "You Lose";
    let winMessage = "You Win";
    let userChoise = event.target.id;
    if (userChoise == pcChoise) {
      alert("Draw");
    } else {
      if (userChoise == "rock") {
        if (pcChoise == "paper") {
          alert(loseMessage);
        } else {
          alert(winMessage);
          setScore(score + 1);
        }
      } else if (pcChoise == "paper") {
        if (pcChoise == "scissors") {
          alert(loseMessage);
        } else {
          alert(winMessage);
          setScore(score + 1);
        }
      } else {
        if (pcChoise == "rock") {
          alert(loseMessage);
        } else {
          alert(winMessage);
          setScore(score + 1);
        }
      }
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card id="rock" src={rock} onClick={handleClick}></Card>
        <Card id="paper" src={paper} onClick={handleClick}></Card>
        <Card id="scissors" src={scissors} onClick={handleClick}></Card>
      </div>
      <div>
        <h1>Your score: {score}</h1>
      </div>
    </div>
  );
};
