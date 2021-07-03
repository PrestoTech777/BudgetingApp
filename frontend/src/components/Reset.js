import axios from "axios";

const handleClick = () => {
  axios
    .delete("http://192.168.1.98:5000/api/v1/deletetransactions")
    .then((res) => {
      window.location.href = "/";
    });
};

const Reset = () => {
  return (
    <button type="button" className="btn btn-danger" onClick={handleClick}>
      Reset
    </button>
  );
};

export default Reset;
