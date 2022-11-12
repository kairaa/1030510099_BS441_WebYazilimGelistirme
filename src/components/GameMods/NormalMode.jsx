import rock from "../../assets/rock.png";
import paper from "../../assets/paper.png";
import scissors from "../../assets/scissors.png";
import "./ModeStyle.css";

import { Card } from "./Card";
import { useState } from "react";
import { MyAlert } from "./MyAlert";

export const NormalMode = () => {
  const cards = {
    ROCK: "rock",
    PAPER: "paper",
    SCISSORS: "scissors",
  };

  const [score, setScore] = useState(0);
  const [pcScore, setPcScore] = useState(0);
  const pcSelect = () => {
    let random = Math.floor(Math.random() * 3);
    let pcCard = "";
    switch (random) {
      case 0:
        pcCard = cards.ROCK;
        break;
      case 1:
        pcCard = cards.PAPER;
        break;
      case 2:
        pcCard = cards.SCISSORS;
        break;
    }
    return pcCard;
  };

  const clickEffect = (target, color) => {
    target.style.backgroundColor = color;
    setTimeout(function () {
      target.style.backgroundColor = "transparent";
    }, 500);
  };

  const handleClick = (event) => {
    let pcChoise = pcSelect();
    let userChoise = event.target.id;
    if (userChoise == pcChoise) {
      clickEffect(event.target, "blue");
    } else {
      if (userChoise == cards.ROCK) {
        if (pcChoise == cards.PAPER) {
          clickEffect(event.target, "red");
          setPcScore(pcScore + 1);
        } else {
          clickEffect(event.target, "green");
          setScore(score + 1);
        }
      } else if (userChoise == cards.PAPER) {
        if (pcChoise == cards.SCISSORS) {
          clickEffect(event.target, "red");
          setPcScore(pcScore + 1);
        } else {
          clickEffect(event.target, "green");
          setScore(score + 1);
        }
      } else {
        if (pcChoise == cards.ROCK) {
          clickEffect(event.target, "red");
          setPcScore(pcScore + 1);
        } else {
          clickEffect(event.target, "green");
          setScore(score + 1);
        }
      }
    }
  };

  return pcScore == 10 ? (
    <MyAlert msg="You Lose" icon="error"></MyAlert>
  ) : score == 10 ? (
    <MyAlert msg="You Win" icon="success"></MyAlert>
  ) : (
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
        <h3>Your score: {score}</h3>
        <h3>PC score: {"  " + pcScore}</h3>
      </div>
    </div>
  );
};
