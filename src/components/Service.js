import React from "react";

const Services = () => {
  return (
    <div id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-4">Mobile Applications</h3>
            <p>
              We design and develop high-quality mobile applications tailored to your business needs.
              Our apps are user-friendly, performant, and built using the latest technologies to provide
              a seamless experience across both iOS and Android platforms.
            </p>
            <ul className="text-left mt-4">
              <li>• Basic Mobile App: R4000</li>
              <li>• E-commerce Mobile App: R8000</li>
              <li>• Custom Mobile App: R10000</li>
            </ul>
          </div>
          <div className="bg-white p-8 shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-4">Web Development</h3>
            <p>Robust web applications using the latest technologies.</p>
            <ul className="text-left mt-4">
              <li>• Basic Website: R2000</li>
              <li>• E-commerce Website: R5000</li>
              <li>• Custom Web Application: R4000</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
