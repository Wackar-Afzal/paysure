"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

const AboutForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      phone: Yup.string().required("Phone number is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setIsSubmitting(true);

      try {
        const response = await fetch("/api/email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            to: "fasilaliprince123@gmail.com", // Change this to the recipient email
            subject: `New Lead from ${values.name}`,
            text: `Name: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone}\nWebsite: ${values.message}`,
          }),
        });

        const result = await response.json();
        if (response.ok) {
          toast.success("Your message has been sent successfully!");
          resetForm();
        } else {
          toast.error(`Error: ${result.message}`);
        }
      } catch (error) {
        toast.error("Failed to send message. Please try again.");
      }

      setIsSubmitting(false);
    },
  });

  return (
    <div>
      <div className="flex flex-col justify-center items-center w-full px-Xpad py-Ypad md:p-MXpad">
        <div className="flex flex-col justify-center items-center space-y-[25px] w-formWidth p-[32px] md:p-0 md:w-full">
          <div className="flex flex-col space-y-[0.4rem] w-full">
            <h3 className="text-center text-grey">
              Join us and unlock a world of possibilities.
            </h3>
          </div>

          <form onSubmit={formik.handleSubmit} className="w-full flex flex-col space-y-[13.6px]">
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                {...formik.getFieldProps("name")}
                disabled={isSubmitting}
              />
              <div className="text-red text-sm">
                {formik.touched.name && formik.errors.name ? formik.errors.name : ""}
              </div>
            </div>

            <div>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter email address"
                {...formik.getFieldProps("email")}
                disabled={isSubmitting}
              />
              <div className="text-red text-sm">
                {formik.touched.email && formik.errors.email ? formik.errors.email : ""}
              </div>
            </div>

            <div>
              <label htmlFor="phone">Phone</label>
              <input
                type="number"
                name="phone"
                placeholder="Enter Phone"
                {...formik.getFieldProps("phone")}
                disabled={isSubmitting}
              />
              <div className="text-red text-sm">
                {formik.touched.phone && formik.errors.phone ? formik.errors.phone : ""}
              </div>
            </div>

            <div>
              <label htmlFor="message">Your Message</label>
              <textarea
                name="message"
                placeholder="Enter Your Message ..."
                {...formik.getFieldProps("message")}
                disabled={isSubmitting}
              />
              <div className="text-red text-sm">
                {formik.touched.message && formik.errors.message ? formik.errors.message : ""}
              </div>
            </div>

            <button
              type="submit"
              className="text-[18px] flex justify-center items-center w-[100%] h-[2.765rem] min-w-[6.875rem] bg-primary rounded-full text-white border border-primary transition-all duration-200 ease-linear hover:bg-[#fffefe] hover:text-black hover:border-[#000000]"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AboutForm;
