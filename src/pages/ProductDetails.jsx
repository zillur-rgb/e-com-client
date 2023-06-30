import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/cart";
import { toast } from "react-hot-toast";
const ProductDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  //initalp details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);

  const [cart, setCart] = useCart();
  //getProduct
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getSimilarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };
  //get similar product
  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCart = async (product) => {
    await setCart([...cart, product]);
    localStorage.setItem("cart", JSON.stringify([...cart, product]));
    toast.success("Item Added to cart");
  };
  return (
    <Layout>
      <div className="container">
        <div className="row mt-2 py-5 ">
          <div className="col-md-6 px-5">
            <img
              src={`http://localhost:8080/api/v1/product/product-photo/${product._id}`}
              className="card-img-top"
              alt={product.name}
              width={"350px"}
            />
          </div>
          <div className="col-md-6 p-5">
            <h1 className="mb-5">Product Details</h1>
            <h5 className="pb-2">
              <span className="fw-bold">Name :</span> {product.name}
            </h5>
            <h5 className="pb-2">
              <span className="fw-bold">Description :</span>{" "}
              {product.description}
            </h5>
            <h5 className="pb-2">
              <span className="fw-bold">Price :</span> {product.price}
            </h5>
            <h5 className="pb-2">
              <span className="fw-bold">Category :</span>{" "}
              {product?.category?.name}
            </h5>
            <button
              className="btn btn-secondary ms-1 mt-5"
              onClick={() => handleCart(product)}
            >
              ADD TO CART
            </button>
          </div>
        </div>
        <hr />
        <div className="row mt-5">
          <h5>Similar Products</h5>
          {relatedProducts.length < 1 && (
            <p className="text-center">No Similar Products found</p>
          )}
          <div className="d-flex flex-wrap">
            {relatedProducts?.map((p) => (
              <div key={p._id} className="card m-2" style={{ width: "18rem" }}>
                <img
                  src={`http://localhost:8080/api/v1/product/product-photo/${p?._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">
                    {p.description.substring(0, 30)}...
                  </p>
                  <p className="card-text"> $ {p.price}</p>
                  <button
                    className="btn btn-primary ms-1"
                    onClick={() => navigate(`/product/${p.slug}`)}
                  >
                    More Details
                  </button>
                  <button className="btn btn-secondary ms-1">
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
