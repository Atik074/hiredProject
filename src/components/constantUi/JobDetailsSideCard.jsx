import React from "react";
import { Link } from "react-router-dom";

const JobDetailsSideCard = () => {
  const cards = [
    {
      img: "https://shorturl.at/cUQVZ",
      alt: "Foundation",
      title: "Your logic building is your foundation",
      btnText: "Learn",
    },
    {
      img: "https://shorturl.at/ma4hP",
      alt: "Priority",
      title: "To catch fundamental is our priority",
      btnText: "Achieve",
    },
    {
      img: "https://shorturl.at/D26Jt",
      alt: "Problem Solving",
      title: "Problem solving skill gives opportunity",
      btnText: "Test",
    },
    {
      img: "https://shorturl.at/aIlIJ",
      alt: "Communication Skill",
      title: "Communication skill opens a new window",
      btnText: "Learn",
    },
    {
      img: "https://shorturl.at/uFa8Y",
      alt: "Leadership Mind",
      title: "Your leadership mind helps to grow",
      btnText: "Gain",
    },
  ];

  return (
    <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[60%] mx-auto grid gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-2xl shadow-lg bg-gray-800 group"
        >
          <img
            className="w-full h-[220px] sm:h-[260px] object-cover transition-transform duration-500 group-hover:scale-110"
            src={card.img}
            alt={card.alt}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col items-center justify-center p-6 transition-all duration-500 opacity-0 group-hover:opacity-100">
            <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-bold text-white mb-4">
              {card.title}
            </h3>
            <Link
              to=""
              className="bg-red-600 px-6 sm:px-10 py-2 rounded-full text-lg sm:text-xl text-white font-medium hover:bg-red-700 transition"
            >
              {card.btnText}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobDetailsSideCard;
