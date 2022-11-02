import { Link } from "react-router-dom";

export const ModeCard = (props) => {
  return (
    <Link
      style={{
        textDecoriton: "none",
        color: "black",
      }}
      to={props.to}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          border: "1px solid",
          width: "40rem",
          padding: "0 10px",
          margin: "5px 0",
        }}
      >
        <h4>{props.name}</h4>
        <h4>{">"}</h4>
      </div>
    </Link>
  );
};
