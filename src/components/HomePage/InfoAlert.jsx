import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

export const InfoAlert = (props) => {
  const MySwal = withReactContent(Swal);
  return MySwal.fire({
    title: props.modeName,
    text: props.modeText,
    icon: "info",
    showCancelButton: false,
    confirmButtonColor: "#3085d6",
    confirmButtonText: "Yes",
  });
};
