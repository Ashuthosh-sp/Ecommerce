import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - ShopKart App"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/aboutus.jpg"
            alt="Imagenotfound"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            ShopKart is a smart e-commerce website solution. Using ShopKart as
            your website and sales tools will let your customers know who you
            are and what you do. Why does bizwizIQ call ShopKart a smart
            e-commerce solution? It comes pre-loaded with thousands of products
            from various vendors. Vendors work with bizwizIQ to keep supplier
            data up to date in the bizwizIQ master database. When a catalog
            update is available, simply update your ShopKart catalog from the
            master database. It's never been easier to keep your website and
            Order Manager up to date.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
