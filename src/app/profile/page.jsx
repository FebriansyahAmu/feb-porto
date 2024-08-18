"use client";

import Navbar from "../components/Navbar";
import Image from "next/image";
import { FaHtml5, FaPhp, FaReact, FaWindows } from "react-icons/fa";
import { SiNextdotjs, SiDotnet } from "react-icons/si";
import { motion } from "framer-motion";

export default function profile() {
  const timelineVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.5,
        duration: 0.8,
        ease: [0, 0.71, 0.2, 1.01],
      },
    }),
  };
  return (
    <>
      <Navbar />
      <section className="overflow-hidden min-h-screen bg-slate-900">
        <div className="container mx-auto flex flex-col px-12 py-4 justify-center items-center min-h-screen">
          <div className="grid grid-cols-1  lg:grid-cols-12">
            <div className="col-span-7 flex items-center">
              <motion.div
                custom={0}
                initial="hidden"
                animate="visible"
                variants={timelineVariants}
              >
                <ol className="relative border-s border-gray-200 z-0 mt-40 md:mt-12 lg:mt-8 ">
                  <motion.div
                    custom={1}
                    initial="hidden"
                    animate="visible"
                    variants={timelineVariants}
                  >
                    <li className="mb-10 ms-4">
                      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-3 -start-1.5 border border-white"></div>
                      <h3 className="text-3xl font-semibold text-emerald-400">
                        About Me
                      </h3>
                      <p className="mb-4 text-base font-normal text-gray-500">
                        I am a passionate and dedicated web and desktop
                        application developer, focusing on creating dynamic and
                        user-friendly applications. With a solid educational
                        background and a strong skill set, I strive to deliver
                        high-quality and efficient solutions.
                      </p>
                    </li>
                  </motion.div>
                  <motion.div
                    custom={2}
                    initial="hidden"
                    animate="visible"
                    variants={timelineVariants}
                  >
                    <li className="mb-10 ms-4">
                      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-3 -start-1.5 border border-white"></div>
                      <h3 className="text-3xl font-semibold text-emerald-400">
                        Education
                      </h3>
                      <p className=" text-base font-normal text-gray-500">
                        Informatics Engineering, Manado State University
                      </p>
                      <p className="mb-4 text-base font-normal text-gray-500">
                        GPA, 3.67
                      </p>
                    </li>
                  </motion.div>
                  <motion.div
                    custom={3}
                    initial="hidden"
                    animate="visible"
                    variants={timelineVariants}
                  >
                    <li className="mb-10 ms-4">
                      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-3 -start-1.5 border border-white"></div>
                      <h3 className="text-3xl font-semibold text-emerald-400">
                        Skills
                      </h3>
                      <div className="mt-4">
                        <div className="flex space-x-4">
                          <FaHtml5
                            className="text-gray-200"
                            title="HTML5"
                            size={35}
                          />
                          <FaPhp
                            className="text-gray-200"
                            title="PHP"
                            size={35}
                          />
                          <SiNextdotjs
                            className="text-gray-200"
                            title="Next.js"
                            size={35}
                          />
                          <SiDotnet
                            className="text-gray-200"
                            title=".NET Framework"
                            size={35}
                          />
                        </div>
                      </div>
                    </li>
                  </motion.div>
                </ol>
              </motion.div>
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
              >
                <Image
                  src="/images/sec-person.png"
                  alt="sec"
                  className="size-auto"
                  width={380}
                  height={380}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
