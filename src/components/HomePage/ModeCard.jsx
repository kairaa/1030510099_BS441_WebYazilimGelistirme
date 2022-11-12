import { Link } from "react-router-dom";
import { InfoAlert } from "./InfoAlert";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const ModeCard = (props) => {
  const MySwal = withReactContent(Swal);
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
        <h4>{props.name}</h4>
      </Link>
      <h4
        onClick={() => {
          MySwal.fire({
            title: props.name,
            text: "There will be text to explain how user play mods (text will come from props)",
            icon: "info",
            showCancelButton: false,
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Yes",
          });
        }}
      >
        {"How to play?"}
      </h4>
    </div>
  );
};
