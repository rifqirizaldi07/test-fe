import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ListUser = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get("https://gorest.co.in/public/v2/users").then((result) => {
      setUser(result.data);
    });
  }, []);

  return (
    <table className="table">
      <thead>
        <tr>
          <th className="text-ceter">Name</th>
          <th className="text-ceter">Email</th>
          <th className="text-ceter">Gender</th>
          <th className="text-ceter">Status</th>
        </tr>
      </thead>
      <tbody>
        {user.map((row) => (
          <tr key={row.id}>
            <th className="text-ceter">{row.name}</th>
            <th className="text-ceter">{row.email}</th>
            <th className="text-ceter">{row.gender}</th>
            <th className="text-ceter">{row.status}</th>
            <Link to={`user/update/${row.id}`}>
            <i className="fa fa-edit" style={{color: 'blue'}}></i>
            </Link>
            <Link to={`user/delete/${row.id}`}>
            <i className="fa fa-trash" style={{color: 'red'}}></i>
            </Link>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListUser;
