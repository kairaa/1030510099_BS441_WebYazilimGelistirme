import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { NORMAL_MODE, MEMORY_MODE } from "../../constants/constants";

export const ModeCard = (props) => {
  const MySwal = withReactContent(Swal);
  const text = props.name == "Normal" ? NORMAL_MODE : MEMORY_MODE;
  return (
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
      <Link
        style={{
          textDecoriton: "none",
          color: "black",
        }}
        to={props.to}
      >
        <h4>{props.name} Mode</h4>
      </Link>
      <h4
        onClick={() => {
          MySwal.fire({
            title: props.name + " Mode",
            text: text,
            icon: "info",
            showCancelButton: false,
            confirmButtonColor: "#3085d6",
            confirmButtonText: "OK",
            cursor: "pointer",
          });
        }}
      >
        How to play?
      </h4>
    </div>
  );
};
