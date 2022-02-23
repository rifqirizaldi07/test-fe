import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const DeleteUser = (props) => {
  const { id } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get(`https://gorest.co.in/public/v2/users/${id}`).then((result) => {
      setUser(result.data);
    });
  }, [id]);

  const handleRemovePost = () => {
    axios
      .delete(`https://gorest.co.in/public/v2/users/${id}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization:
            "Bearer f340579f37fcaea560247e95863c7dbfb19b1ea79621837b085f39120a8dfdec ",
        },
      })
      .then((result) => {
        console.log("result", result.data); // in console delete list
        props.history.push("/");
      });
  };

  return (
    <div>
      <h2>
        Anda Yakin Ingin Menghapus Data <strong>{user?.name}</strong>?
      </h2>
      <br />
      <div className="btn-group">
        <Link to="/" className="btn btn-primary">
          <i className="fa fa-arrow-left"></i> Cancel
        </Link>
        <button
          onClick={handleRemovePost}
          className="btn btn-danger"
          style={{ marginLeft: "10px", borderRadius: "5px" }}
        >
          Delete <i className="fa fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default DeleteUser;
