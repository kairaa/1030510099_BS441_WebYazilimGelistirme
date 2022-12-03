import "./ModeStyle.css";

export const Card = (props) => {
  return (
    <div
      id={props.id}
      onClick={props.onClick}
      style={{
        display: "block",
        border: "1px solid",
        borderRadius: "20px",
        cursor: "pointer",
        margin: "0 20px",
        padding: "10px",
        width: "150px",
        textAlign: "center",
        height: "150px",
      }}
    >
      <img
        id={props.id}
        src={props.src}
        onClick={props.effect}
        style={{
          marginTop: "25px",
          width: "100px",
          height: "100px",
        }}
        alt="item"
      ></img>
    </div>
  );
};
