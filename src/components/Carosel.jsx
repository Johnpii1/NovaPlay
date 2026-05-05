import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Carousel({ title }) {
  const rowRef = useRef();

  const scrollLeft = () => {
    rowRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    rowRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="relative px-5 py-6">

      {/* TITLE */}
      <h2 className="text-white text-xl font-bold mb-4">
        {title}
      </h2>

      {/* LEFT ARROW (MORE VISIBLE) */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/80 text-white p-3 rounded-full z-20 hover:bg-black"
      >
        <FaChevronLeft size={20} />
      </button>

      {/* RIGHT ARROW (MORE VISIBLE) */}
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/80 text-white p-3 rounded-full z-20 hover:bg-black"
      >
        <FaChevronRight size={20} />
      </button>

      {/* ROW (HIDE SCROLLBAR HERE) */}
      <div
        ref={rowRef}
        className="
          flex gap-4 overflow-x-auto scroll-smooth w-full
          scrollbar-hide
        "
        style={{
          scrollbarWidth: "none", // Firefox
        }}
      >

        {/* HIDE SCROLLBAR (Chrome/Safari) */}
        <style>
          {`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>

        {/* 5 EMPTY BOXES */}
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="min-w-full sm:min-w-[80%] md:min-w-[60%] lg:min-w-[40%] h-[300px] bg-gray-800 rounded-xl flex-shrink-0"
          />
        ))}

      </div>
    </div>
  );
}