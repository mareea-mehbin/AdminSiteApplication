import { useNavigate } from "react-router-dom";

interface Props {
  children: string;
}
const Alert = (props: Props) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert">
        <strong>{props.children}!</strong>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={() => navigate("/login")}></button>
      </div>
    </>
  );
};

export default Alert;
