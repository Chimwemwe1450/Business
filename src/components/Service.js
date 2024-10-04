import React from "react";

const Services = () => {
  return (
    <div className="flex mx-auto justify-center items-center">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 m-8">
        {/* Mobile Applications */}
        <div className="flex flex-col rounded-2xl w-full xl:w-96 bg-white text-gray-700 shadow-xl">
          <figure className="flex justify-center items-center">
            <img
              src="https://tailwind-generator.b-cdn.net/images/card-generator/tailwind-card-generator-card-preview.png"
              alt="Card Preview"
              className="rounded-t-2xl"
            />
          </figure>
          <div className="flex flex-col p-8 h-full">
            <div className="text-3xl text-center font-bold pb-6">Mobile Applications</div>
            <div className="text-center text-lg pb-12">Mobile applications for a fair price</div>
            <div className="flex flex-col gap-3 text-base">
              <div className="flex flex-row gap-3">
                <div className="text-green-600"></div>
                <div className="font-bold">Basic Mobile App: R4000</div>
              </div>
              <div className="flex flex-row gap-3">
                <div className="text-green-600"></div>
                <div>E-commerce Mobile App: R8000</div>
              </div>
              <div className="flex flex-row gap-3">
                <div className="text-green-600"></div>
                <div>Custom Mobile App: R10000</div>
              </div>
            </div>
            <div className="flex flex-grow"></div>
          </div>
        </div>

        {/* Web Development */}
        <div className="flex flex-col rounded-2xl w-full xl:w-96 bg-white text-gray-700 shadow-xl">
          <figure className="flex justify-center items-center">
            <img
              src="https://tailwind-generator.b-cdn.net/images/card-generator/tailwind-card-generator-card-preview.png"
              alt="Card Preview"
              className="rounded-t-2xl"
            />
          </figure>
          <div className="flex flex-col p-8 h-full">
            <div className="text-3xl text-center font-bold pb-6">Web Development</div>
            <div className="text-center text-lg pb-12">Robust web applications</div>
            <div className="flex flex-col gap-3 text-base">
              <div className="flex flex-row gap-3">
                <div className="text-green-600"></div>
                <div className="font-bold">Basic Website: R2000</div>
              </div>
              <div className="flex flex-row gap-3">
                <div className="text-green-600"></div>
                <div>E-commerce Website: R5000</div>
              </div>
              <div className="flex flex-row gap-3">
                <div className="text-green-600"></div>
                <div>Custom Web Application: R4000</div>
              </div>
            </div>
            <div className="flex flex-grow"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
