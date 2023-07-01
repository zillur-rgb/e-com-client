import React from "react";
import Layout from "../components/Layout/Layout";
import { useAuth } from "../context/auth";
import headerImage from "../assets/header.jpg";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
const Homepage = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout title={"Welcome to E-Com"}>
      <div className="row m-5 p-5 d-flex align-items-center">
        <div className="col-md-2"></div>
        <div className="col-md-4">
          <div className="row">
            <h1 className="headT">We bring style to your life!</h1>
            <h5 className="py-3">
              We peovide all kind of fashion and everyday product with fresh
              model and new trends. A natura, eco-friendly fiber that has
              far-reaching benefits
            </h5>
            <Link to={"/all-products"}>
              <btn className="btn btn-lg btn-primary">
                Explore Store <AiOutlineArrowRight />
              </btn>
            </Link>
          </div>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-3">
          <div className="col-md-2"></div>
          <img src={headerImage} height={"556px"} />
        </div>
      </div>
    </Layout>
  );
};

export default Homepage;
