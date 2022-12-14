import rock from "../../assets/rock.png";
import paper from "../../assets/paper.png";
import scissors from "../../assets/scissors.png";

import "./ModeStyle.css";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Card } from "./Card";

const cards = ["rock", "paper", "scissors"];
let gamePattern = [];
let showCardItem = [];

function createGamePattern(level) {
  for (let i = 0; i < level; i++) {
    let random = Math.floor(Math.random() * 3);
    console.log(`${i}: ${cards[random]}`);
    gamePattern.push(cards[random]);
    let cardSrc =
      cards[random] == "rock"
        ? rock
        : cards[random] == "paper"
        ? paper
        : scissors;
    showCardItem.push(<Card src={cardSrc}></Card>);
  }
}
createGamePattern(10);

export const MemoryMode = () => {
  const [time, setTime] = useState(10);

  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime(time - 1), 1000);
    return () => clearInterval(timer);
  }, [time]);

  const [level, setLevel] = useState(0);
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate("/"));

  const initialize = () => {
    gamePattern = [];
    showCardItem = [];
    createGamePattern(10);
    setLevel(0);
    setTime(10);
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
    if (!checkIsContinue(userChoise)) {
      MyAlert("You Lose", "error");
    }
    setLevel(level + 1);
    if (level === 9) {
      MyAlert("You Win", "success");
    }
  };

  return time == 0 ? (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "100px",
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
        <h3>Level: {level + 1}</h3>
      </div>
    </div>
  ) : (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "100px",
      }}
    >
      <h3>Hurry up! You have only {time} seconds to start the game!</h3>
      <h4>PC selected these cards</h4>
      <div
        style={{
          display: "flex",
        }}
      >
        {showCardItem.map((card) => card)}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></div>
    </div>
  );
};
