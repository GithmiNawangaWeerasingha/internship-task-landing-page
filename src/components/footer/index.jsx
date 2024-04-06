import React from "react";
import logoimage from "../../assets/images/logoimage.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-primary text-center text-white xl:text-left">
        <div className="sm:mx-14 mx-6 py-10 text-center md:text-left">
          <div className="grid-1 grid gap-8 md:grid-cols-1 xl:grid-cols-2">
            <div className="">
              <img
                src={logoimage}
                alt="hoobank"
                className="w-[238.89px] h-[36.11px]"
              />
              <p className="text-left mt-7 max-w-[438px] max-h-[57px]">
                Your goal is our target. Not anything in between. We use online
                marketing platforms and tools to achieve single objective - your
                business results.
              </p>
            </div>
            <div className="grid-1 gap-8 grid md:grid-cols-2">
              <div>
                <h6 className="mb-4 text-left flex font-semibold text-[21px] uppercase justify-start">
                  Our Technologies
                </h6>
                <p className="mb-4 text-left">
                  <a href="#!">ReactJS</a>
                </p>
                <p className="mb-4 text-left">
                  <a href="#!">Gatsby</a>
                </p>
                <p className="mb-4 text-left">
                  <a href="#!">NextJS</a>
                </p>
                <p className="text-left">
                  <a href="#!">NodeJS</a>
                </p>
              </div>
              <div>
                <h6 className="mb-4 text-left flex font-semibold text-[21px] uppercase justify-start">
                  Our Services
                </h6>
                <p className="mb-4 text-left flex justify-start">
                  Social media Marketing
                </p>
                <p className="mb-4 text-left flex justify-start">
                  Web & Mobile App Development
                </p>
                <p className="mb-4 text-left flex justify-start">
                  Data & Analytics
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center pb-8">
          <hr className="w-[90%] md:w-[80%] xl:w-[50%] mx-auto align-middle items-center" />
          <p className="font-normal mt-3">Privacy Policy | Terms & Conditions</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
