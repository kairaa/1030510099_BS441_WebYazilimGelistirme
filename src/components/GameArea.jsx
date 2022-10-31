import rock from "../assets/rock.png";
import paper from "../assets/paper.png";
import scissors from "../assets/scissors.png";

import { Card } from "./Card";

export const GameArea = () => {
  const handleClick = () => {
    console.log("Clicked");
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card src={rock} onClick={handleClick}></Card>
      <Card src={paper}></Card>
      <Card src={scissors}></Card>
    </div>
  );
};
