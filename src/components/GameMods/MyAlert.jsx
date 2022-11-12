import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

export const MyAlert = (props) => {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate("/normal"));
  return MySwal.fire({
    title: props.msg,
    text: "Do you want to play again?",
    icon: props.icon,
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes",
    cancelButtonText: "No",
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.reload();
    } else {
      handleOnClick();
    }
  });
};
