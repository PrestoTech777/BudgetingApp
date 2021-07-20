import http from "../http-common";

const handleClick = () => {
  http
    .delete('/deletetransactions')
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
