const AddUsers = () => {
  return (
    <div>
      <div className="row mb-3">
        <label htmlFor="userid" className="col-sm-2 col-form-label">
          User ID
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="userid"
            placeholder="User ID"
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="username" className="col-sm-2 col-form-label">
          User Name
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="User Name"
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="companyid" className="col-sm-2 col-form-label">
          Company ID
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="companyid"
            placeholder="Company ID"
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="companyname" className="col-sm-2 col-form-label">
          Company Name
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="companyname"
            placeholder="Company Name"
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="userpermission" className="col-sm-2 col-form-label">
          User Permission
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control form-control"
            id="userpermission"
            placeholder="User Permission"
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="usertype" className="col-sm-2 col-form-label">
          User Type
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control form-control"
            id="usertype"
            placeholder="User Type"
          />
        </div>
      </div>
      <br />
      <button className="btn btn-secondary">Save</button>
    </div>
  );
};

export default AddUsers;
