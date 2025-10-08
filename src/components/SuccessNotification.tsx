import { toast } from "react-toastify";

function SuccessNotification() {
  return toast.success('🦄 Wow so easy!', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: false,
draggable: true,
progress: undefined,
theme: "dark",
});
}

export default SuccessNotification;
