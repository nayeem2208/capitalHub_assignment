import React from 'react'
import budhaImage from "../../../public/buddha-8054755_640-removebg-preview 1.png";
import groupImage from "../../../public/Group 1.png";
import greenLine from "../../../public/Vector 1.png";
function BudhaComponent() {
  return (
    <div
      style={{
        background:
          "linear-gradient(0deg, rgba(255,255,255,0.5) 0%, rgba(192, 232, 100,0.3) 100%)",
      }}
      className="w-full flex pt-12"
    >
      <div className="w-3/5 text-left flex justify-center  items-center">
        <div className="w-4/5">
          <h1 className="text-5xl font-bold tracking-wide leading-[1.4]">
            Make someone’s Life <br /> by giving of yours
          </h1>
          <img
            src={greenLine}
            alt="green line"
            className="w-32"
            style={{ position: "absolute", left: 380 }}
          />
          <p className="mt-6 font-medium tracking-wide">
            Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit
            proin risus Sit purus ante dictum in malesuada id.Lorem{" "}
          </p>
          <button className="bg-mainColor rounded-full py-4 px-6 text-white my-6">
            Donate Now
          </button>
          <div className="w-3/6 flex mt-2">
            <img
              src={groupImage}
              alt="image of group of users"
              className="w-3/6"
            />{" "}
            <button className="bg-mainColor text-white text-sm font-semibold w-2/5 rounded-md mx-2">
              2.5k Helped
            </button>
          </div>
        </div>
      </div>
      <div
        className="w-2/5  flex justify-center"
        style={{ position: "relative" }}
      >
        <div
          className="rounded-full w-8 h-8"
          style={{
            backgroundColor: "#E0EFDD",
            position: "absolute",
            top: 120,
            left: 50,
          }}
        ></div>
        <div
          className="w-4/6   rounded-full"
          style={{ backgroundColor: "#d2e8b5" }}
        >
          <img src={budhaImage} alt="image of budha" />
        </div>
        <div
          className="rounded-full w-8 h-8"
          style={{
            backgroundColor: "#E0EFDD",
            position: "absolute",
            top: 50,
            right: 80,
          }}
        ></div>
      </div>
    </div>
  );
}


export default BudhaComponent
