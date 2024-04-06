import React from "react";
import headerimage from "../../assets/images/headerimage.png";
import Button from "../button";

const Header = () => {
  return (
    <>
      <div className="w-full relative">
        <img src={headerimage} alt="headerimage" className="w-full" />
        <div
          className="xl:max-w-[672px] xl:absolute xl: left-14 bottom-10 xl:py-8 md:py-8 py-5 sm:px-14 px-6"
          style={{
            background:
              "linear-gradient(256.73deg, #1CBDDD 27.86%, #4DCA79 100%)",
          }}
        >
          <h1 className="font-bold text-4xl sm:text-5xl leading-[36px] sm:leading-[48px] xl:w-[576px] capitalize text-white">
            We crush your competitors, goals, and sales records - without the B.S.
          </h1>
          <Button text="Get free consultation"/>
        </div>
      </div>
    </>
  );
};

export default Header;
