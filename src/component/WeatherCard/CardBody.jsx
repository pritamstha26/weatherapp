import React from "react";
import { IoIosPartlySunny } from "react-icons/io";
export default function CardBody() {
  return (
    <section className="">
      <div className="grid  grid-cols-2 py-5">
        <div className="col-span-1 flex justify-start gap-3 items-center">
          <IoIosPartlySunny />
          <p>
            12 &deg;<sup>F</sup>
          </p>
        </div>
        <div className="col-span-1">
          <h4 className="text-sm md:text-lg">Rainy</h4>
          <h3 className="text-sm md:text-lg">Feels Like 35</h3>
        </div>
      </div>
      <div>
        <p className="text-lg">There will be mostly sunny sky</p>
      </div>
    </section>
  );
}
