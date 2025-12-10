"use client";

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Here you would typically send the data to your backend or email service
    console.log(data);
    alert("Thank you for your message! I will get back to you soon.");
    reset();
  };

  const contactMethods = [
    {
      icon: <FaEnvelope className="text-yellow-400 text-2xl" />,
      title: "Email",
      value: "ehsanthedev@gmail.com",
      href: "mailto:ehsanthedev@gmail.com",
    },
    {
      icon: <FaPhone className="text-yellow-400 text-2xl" />,
      title: "Phone",
      value: "+92 308 9499815",
      href: "tel:+923089499815",
    },
    {
      icon: <FaMapMarkerAlt className="text-yellow-400 text-2xl" />,
      title: "Location",
      value: "Faisalabad, Pakistan",
      href: "https://maps.google.com/?q=Karachi",
    },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin className="text-white text-xl" />,
      href: "https://linkedin.com/in/yourprofile",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub className="text-white text-xl" />,
      href: "https://github.com/yourusername",
      label: "GitHub",
    },
    {
      icon: <FaTwitter className="text-white text-xl" />,
      href: "https://twitter.com/yourhandle",
      label: "Twitter",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white py-12 px-4">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Get In <span className="text-yellow-400">Touch</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>
        </motion.div>

        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/3"
            >
              <div className="bg-gray-800 rounded-lg p-8 h-full">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

                <div className="space-y-6">
                  {contactMethods.map((method, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="mt-1">{method.icon}</div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-300">
                          {method.title}
                        </h3>
                        <a
                          href={method.href}
                          className="text-white hover:text-yellow-400 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {method.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12">
                  <h3 className="text-lg font-medium text-gray-300 mb-4">
                    Connect with me
                  </h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        whileHover={{ y: -3 }}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-700 hover:bg-yellow-400 hover:text-gray-900 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                        aria-label={social.label}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:w-2/3"
            >
              <div className="bg-gray-800 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-gray-300 mb-2"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        {...register("name", { required: "Name is required" })}
                        className={`w-full bg-gray-700 border ${
                          errors.name ? "border-red-500" : "border-gray-600"
                        } rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400`}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-gray-300 mb-2"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                          },
                        })}
                        className={`w-full bg-gray-700 border ${
                          errors.email ? "border-red-500" : "border-gray-600"
                        } rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-gray-300 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      {...register("subject", {
                        required: "Subject is required",
                      })}
                      className={`w-full bg-gray-700 border ${
                        errors.subject ? "border-red-500" : "border-gray-600"
                      } rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400`}
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-gray-300 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      {...register("message", {
                        required: "Message is required",
                      })}
                      className={`w-full bg-gray-700 border ${
                        errors.message ? "border-red-500" : "border-gray-600"
                      } rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400`}
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="container mx-auto mt-20"
        >
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.8791279980155!2d73.0476649744871!3d31.417456152221444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392243d2e41ca815%3A0x8826e4c2fbae327b!2sCloudify%20Vaping%20Lounge!5e0!3m2!1sen!2s!4v1747307580348!5m2!1sen!2s"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="filter grayscale hover:grayscale-0 transition-all"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </>
  );
}
