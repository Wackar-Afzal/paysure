'use client'
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import RoomIcon from "@mui/icons-material/Room";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { toast } from 'react-toastify';

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values,{ resetForm }) => {
      setIsSubmitting(true);
      setResponseMessage("");

      try {
        const response = await fetch("/api/email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            to: "surepay41@gmail.com", // Change this to the recipient email
            subject: `Query from ${values.name}`,
            text: `Name: ${values.name}\nEmail: ${values.email}\nMessage: ${values.message}`,
          }),
        });

        const result = await response.json();
        if (response.ok) {
          setResponseMessage("Your message has been sent successfully!");
          toast.success("Your message has been delivered successfully!")
          resetForm();
        } else {
          setResponseMessage(`Error: ${result.message}`);
        }
      } catch (error) {
        setResponseMessage("Failed to send message. Please try again.");
        toast.error("Failed to send message. Please try again.");
      }

      setIsSubmitting(false);
    },
  });

  return (
    <section id="contact" className="p-[4rem] bg-lightGrey md:p-[2rem]">
      <div>
        <div className="flex justify-between lg:flex-col gap-[5rem]">
          <div className="p-4 w-[70vw]">
            <h2 className="text-left font-bold mb-4 text-secondary">
              Get in Touch
            </h2>
            <p className="mb-6">
              We’re here to help! Reach out to us for any queries related to
              medical billing services.
            </p>
            <div className="space-y-4">
              <p className="flex items-center">
                <MailOutlineIcon className="text-secondary mr-2" />
                <strong className="text-secondary">Email:</strong>
                <a
                  href="mailto:info@paysure.site"
                  className="ml-1 text-primary hover:underline"
                >
                  info@paysure.site
                </a>
              </p>
              <p className="flex">
                <RoomIcon className="text-secondary" />
                <strong className="text-secondary">Address:</strong>
                <span className="ml-1 text-primary">
                  6004 Westchester Park Dr Unit T2, College Park, Maryland,
                  20740, USA
                </span>
              </p>
            </div>
          </div>

          <div className="contact-form-container p-4 bg-white rounded-2xl shadow-lg w-full">
            <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
            <form className="space-y-4 " onSubmit={formik.handleSubmit}>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...formik.getFieldProps("name")}
                />
                <div className="min-h-[20px] text-red">
                  {formik.touched.name && formik.errors.name ? formik.errors.name : ""}
                </div>
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...formik.getFieldProps("email")}
                />
                <div className="min-h-[20px] text-red">
                  {formik.touched.email && formik.errors.email ? formik.errors.email : ""}
                </div>
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="5"
                  {...formik.getFieldProps("message")}
                />
                <div className="min-h-[20px] text-red">
                  {formik.touched.message && formik.errors.message ? formik.errors.message : ""}
                </div>
              </div>

              <button type="submit" className="btn w-full">
                {isSubmitting?"Sending...":"Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
