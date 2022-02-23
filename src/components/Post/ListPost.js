import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const ListPost = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get("https://gorest.co.in/public/v2/posts").then((result) => {
      setPost(result.data);
    });
  }, []);


  return (
    <div>
      {post.map((row) => (
        <div class="list-group">
          <a
            key={row.id}
            href="#"
            class="list-group-item list-group-item-action"
            aria-current="true"
          >
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">{row.title}</h5>
            </div>
            <p class="mb-1">{row.body}</p>
            <div>
              <Link to={`post/update/${row.id}`}>
                <i className="fa fa-edit" style={{ color: "blue" }}></i>
              </Link>
              <Link to={`post/delete/${row.id}`}>
                <i
                  className="fa fa-trash"
                  style={{ color: "red", marginLeft: "12px" }}
                ></i>
              </Link>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default ListPost;
