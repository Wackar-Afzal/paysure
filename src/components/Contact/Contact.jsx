
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import RoomIcon from '@mui/icons-material/Room';
const ContactSection = () => {
  return (
    <section id="contact" className="p-[4rem] bg-lightGrey md:p-[2rem]">
      <div className=" ">
        <div className="flex lg:flex-col space-y-4">
          <div className="p-4 ">
            <h2 className="text-left font-bold mb-4 text-secondary">Get in Touch</h2>
            <p className="mb-6">
              We’re here to help! Reach out to us for any queries related to medical billing services.
            </p>
            <div className="space-y-4 ">
              <p className="flex items-center">
                <MailOutlineIcon  className=' text-secondary mr-2'  />
                <strong className='text-secondary'>Email:</strong>
                <a
                  href="mailto:info@paysure.site"
                  className="ml-1 text-primary hover:underline"
                >
                  info@paysure.site
                </a>
              </p>
              <p className="flex ">
                <RoomIcon className='text-secondary'/>
                <strong className='text-secondary'>Address:</strong>
                <span className="ml-1 text-primary ">
                  6004 Westchester Park Dr Unit T2, Collage Park, Maryland, 20740, USA
                </span>
              </p>
            </div>
          </div>

          <div className="contact-form-container p-4 bg-white rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Your Message"
                required
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="5"
              ></textarea>
              <button
                type="submit"
                className="btn"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
