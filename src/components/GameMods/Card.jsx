import "./ModeStyle.css";

export const Card = (props) => {
  return (
    <div
      id={props.id}
      onClick={props.onClick}
      className={props.active ? "elementToFadeInAndOut" : ""}
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
        src={props.src}
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
