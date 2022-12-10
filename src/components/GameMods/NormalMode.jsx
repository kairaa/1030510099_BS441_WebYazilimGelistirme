import rock from "../../assets/rock.png";
import paper from "../../assets/paper.png";
import scissors from "../../assets/scissors.png";
import "./ModeStyle.css";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

import { Card } from "./Card";
import { useState } from "react";

export const NormalMode = () => {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate("/"));

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
        setScore(0);
        setPcScore(0);
      } else {
        handleOnClick();
      }
    });
  };
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
    }, 250);
  };

  const handleClick = (e) => {
    let pcChoise = pcSelect();
    let userChoise = e.target.id;
    console.log("id: " + e.target.id);
    console.log(`you select: ${userChoise} - pc slect: ${pcChoise}`);
    if (userChoise == pcChoise) {
      clickEffect(e.target, "blue");
    } else {
      if (userChoise == cards.ROCK) {
        if (pcChoise == cards.PAPER) {
          clickEffect(e.target, "red");
          setPcScore(pcScore + 1);
          if (pcScore == 9) {
            MyAlert("You Lose", "error");
          }
        } else {
          clickEffect(e.target, "green");
          setScore(score + 1);
          if (score == 9) {
            MyAlert("You Win", "success");
          }
        }
      } else if (userChoise == cards.PAPER) {
        if (pcChoise == cards.SCISSORS) {
          clickEffect(e.target, "red");
          setPcScore(pcScore + 1);
          if (pcScore == 9) {
            MyAlert("You Lose", "error");
          }
        } else {
          clickEffect(e.target, "green");
          setScore(score + 1);
          if (score == 9) {
            MyAlert("You Win", "success");
          }
        }
      } else {
        if (pcChoise == cards.ROCK) {
          clickEffect(e.target, "red");
          setPcScore(pcScore + 1);
          if (pcScore == 9) {
            MyAlert("You Lose", "error");
          }
        } else {
          clickEffect(e.target, "green");
          setScore(score + 1);
          if (score == 9) {
            MyAlert("You Win", "success");
          }
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
        marginTop: "100px",
      }}
    >
      <div className="inner-div">
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
