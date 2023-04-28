import { useState } from "react";
import React from "react";
import Layout from "../../components/Layout/Layout";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../styles/AuthStyles.css"
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();
  //form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        password,
        phone,
        address,
        answer,
      });
      if (res.data.success) {
        toast.success("Successfully created!");
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error has occurred");
    }
  };
  return (
    <>
      <Layout title={"Register to ShopKart"}>
        <div className="form-container">
          <h1> Register Page</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter Your Name"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Enter Your Password"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter Your Phone"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter Your Address"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                onChange={(e) => setAnswer(e.target.value)}
                value={answer}
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter Your Birth Place"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Register;
