"use client"

import React, { useState } from "react";

const AboutForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      alert("Please fill out all fields before sending.");
      return;
    }
    
    const mailtoLink = `mailto:someone@example.com?subject=Message from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center w-full px-Xpad py-Ypad md:p-MXpad">
        <div className="flex flex-col justify-center items-center space-y-[25px] w-formWidth p-[32px] md:p-0 md:w-full">
          <div className="flex flex-col space-y-[0.4rem] w-full">
            <h5 className="text-center text-black font-semibold">
              Welcome to <span className="text-primary">Company</span>
            </h5>
            <h6 className="text-center text-grey">
              Join us and unlock a world of possibilities.
            </h6>
          </div>

          <div className="w-full flex flex-col space-y-[13.6px]">
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="email">Email Address</label>
              <input type="email" name="email" placeholder="Enter email address" value={formData.email} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="phone">Phone</label>
              <input type="number" name="phone" placeholder="Enter Phone" value={formData.phone} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="message">Your Message</label>
              <textarea name="message" placeholder="Enter Your Message ..." value={formData.message} onChange={handleChange} />
            </div>
          </div>

          <button 
            className="text-[18px] flex justify-center items-center w-[100%] h-[2.765rem] min-w-[6.875rem] bg-primary rounded-full text-white border border-primary transition-all duration-200 ease-linear hover:bg-[#fffefe] hover:text-black hover:border-[#000000]"
            onClick={handleSubmit}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutForm;
