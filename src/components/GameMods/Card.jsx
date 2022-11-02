export const Card = (props) => {
  return (
    <img
      id={props.id}
      onClick={props.onClick}
      src={props.src}
      style={{
        display: "block",
        border: "1px solid",
        borderRadius: "20px",
        cursor: "pointer",
        margin: "0 20px",
        padding: "10px",
        width: "100px",
        height: "100px",
      }}
      alt="item"
    ></img>
  );
};
