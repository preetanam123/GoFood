import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
  const arr = [1, 2, 3, 4, 5, 6];


  let options = props.options;
  let priceOptions = Object.keys(options);


  return (
    <>
      <div
        className="card mt-3 m-2"
        style={{ width: "18rem", maxHeight: "500px" , minHeight: "500px"}}
      >
        <img
          src={props.ImgSrc}
          className="card-img-top p-2"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{props.foodName}</h5>
          {/* <p className="card-text">This is text</p> */}
          {/* <Link to="" className="btn btn-primary">
            Go somewhere
          </Link> */}
          <div className="container w-100">
            <select className="m-2 h-100 bg-success rounded">
              {arr.map((index) => (
                <option key={index} value={index}>
                  {index}
                </option>
              ))}
            </select>
            <select className="m-2 h-100 bg-success rounded">
            {priceOptions.map((i) => {
                return <option key={i} value={i}>{i}</option>
              })}
            </select>
            <div className="d-inline h-100 fs-5">Total Price:</div>
          </div>
        </div>
      </div>
    </>
  );
}
