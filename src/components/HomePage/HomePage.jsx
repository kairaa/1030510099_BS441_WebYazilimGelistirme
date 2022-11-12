import { Link } from "react-router-dom";
import { ModeCard } from "./ModeCard";

export const HomePage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      Home Page
      <ModeCard name="Normal" to="/normal"></ModeCard>
      <ModeCard name="Memory" to="/memory"></ModeCard>
    </div>
  );
};
