import React from "react";

export default function Carousel() {
  return (
    <div>
    <div className="w-100">
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{"objectFit" : "contain !important"}}
      >
        <div className="carousel-inner" id="carousel">
          <div className="carousel-caption d-none d-md-block" style={{zIndex: "10"}}>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-success" type="submit">
                Search
              </button>
            </form>
          </div>

          <div className="carousel-item active" data-bs-interval="10000">
            <img
              src="https://source.unsplash.com/random/300x300?pizza"
              className="d-block w-90 m-auto"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="https://source.unsplash.com/random/300x300?pastry"
              className="d-block w-90 m-auto"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/300x300?burger"
              className="d-block w-90 m-auto"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>
    </div>
  );
}
