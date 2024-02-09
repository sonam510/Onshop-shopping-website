import React, { useEffect, useState } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
import "./Home.css";
import Product from "./Product";
import axios from "./axios";
function Home() {
  const [products, setProducts] = useState();
  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get("/products/get");
      setProducts(data);
    };
    fetchdata();
  }, []);

  return (
    <div className="home">
      <div className="home__container">
        <div
          id="carouselExampleDark"
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div
              className="carousel-item active myslide"
              data-bs-interval="2000"
            >
              <img
                src="https://console.nandilathgmart.com/media/block/Sub_Banner_30-06-01.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item myslide" data-bs-interval="2000">
              <img src="banner1.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item myslide" data-bs-interval="2000">
              <img src="banner2.png" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
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
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="home_row">
          {products &&
            products?.data.map((product) => (
              <Product
                id={product._id}
                key={product._id}
                image={product.imageURL}
                title={product.title}
                price={product.price}
                rating={product.rating}
              />
            ))}
        </div>

        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="true"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner bottomSlider">
            <div className="carousel-item active">
              {/* <img src="..." className="d-block w-100" alt="..."> */}
              <div className="container">
                <div className="row">
                  <div className="col">
                    <Product
                      id="13455344"
                      image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71cFpnm0b6S._UX679_.jpg"
                      title="LookMark Men's Poly Cotton Digital Printed Stitched Half Sleeve Shirt."
                      rating={5}
                      price={440}
                    />
                  </div>
                  <div className="col">
                    <Product
                      id="03984933"
                      image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/51CoL71WG9L._AC_UL480_FMwebp_QL65_.jpg"
                      title="Molimen Cotton Men's Casual Kurta for Men with Full Sleeve Shirt for Men"
                      rating={5}
                      price={499}
                    />
                  </div>
                  <div className="col responsivecol">
                    <Product
                      id="324566543"
                      image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/51QeCqn2+9L._AC_UL480_FMwebp_QL65_.jpg"
                      title="BLIVE Men's Round Neck Full Sleeve T-Shirt | Printed White T-Shirt"
                      rating={3}
                      price={299}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              {/* <img src="..." className="d-block w-100" alt="..."> */}
              <div className="container">
                <div className="row">
                  <div className="col ">
                    <Product
                      id="8734733"
                      image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71ZSYJXb0GL._UY695_.jpg"
                      title="Corstyle Light Weight Sports Outdoors Casual Canvas Sneakers Gyming Walking."
                      rating={4}
                      price={565}
                    />
                  </div>
                  <div className="col">
                    <Product
                      id="832949"
                      image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61sFkBzCGZL._UY695_.jpg"
                      title="Rhysley Premium Leather Tan Lace up Closed Toe Low Arch Soft."
                      rating={3}
                      price={2599}
                    />
                  </div>
                  <div className="col responsivecol">
                    <Product
                      id="89349"
                      image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61odR70rgML._AC_UL480_FMwebp_QL65_.jpg"
                      title="ASIAN Men's Sports Running,Walking & Gym Shoes with Eva Sole"
                      rating={2}
                      price={455}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">

              <div className="container">
                <div className="row">
                  <div className="col">
                    <Product
                      id="6534245"
                      image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61KNBTw4K8S._AC_UL480_FMwebp_QL65_.jpg"
                      title="Dennis Lingo Men's Shirt"
                      rating={4}
                      price={660}
                    />
                  </div>
                  <div className="col">
                    <Product
                      id="98347328"
                      image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/810DylkfGCL._AC_UL480_FMwebp_QL65_.jpg"
                      title="Amazon Brand - Symbol Men's Cotton Regular Kurta."
                      rating={4}
                      price={699}
                    />
                  </div>
                  <div className="col responsivecol">
                    <Product
                      id="3432400"
                      image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81muhDy35yL._UY879_.jpg"
                      title="Jompers Men's Cotton Silk Straight Kurta."
                      rating={5}
                      price={777}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev bottomSliderbtn"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next bottomSliderbtn"
            type="button"
            data-bs-target="#carouselExampleIndicators"
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
    // </div>
  );
}

export default Home;
