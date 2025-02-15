'use client'
import React from "react";
import { FaPlay } from "react-icons/fa";
import Image from "next/image";

import { motion } from "framer-motion";
import {SlideLeft} from "@/app/Utility/animation";

interface SlideVariants {
  hidden: {
    opacity: number;
    y: number;
  };
  visible: {
    opacity: number;
    y: number;
    transition: {
      duration: number;
      delay: number;
    };
  };
}

function Hero() {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
        {/* Brand Info */}
        <div className="flex flex-col justify-center py-14 md:py-0 font-playfair">
          <div className="text-center md:text-left">
            <motion.h1
              variants={SlideLeft(0.6)}
              initial="hidden"
              animate="visible"
          
              className="text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-normal"
            >
              Gym Gives you the perfect{" "}
              <span className="text-primary">Health</span>
            </motion.h1>
            <p className="text-gray-600 xl:max-w-[500px]">
              It is a long established fact that a reader will be by readable
              content of a page when are the best product.
            </p>
          </div>
          {/* Button section */}
          <div className="flex justify-center gap-8 md:justify-start !mt-4">
            <button className="primary-btn flex items-center gap-2">
              Order Now
            </button>
            <button className="flex justify-center items-center gap-2">
              <FaPlay></FaPlay> Watch Now
            </button>
          </div>
        </div>
        {/* Hero Image */}
        <div className="flex justify-center items-center">
          <Image
            src="/img/dumbell.png"
            width={500}
            height={500}
            alt="dumbell"
            className="w-[350px] md:w-[550px] xl:w-[700px] drop-shadow"
          ></Image>
        </div>
      </div>
    </section>
  );
}

export default Hero;
