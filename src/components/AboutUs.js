import React from "react";

const AboutUs = () => {
  return (

    
    <div class="flex mx-auto justify-center items-center">
      
    <div class="grid grid-cols-1 xl:grid-cols-3 gap-24 m-8">
        <div class="flex flex-col rounded-2xl w-full xl:w-96 bg-[#ffffff] text-[#374151] shadow-xl">
            <div class="flex flex-col p-8 h-full">
                <div class="text-3xl  font-bold pb-6">Who I Am</div>
                <div class="  text-lg pb-12">Welcome to Chims Web Dev! I am a dedicated professional committed to delivering top-notch web and mobile solutions tailored to meet the unique needs of my clients.</div>
               
             
            </div>
        </div>
        <div class="flex flex-col rounded-2xl w-full xl:w-96 bg-[#ffffff] text-[#374151] shadow-xl">
            <div class="flex flex-col p-8 h-full">
                <div class="text-3xl  font-bold pb-6">My Expertise</div>
                <div class="  text-lg pb-12">I specialize in web development and mobile applications. My mission is to help businesses grow and succeed in the digital landscape by providing innovative solutions that drive results.</div>
            
            </div>
        </div>
        <div class="flex flex-col rounded-2xl w-full xl:w-96 bg-[#ffffff] text-[#374151] shadow-xl">
            <div class="flex flex-col p-8 h-full">
                <div class="text-3xl  font-bold pb-6">My Commitment</div>
                <div class="  text-lg pb-12">Whether you are a small startup or an established enterprise, I am here to partner with you on your journey to success. Let's create something great together!</div>
         
                
            </div>
        </div>
    </div>
</div>
  );
};

export default AboutUs;
