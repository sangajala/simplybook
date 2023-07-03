import React from "react";
import FooterContainer from "./FooterContainer";

const Footer = () => {
  return (
    <div>
      <div style={{ flexdirection: "Row" }}>
        <FooterContainer heading={"Opening Hours"} />
        <FooterContainer heading={"Sriram angajala"} />
        <FooterContainer heading={"Contact us"} />
      </div>
    </div>
  );
};

export default Footer;
