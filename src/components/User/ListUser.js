import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ListUser = () => {
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState([]);
 
  useEffect(() => {
    axios.get("https://gorest.co.in/public/v2/users").then((result) => {
      setUser(result.data);
    }).catch((error) => {
      console.log(error)
    });
  }, []);

  
  const Search = id => {
    const newResult = user.filter(row => row.name.toLowerCase().includes(id));
    console.log('newResult', newResult)
    setSearch(newResult)
  }
  
  return (
    <div className="container-fluid">
    <div className="input-group mb-3" style={{justifyContent: 'center'}}>
      <input type="text" placeholder="Search" onChange={event => Search(event.target.value)}
      style={{width: '30%', borderRadius: '5px'}}/>
      
    </div>
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
        {search.map((row) => (
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
    </div>
  );
};

export default ListUser;
