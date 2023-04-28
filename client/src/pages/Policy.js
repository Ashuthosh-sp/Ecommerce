import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/privacy.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>
            When you use our services, you’re trusting us with your information.
            We understand this is a big responsibility and work hard to protect
            your information and put you in control. This Privacy Policy is
            meant to help you understand what information we collect, why we
            collect it, how we use tour information and how you can update,
            manage, export, and delete your information.
          </p>
          <p>
            We collect information to provide better services to all our users —
            from figuring out basic stuff like which language you speak to more
            complex things like which services you might like. The information
            we collect, and how that information is used, depends on how you use
            our services and how you manage your privacy controls.
          </p>
         
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
