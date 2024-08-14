"use client";
import React from "react";
import Image from "next/image";
import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

function Header() {
  const iconVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 1,
        ease: [0, 0.71, 0.2, 1.01],
      },
    }),
  };

  return (
    <section className=" overflow-hidden container mx-auto flex flex-col px-12 py-4 justify-center items-center  min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 mt-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <h1 className="text-transparent bg-gradient-to-r bg-clip-text from-emerald-300 to-emerald-950 mb-4 text-4xl lg:text-5xl font-extrabold">
              Hello, I'm Febriansyah
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <p className="text-gray-300 text-lg lg:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              atque deleniti aperiam tempora, odit nobis fuga minima. Culpa, vel
              aperiam rem unde itaque maxime nihil eos, non magnam soluta
              necessitatibus.
            </p>
          </motion.div>
          <div className="flex space-x-4 mt-11">
            {/* <div className="relative">
              <div className="absolute inset-0 bg-emerald-300 rounded-lg blur-xl "></div>
              <a
                href=""
                className="relative bg-emerald-700 hover:bg-emerald-900 text-white py-4 px-10 rounded"
              >
                Hire Me
              </a>
            </div> */}

            <motion.a
              custom={0}
              initial="hidden"
              animate="visible"
              variants={iconVariants}
              href="#"
              className=" border-2 border-emerald-700 hover:bg-emerald-900 text-white py-4 px-10 rounded-full"
            >
              Download CV
            </motion.a>

            <div className="flex flex-x-4 gap-4 ">
              <motion.a
                custom={1}
                initial="hidden"
                animate="visible"
                variants={iconVariants}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-5xl  text-white hover:text-gray-600" />
              </motion.a>
              <motion.a
                custom={2}
                initial="hidden"
                animate="visible"
                variants={iconVariants}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-5xl text-white hover:text-blue-400" />
              </motion.a>

              <motion.a
                custom={3}
                initial="hidden"
                animate="visible"
                variants={iconVariants}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-5xl text-white hover:text-pink-400" />
              </motion.a>
            </div>
          </div>
        </div>
        <div className="col-span-5 flex items-center justify-center mt-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="relative flex items-center justify-center"
            style={{ width: 400, height: 400 }}
          >
            {/* Lingkaran latar belakang */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full bg-gradient-to-r from-slate-700 to-slate-900 rounded-full"></div>
            </div>

            {/* Gambar */}
            <div className="relative z-10 ">
              <Image
                src="/images/me-diff.png"
                alt="me image"
                className="rounded-full size-auto "
                width={400}
                height={400}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Header;
