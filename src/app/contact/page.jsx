"use client";
import Navbar from "../components/Navbar";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
export default function Contact() {
  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-slate-900 overflow-hidden flex items-center justify-center">
        <div className="container mx-auto flex flex-col justify-center items-center min-h-screen sm:px-4">
          <div className="mt-20 flex flex-col sm:flex-row w-full sm:max-w-4xl sm:space-x-12 items-center sm:items-start sm:px-4">
            {/* Form Section */}
            <div className="w-full mt-10 md:mt-0 lg:mt-0 border-b sm:border-b-0 sm:border-r border-gray-900/10 pb-12 sm:pb-0 sm:pr-12  px-4 py-2 rounded  ">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 0.8,
                  duration: 0.8,
                }}
              >
                <h2 className="text-2xl text-emerald-400 font-semibold leading-7">
                  Personal Information
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-300">
                  Please fill out this form to contact me.
                </p>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 ">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium leading-6 text-gray-100"
                    >
                      First name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className=" block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-700 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium leading-6 text-gray-100"
                    >
                      Last name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-700 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-100"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-700 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-6 ">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium leading-6 text-gray-100"
                    >
                      Message
                    </label>
                    <div className="mt-2">
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-700 sm:text-sm sm:leading-6"
                        placeholder="Write your message here..."
                      ></textarea>
                    </div>
                  </div>
                  <div className="sm:col-span-6 flex justify-center">
                    <div className="mt-3">
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-full border-2 border-emerald-700 py-2 px-4 text-sm font-semibold text-white shadow-sm hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-700"
                      >
                        Send Email
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Address Section */}

            <div className="w-full sm:w-1/2 mt-20 sm:pl-12 px-4 py-2 lg:mt-28 md:mt-28 ">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 0.9,
                  duration: 0.8,
                }}
              >
                {" "}
                <h2 className="text-xl text-emerald-400 font-semibold leading-7 ">
                  Address Information
                </h2>
                <p className="mt-1 text-base leading-6 text-gray-300">
                  Jln. Darussalam
                  <br />
                  Kelurahan Motoboi Kecil
                  <br />
                  Kotamobagu City, Sulawesi Utara
                  <br />
                  Indonesia
                </p>
                <h2 className="text-xl text-emerald-400 font-semibold leading-7  mt-6">
                  Contact Information
                </h2>
                <p className="mt-1 text-base leading-6 text-gray-300">
                  Email: febriansyah.amu1@gmail.com
                </p>
                <a
                  href="https://wa.me/+6289695015643"
                  className="inline-flex rounded-full border-2 border-emerald-700 text-white py-2 px-4 hover:bg-emerald-950 mt-2"
                >
                  <FaWhatsapp size={25} className="" /> Whatsapp Me
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
