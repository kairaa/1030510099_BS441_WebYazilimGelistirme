export const Card = (props) => {
  return (
    <div
      style={{
        display: "block",
        border: "1px solid",
        borderRadius: "20px",
        cursor: "pointer",
        margin: "0 20px",
      }}
    >
      <img
        src={props.src}
        style={{
          padding: "10px",
          width: "100px",
          height: "100px",
        }}
        alt="item"
      ></img>
    </div>
  );
};
