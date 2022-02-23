import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const EditPost = (props) => {
  const { id } = useParams();
  const { register, handleSubmit, errors, setValue } = useForm();

  useEffect(() => {
    axios.get(`https://gorest.co.in/public/v2/posts/${id}`).then((result) => {
      setValue("user_id", result.data.user_id);
      setValue("title", result.data.title);
      setValue("body", result.data.body);
    });
  }, [id]);

  const onSubmit = (data) => {
    axios
      .put(`https://gorest.co.in/public/v2/posts/${id}`, data, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization:
            "Bearer f340579f37fcaea560247e95863c7dbfb19b1ea79621837b085f39120a8dfdec ",
        },
      })
      .then((result) => {
        console.log("result", result.data); // in console update list
        props.history.push("/post");
      });
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Update Post</h5>
        <div className="card-text">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>ID</label>
              <input
                type="text"
                readOnly
                className="form-control"
                name="user_id"
                ref={register({ required: true })}
              />
              <small className="form-text">{errors.user_id}</small>
            </div>
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                className="form-control"
                name="title"
                ref={register({ required: true })}
              />
              <small className="form-text text-danger">
                {errors.title && "Title Invalid"}
              </small>
            </div>
            <div className="form-group">
              <label>Body</label>
              <textarea
                name="body"
                cols="30"
                rows="10"
                className="form-control"
                ref={register({ required: true })}
              ></textarea>
              <small className="form-text text-danger">
                {errors.body && "Body Invalid"}
              </small>
            </div>
            <Link
              to="/post"
              className="btn btn-primary"
              style={{ marginTop: "5px" }}
            >
              <i className="fa fa-arrow-left"></i> Cancel
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

export default EditPost;
