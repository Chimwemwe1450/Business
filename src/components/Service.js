import React from "react";

const Services = () => {
  return (
    
<div className="flex mx-auto justify-center items-center">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 m-8">
        {/* Basic Plan */}
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
            <div className="text-center text-lg pb-12">
          Mobile applications for a fair price 
            </div>
            <div className="flex flex-col gap-3 text-base">
              <div className="flex flex-row gap-3">
                <div className="text-green-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
                <div className="font-bold">Basic Mobile App: R4000</div>
              </div>
              <div className="flex flex-row gap-3">
                <div className="text-green-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
                <div> E-commerce Mobile App: R8000</div>
              </div>
              <div className="flex flex-row gap-3">
                <div className="text-green-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
                <div>Custom Mobile App: R10000</div>
              </div>
            </div>
            <div className="flex flex-grow"></div>
            <div className="flex pt-10">
          

            </div>
          </div>
        </div>

   
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
            <div className="text-center text-lg pb-12">
            Robust web applications 
            </div>
            <div className="flex flex-col gap-3 text-base">
              <div className="flex flex-row gap-3">
                <div className="text-green-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
                <div className="font-bold">Basic Website: R2000</div>
              </div>
              <div className="flex flex-row gap-3">
                <div className="text-green-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
                <div> E-commerce Website: R5000</div>
              </div>
              <div className="flex flex-row gap-3">
                <div className="text-green-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
                <div>Custom Web Application: R4000</div>
              </div>
            </div>
            <div className="flex flex-grow"></div>
            <div className="flex pt-10">
        
            </div>
          </div>
      </div>
       </div>
      </div>
    
    // <div id="services" className="py-20 bg-gray-100">
    //   <div className="container mx-auto text-center">
    //     <h2 className="text-3xl font-bold mb-8">Our Services</h2>
    //     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    //       <div className="bg-white p-8 shadow-md rounded-lg">
    //         <h3 className="text-xl font-bold mb-4">Mobile Applications</h3>
    //         <p>
    //           We design and develop high-quality mobile applications tailored to your business needs.
    //           Our apps are user-friendly, performant, and built using the latest technologies to provide
    //           a seamless experience across both iOS and Android platforms.
    //         </p>
    //         <ul className="text-left mt-4">
    //           <li>• Basic Mobile App: R4000</li>
    //           <li>• E-commerce Mobile App: R8000</li>
    //           <li>• Custom Mobile App: R10000</li>
    //         </ul>
    //       </div>
    //       <div className="bg-white p-8 shadow-md rounded-lg">
    //         <h3 className="text-xl font-bold mb-4">Web Development</h3>
    //         <p>Robust web applications using the latest technologies.</p>
    //         <ul className="text-left mt-4">
    //           <li>• Basic Website: R2000</li>
    //           <li>• E-commerce Website: R5000</li>
    //           <li>• Custom Web Application: R4000</li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Services;
