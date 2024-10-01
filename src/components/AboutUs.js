import React from "react";

const AboutUs = () => {
  return (
    <div className="py-20 bg-gray-100 mt-16"> {/* Added mt-16 for margin-top */}
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-4">Who I Am</h3>
            <p>
              Welcome to Chims Web Dev! I am a dedicated professional committed to delivering top-notch web and mobile solutions tailored to meet the unique needs of my clients.
            </p>
          </div>
          <div className="bg-white p-8 shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-4">My Expertise</h3>
            <p>
              I specialize in web development and mobile applications. My mission is to help businesses grow and succeed in the digital landscape by providing innovative solutions that drive results.
            </p>
          </div>
          <div className="bg-white p-8 shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-4">My Commitment</h3>
            <p>
              Whether you are a small startup or an established enterprise, I am here to partner with you on your journey to success. Let's create something great together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
