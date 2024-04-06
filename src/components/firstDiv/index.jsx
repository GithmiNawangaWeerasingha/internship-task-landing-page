import React from "react";
import img1 from "../../assets/images/img1.png";
import Button from "../button";

const FirstDiv = () => {
  return (
    <>
      <div className="sm:px-14 px-6 py-10">
        <div className="grid md:grid-cols-2">
          <div className="flex justify-center items-center">
            <img src={img1} alt="Computer" />
          </div>
          <div className="flex justify-center md:justify-start items-center">
            <div className="text-center md:text-left">
              <h1 className="font-semibold text-[27px] text-primary">
                Web & Mobile App Development
              </h1>
              <p className="leading-[19.36px] font-normal text-base my-3">
                Your web and mobile Apps are pieces of the puzzle to grow your
                business. We use frameworks which tailor content and engagement
                methods to respond to different intents shown by your potential
                customers who interact with your business online.
              </p>
              <Button text="LEARN MORE" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstDiv;
