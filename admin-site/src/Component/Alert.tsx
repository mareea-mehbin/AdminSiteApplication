interface Props {
  children: string;
}
const Alert = (props: Props) => {
  return (
    <div
      className="alert alert-danger alert-dismissible fade show"
      role="alert">
      {props.children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={() => location.reload()}></button>
    </div>
  );
};

export default Alert;
