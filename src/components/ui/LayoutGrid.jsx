"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
// import { cn } from "@/utils/cn";
import { cn } from "../../utils/cn";
// import Image from "next/image";

export const LayoutGrid = ({ cards }) => {
  const [selected, setSelected] = useState(null);
  const [lastSelected, setLastSelected] = useState(null);

  const handleClick = (card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full h-full p-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3  max-w-7xl mx-auto gap-3 md:gap-4 lg:gap-4 mxl:gap-4 2xl:gap-4">
      {cards.map((card, i) => (
        <div
          key={i}
          className={cn(card.className, "flex justify-center items-center")}
        >
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-hidden",
              selected?.id === card.id
                ? "rounded-lg cursor-pointer absolute inset-0 h-1/2 w-1/2 sm:w-1/2  md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col top-[1970px] sm:top-[1900px] md:top-[2270px] lg:top-[2270px] xl:top-[2270px] 2xl:top-[2270px]"
                : lastSelected?.id === card.id
                ? "z-40 bg-white rounded-xl h-[200px] w-[260px] sm:h-[200px] sm:w-[200px] md:h-full md:w-full"
                : "bg-white rounded-xl h-[200px] w-[260px] sm:h-[200px] sm:w-[200px] md:h-full md:w-full"
            )}
            layout
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <BlurImage card={card} />
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute h-full w-full left-0 bg-black opacity-0 z-10 md:top-[1900px]",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
      />
    </div>
  );
};

const BlurImage = ({ card }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <img
      src={card.thumbnail}
      height="500"
      width="500"
      onLoad={() => setLoaded(true)}
      className={cn(
        "object-cover object-top absolute inset-0 h-full w-full transition duration-200",
        loaded ? "blur-none" : "blur-md"
      )}
      alt="thumbnail"
    />
  );
};

const SelectedCard = ({ selected }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className="absolute inset-0 h-full w-full bg-black opacity-60 z-10"
      />
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative px-8 pb-4 z-[70]"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};