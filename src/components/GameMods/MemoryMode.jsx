import rock from "../../assets/rock.png";
import paper from "../../assets/paper.png";
import scissors from "../../assets/scissors.png";

import "./ModeStyle.css";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { useState } from "react";
import { Card } from "./Card";

const cards = ["rock", "paper", "scissors"];
let gamePattern = [];
function createGamePattern(level) {
  for (let i = 0; i < level; i++) {
    let random = Math.floor(Math.random() * 3);
    console.log(`${i}: ${cards[random]}`);
    gamePattern.push(cards[random]);
  }
}
createGamePattern(10);

export const MemoryMode = () => {
  //console.log(gamePattern);
  const [level, setLevel] = useState(0);
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate("/"));

  //const addEffect = () => {};

  const initialize = () => {
    gamePattern = [];
    createGamePattern(10);
    setLevel(0);
  };

  const clickEffect = (target, color) => {
    target.style.backgroundColor = color;
    setTimeout(function () {
      target.style.backgroundColor = "transparent";
    }, 500);
  };

  const MyAlert = (msg, icon) => {
    MySwal.fire({
      title: msg,
      text: "Do you want to play again?",
      icon: icon,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        initialize();
      } else {
        handleOnClick();
      }
    });
  };

  const checkIsContinue = (userChoise) => {
    // switch (userChoise) {
    //   case "rock":
    //     return gamePattern[level] == "scissors";
    //   case "paper":
    //     return gamePattern[level] == "rock";
    //   case "scissors":
    //     return gamePattern[level] == "paper";
    // }
    if (userChoise === "rock") {
      return gamePattern[level] === "scissors";
    } else if (userChoise === "paper") {
      return gamePattern[level] === "rock";
    } else if (userChoise === "scissors") {
      return gamePattern[level] === "paper";
    }
  };

  const handleClick = (event) => {
    //console.log(gamePattern);
    const userChoise = event.target.id;
    console.log(`user choise: ${userChoise}`);
    console.log(
      `level : ${level} - pc select: ${
        gamePattern[level]
      } - you select: ${userChoise} - result: ${
        checkIsContinue(userChoise) ? "you win" : "you lose"
      }`
    );
    if (!checkIsContinue(userChoise)) {
      MyAlert("You Lose", "error");
    }
    setLevel(level + 1);
    if (level === 9) {
      MyAlert("You Win", "success");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "100px",
      }}
    >
      <span className="elementToFadeInAndOut">
        {gamePattern.map((card) => (
          <p>{card}</p>
        ))}
      </span>
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
        <h3>Level: {level + 1}</h3>
      </div>
    </div>
  );
};
