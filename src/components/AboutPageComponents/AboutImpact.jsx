import React from "react";
import { icons } from "../../assets/icons";

const AboutImpact = () => {
  return (
    <div className="flex space-x-[6rem] xl:flex-col xl:space-x-[0rem] xl:gap-8 p-[4rem]  ">
      <div className="w-[45rem] xl:w-full">
        <img src={"./aboutImg1.png"} alt="" />
      </div>

      <div className="flex flex-col space-y-10">
        <div className="flex flex-col space-y-5">
          <h3 className="font-semibold text-left">Our Impact Number</h3>
          <h6 className="text-grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a
            augue est praesent at risus in dolor viverra facilisis. Vivamus
            fermentum lorem neque, non congue.
          </h6>
        </div>

        <div className="flex flex-col space-y-8  sm:space-y-4">
          <div className="flex space-x-3 sm:flex-col sm:space-x-0 sm:space-y-4  ">
            <div className="flex space-x-2 w-full">
              {icons.idea}
              <div>
                <h3 className="font-semibold text-left">250 +</h3>
                <h6>Professional Doctors</h6>
              </div>
            </div>

            <div className="flex space-x-2 w-full">
              {icons.people}
              <div>
                <h3 className="font-semibold text-left">250 +</h3>
                <h6>Professional Doctors</h6>
              </div>
            </div>
          </div>

          <div className="flex space-x-3 sm:flex-col sm:space-x-0 sm:space-y-4">
            <div className="flex space-x-2 w-full">
              {icons.lesson}
              <div>
                <h3 className="font-semibold text-left">250 +</h3>
                <h6>Professional Doctors</h6>
              </div>
            </div>

            <div className="flex space-x-2 w-full">
              {icons.lesson}
              <div>
                <h3 className="font-semibold text-left">250 +</h3>
                <h6>Professional Doctors</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutImpact;
