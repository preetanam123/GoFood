import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Login() {
  let navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(
      JSON.stringify({
        
        email: data.email,
        password: data.password,
       
      })
    );

    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    });
    const json = await response.json();
    console.log(json);

    if (json.success !== true) {
      alert("Enter Valid Credentials");
    }
    else{
      localStorage.setItem("authToken", json.authToken)
      console.log(localStorage.getItem("authToken"))
      navigate('/')
    }
  };
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={data.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={data.password}
              onChange={handleChange}
            />
          </div>
          
          <button type="submit" className="m-3 btn btn-success text-white">
            Submit
          </button>
          <p className="m-3">Don't have an account?</p>
          <Link to="/createuser" className="m-3 btn btn-danger">
            Sign Up
          </Link>
        </form>
      </div>
    </>
  );
}


