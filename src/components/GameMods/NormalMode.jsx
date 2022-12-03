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
        setPaperIsActive(false);
        setRockIsActive(false);
        setScissorsIsActive(false);
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
  const [rockIsActive, setRockIsActive] = useState(false);
  const [paperIsActive, setPaperIsActive] = useState(false);
  const [scissorsIsActive, setScissorsIsActive] = useState(false);

  const toggleRock = () => {
    setRockIsActive(!rockIsActive);
  };

  const togglePaper = () => {
    setPaperIsActive(!paperIsActive);
  };

  const toggleScissor = () => {
    setScissorsIsActive(!scissorsIsActive);
  };

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
    console.log("rock: " + rockIsActive);
    console.log("paper: " + paperIsActive);
    console.log("scissors: " + scissorsIsActive);
    let pcChoise = pcSelect();
    let userChoise = event.target.id;
    if (userChoise == pcChoise) {
      //clickEffect(event.target, "blue");
    } else {
      if (userChoise == cards.ROCK) {
        if (pcChoise == cards.PAPER) {
          //clickEffect(event.target, "red");
          toggleRock();
          setPcScore(pcScore + 1);
          if (pcScore == 9) {
            MyAlert("You Lose", "error");
          }
        } else {
          //clickEffect(event.target, "green");
          toggleRock();
          setScore(score + 1);
          if (score == 9) {
            MyAlert("You Win", "success");
          }
        }
      } else if (userChoise == cards.PAPER) {
        if (pcChoise == cards.SCISSORS) {
          //clickEffect(event.target, "red");
          togglePaper();
          setPcScore(pcScore + 1);
          if (pcScore == 9) {
            MyAlert("You Lose", "error");
          }
        } else {
          //clickEffect(event.target, "green");
          togglePaper();
          setScore(score + 1);
          if (score == 9) {
            MyAlert("You Win", "success");
          }
        }
      } else {
        if (pcChoise == cards.ROCK) {
          //clickEffect(event.target, "red");
          toggleScissor();
          setPcScore(pcScore + 1);
          if (pcScore == 9) {
            MyAlert("You Lose", "error");
          }
        } else {
          //clickEffect(event.target, "green");
          toggleScissor();
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
        <Card
          id="rock"
          active={rockIsActive}
          src={rock}
          onClick={handleClick}
        ></Card>
        <Card
          id="paper"
          active={paperIsActive}
          src={paper}
          onClick={handleClick}
        ></Card>
        <Card
          id="scissors"
          active={scissorsIsActive}
          src={scissors}
          onClick={handleClick}
        ></Card>
      </div>
      <div>
        <h3>Your score: {score}</h3>
        <h3>PC score: {"  " + pcScore}</h3>
      </div>
    </div>
  );
};
