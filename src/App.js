import React from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import AddPost from "./components/Post/AddPost";
import DeletePost from "./components/Post/DeletePost";
import EditPost from "./components/Post/EditPost";
import ListPost from "./components/Post/ListPost";
import CreateUser from "./components/User/CreateUser";
import DeleteUser from "./components/User/DeleteUser";
import EditUser from "./components/User/EditUser";
import ListUser from "./components/User/ListUser";

function App() {
  return (
    <BrowserRouter>   
      <nav className=" container-fluid navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink to="/" className="navbar-brand">
          Modul Management
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active" style={{ color: "white" }}>
              <NavLink
                className="nav-link"
                activeStyle={{ fontWeight: "bold" }}
                to="/"
                exact
              >
                List User
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeStyle={{ fontWeight: "bold" }}
                to="/user/create"
              >
                Add User
              </NavLink>
            </li>
            <li className="nav-item active" style={{ color: "white" }}>
              <NavLink
                className="nav-link"
                activeStyle={{ fontWeight: "bold" }}
                to="/post"
                exact
              >
                List Post
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeStyle={{ fontWeight: "bold" }}
                to="/post/create"
              >
                Add Post
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <br />
        <Route path="/" exact component={ListUser}></Route>
        <Route path="/user/create" exact component={CreateUser}></Route>
        <Route path="/user/delete/:id" exact component={DeleteUser}></Route>
        <Route path="/user/update/:id" exact component={EditUser}></Route>
        <Route path="/post" exact component={ListPost}></Route>
        <Route path="/post/create" exact component={AddPost}></Route>
        <Route path="/post/update/:id" exact component={EditPost}></Route>
        <Route path="/post/delete/:id" exact component={DeletePost}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
