import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  let navigate  = useNavigate()

    const [data, setData] = useState({ 
    name: "",
    email: "",
    password: "",
    geolocation: "",})

    const handleSubmit = async (e) =>{
      console.log( JSON.stringify({
        name: data.name,
        email: data.email,
        password: data.password,
        location: data.geolocation,
        })
)
        e.preventDefault();
        const response  = await fetch('http://localhost:5000/api/creatuser' ,
        {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: data.name,
              email: data.email,
              password: data.password,
              location: data.geolocation,
                                  })

        }
        
        )
        const json = await response.json()
        console.log(json)

        if(json.success !== true){
            alert("Enter Valid Credentials")

        }
    
    else{
      navigate('/login')

    }

    } 
    const handleChange = (e) => {
        setData({...data,[e.target.name]:e.target.value})
    }
  return (
    <>
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name :
          </label>
          <input type="text" name="name" className="form-control" value={data.name} onChange={handleChange}/>
        </div>
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
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address :
          </label>
          <input type="text" name="geolocation" className="form-control" value={data.geolocation} onChange={handleChange}/>
        </div>
        <button type="submit" className="m-3 btn btn-success text-white">
          Submit
        </button>
        <p className="m-3">Already a User?</p>
        <Link to="/login" className="m-3 btn btn-danger">Login</Link>
      </form>
      </div>
    </>
  );
}
