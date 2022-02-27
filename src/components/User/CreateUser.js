import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const CreateUser = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://gorest.co.in/public/v2/users", data, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization:
            "Bearer f340579f37fcaea560247e95863c7dbfb19b1ea79621837b085f39120a8dfdec ",
        },
      })
      .then((result) => {
        console.log("result", result.data); // in console add list
        props.history.push("/");
      }).catch((error) => {
        console.log(error)
      });
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Create User</h5>
        <div className="card-text">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                ref={register({ required: true })}
              />
              <small className="form-text text-danger">
                {errors.name && "Name Invalid"}
              </small>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                ref={register({ required: true })}
              />
              <small className="form-text text-danger">
                {errors.email && "Email Invalid"}
              </small>
            </div>
            <div className="form-group">
              <label>Gender</label>
              <input
                type="text"
                className="form-control"
                name="gender"
                ref={register({ required: true })}
              />
              <small className="form-text text-danger">
                {errors.gender && "Gender Invalid"}
              </small>
            </div>
            <div className="form-group">
              <label>Status</label>
              <input
                type="text"
                className="form-control"
                name="status"
                ref={register({ required: true })}
              />
              <small className="form-text text-danger">
                {errors.status && "Gender Invalid"}
              </small>
            </div>
            <div style={{ marginTop: "5px" }}>
              <button type="submit" className="btn btn-dark">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
