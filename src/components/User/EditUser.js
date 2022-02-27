import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const EditUser = (props) => {
  const { id } = useParams();
  const { register, handleSubmit, errors, setValue } = useForm();

  useEffect(() => {
    axios.get(`https://gorest.co.in/public/v2/users/${id}`).then((result) => {
      setValue("id", result.data.id);
      setValue("name", result.data.name);
      setValue("email", result.data.email);
      setValue("gender", result.data.gender);
      setValue("status", result.data.status);
    }).catch((error) => {
      console.log(error)
    });
  }, [id]);

  const onSubmit = (data) => {
    axios
      .put(`https://gorest.co.in/public/v2/users/${id}`, data, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization:
            "Bearer f340579f37fcaea560247e95863c7dbfb19b1ea79621837b085f39120a8dfdec ",
        },
      })
      .then((result) => {
        console.log("result", result.data); // in console update list
        props.history.push("/");
      });
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Update User</h5>
        <div className="card-text">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>ID</label>
              <input
                type="text"
                readOnly
                className="form-control"
                name="id"
                ref={register({ required: true })}
              />
               <small className="form-text">
                {errors.id}
              </small>
            </div>
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
            <Link to="/" className="btn btn-primary" style={{marginTop:'5px'}}>
              <i className="fa fa-arrow-left" ></i>{" "}
              Cancel
            </Link>
            &nbsp;
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

export default EditUser;
