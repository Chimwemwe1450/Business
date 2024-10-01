import React from "react";

const ContactUs = () => {
  return (
    <div id="contact" className="py-20 bg-gray-100 mt-16"> 
      <div className="container mx-auto max-w-lg text-center">
        <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
        <div className="bg-white p-8 shadow-md rounded-lg">
          <p className="text-lg mb-4">
            You can reach us at the following address:
          </p>
          <address className="text-lg font-semibold">
            Chims Web Dev <br />
            Foreshore, Cape Town <br />
            Phone: 081 478 7353<br />
            Email: chimwemwechilambe@gmail.com
          </address>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
