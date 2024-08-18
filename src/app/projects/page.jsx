"use client";
import React from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Projects() {
  const cards = [
    {
      title: "Archive Management System",
      description:
        "a desktop archiving system using the .NET framework, featuring an elegant and user-friendly interface. The application streamlines document management and retrieval, and simplifies monitoring and tracking reports, ensuring an efficient and intuitive user experience.",
      technologies: ".NET Frameworks, MySql Database",
      image: "/images/projects/siArsip.jpg",
    },
    // {
    //   title: "Another tech acquisition 2021",
    //   description: "Summary of another big tech acquisition in 2021.",
    //   image: "/images/img-2.jpg",
    // },
    // {
    //   title: "More tech news",
    //   description: "Highlights from technology news in 2021.",
    //   image: "/images/img-3.jpg",
    // },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [startPosition, setStartPosition] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
  });

  const handleMouseDown = (e) => {
    setStartPosition(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const currentPosition = e.clientX;
    const difference = startPosition - currentPosition;

    if (difference > 50) {
      handleNext();
      setIsDragging(false);
    } else if (difference < -50) {
      handlePrev();
      setIsDragging(false);
    }
  };
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  //Motions

  return (
    <>
      <Navbar />

      <section className="overflow-hidden min-h-screen bg-slate-900 flex items-center">
        <div
          {...swipeHandlers}
          className="relative w-full max-w-4xl mx-auto mt-24"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{
              delay: 0.8,
              duration: 0.5,
            }}
            className="flex flex-col sm:flex-row items-center text-white rounded-lg overflow-hidden"
          >
            <div className="w-full sm:w-1/2 p-6">
              <h2 className="text-4xl text-emerald-400 font-semibold mb-4">
                {cards[currentIndex].title}
              </h2>
              <p className="mb-6">{cards[currentIndex].description}</p>
              <p className="text-lg font-semibold">Frameworks</p>
              <p className="font-semibold text-emerald-400">
                {cards[currentIndex].technologies}
              </p>
            </div>
            <div className="w-full sm:w-1/2 flex justify-center">
              <motion.img
                src={cards[currentIndex].image}
                alt={cards[currentIndex].title}
                className="w-[400px] h-[400px] lg:w-[380px] lg:h-[380px] object-contain"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.9, duration: 1 }}
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.9,
              duration: 0.9,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="flex justify-center space-x-2 mt-4"
          >
            <button
              onClick={handlePrev}
              className="px-4 py-2 border-2 border-emerald-700  text-white rounded-full hover:bg-emerald-950"
            >
              <FaArrowLeft size={15} />
            </button>
            <button
              onClick={handleNext}
              className="px-4 py-2 border-2 border-emerald-700  text-white rounded-full hover:bg-emerald-950"
            >
              <FaArrowRight size={15} />
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
