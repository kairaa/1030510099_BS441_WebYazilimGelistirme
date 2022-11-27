import { Link } from "react-router-dom";
import { ModeCard } from "./ModeCard";
import { HOME_PAGE_TEXT } from "../../constants/constants";
import "../GameMods/ModeStyle.css";

export const HomePage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "100px",
      }}
    >
      <h4
        style={{
          lineHeight: "1.5",
          margin: "0 350px",
        }}
      >
        {HOME_PAGE_TEXT}
      </h4>
      <div
        style={{
          marginTop: "25px",
        }}
      >
        <ModeCard name="Normal" to="/normal"></ModeCard>
        <ModeCard name="Memory" to="/memory"></ModeCard>
      </div>
    </div>
  );
};
