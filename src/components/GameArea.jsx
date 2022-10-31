import rock from "../assets/rock.png";
import paper from "../assets/paper.png";
import scissors from "../assets/scissors.png";

import { Card } from "./Card";
import { useState } from "react";

export const GameArea = () => {
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
    console.log(`${random} : ${pcCard}`);
    return pcCard;
  };

  const handleClick = (event) => {
    let pcChoise = pcSelect();
    let loseMessage = "You Lose";
    let winMessage = "You Win";
    console.log(`you select: ${event.target.id}`);
    let userChoise = event.target.id;
    console.log(`pc Selected: ${pcChoise}`);
    if (userChoise == "rock") {
      if (pcChoise == "paper") {
        alert(loseMessage);
      } else if (pcChoise == "scissors") {
        setScore(score + 1);
        alert(winMessage);
      } else {
        alert("Draw");
      }
    } else if (userChoise == "paper") {
      if (pcChoise == "scissors") {
        alert(loseMessage);
      } else if (pcChoise == "rock") {
        setScore(score + 1);
        alert(winMessage);
      } else {
        alert("Draw");
      }
    } else if (userChoise == "scissors") {
      if (pcChoise == "rock") {
        alert(loseMessage);
      } else if (pcChoise == "paper") {
        setScore(score + 1);
        alert(winMessage);
      } else {
        alert("Draw");
      }
    }
  };

  return (
    <div>
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
