import React from "react";
import Layout from "../components/Layout/Layout";
import { useAuth } from "../context/auth";
const HomePage = () => {
  const [auth, setAuth] = useAuth();
  return (
    <>
      <Layout title={"ShopKart App"}>
        <div className="row"></div>
      </Layout>
    </>
  );
};

export default HomePage;
