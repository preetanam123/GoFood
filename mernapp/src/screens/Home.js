import React from "react";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
// import { use } from '../../backend/Routes/DisplayData'

const Home = () => {
  const [foodCategory, setFoodCategory] = useState([]);
  const [fooditems, setFooditems] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    response = await response.json();
    // console.log(response[0], response[1])
    setFooditems(response[0]);
    setFoodCategory(response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div>
          <div className="w-100">
            <div
              id="carouselExampleInterval"
              className="carousel slide"
              data-bs-ride="carousel"
              style={{ objectFit: "contain !important" }}
            >
              <div className="carousel-inner" id="carousel">
                <div
                  className="carousel-caption d-none d-md-block"
                  style={{ zIndex: "10" }}
                >
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
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        {
          foodCategory !== []
            ? foodCategory.map((data) => {
                return (
                  <div className="row mb-3">
                    <div key={data._id} className="fs-3 m-3">
                      {data.CategoryName}
                    </div>
                    <hr />
                    {fooditems !== [] ? (
                      fooditems
                        .filter(
                          (item) => item.CategoryName === data.CategoryName
                        )
                        .map((filterItems) => {
                          return (
                            <div
                              key={filterItems._id}
                              className="col-12 col-md-6 col-lg-3"
                            >
                              <Card
                                foodName={filterItems.name}
                                item={filterItems}
                                options={filterItems.options[0]}
                                ImgSrc={filterItems.img}
                              ></Card>
                            </div>
                          );
                        })
                    ) : (
                      <div>No data</div>
                    )}
                  </div>
                );
              })
            : ""

          // <Card />
        }
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
