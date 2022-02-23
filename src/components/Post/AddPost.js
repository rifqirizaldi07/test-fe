
// not done

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddPost = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const { id } = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get("https://gorest.co.in/public/v2/posts").then((result) => {
      setPost(result.data);
    });
  }, [id]);

  const onSubmit = (data) => {
    axios
      .post("https://gorest.co.in/public/v2/posts", data, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization:
            "Bearer f340579f37fcaea560247e95863c7dbfb19b1ea79621837b085f39120a8dfdec ",
        },
      })
      .then((result) => {
        console.log("result", result.data); // in console add list
        props.history.push("/post");
      });
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Create Post</h5>
        <div className="card-text">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="dropdown show">
              <a
                class="btn btn-secondary dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Select User
              </a>
              {post.map((row) => (
                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <a class="dropdown-item" href="#">
                    {row.name}
                  </a>
                </div>
              ))}
            </div>
            <div className="form-group" style={{marginBottom: '10px'}}>
            <h6 className="card-title">Body</h6>
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

export default AddPost;
