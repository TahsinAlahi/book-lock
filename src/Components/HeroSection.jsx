import { useState } from "react";
import { useBooks } from "../Contexts/BookContext";
import CardBookImg from "./CardBookImg";

function HeroSection() {
  const { allBooks } = useBooks();

  if (!allBooks || allBooks.length === 0) return null;

  return (
    <div className="lg:w-full h-[calc(100dvh-88px)] grid lg:grid-cols-2 gap-8 items-center justify-between bg-slate-200/50 rounded-xl lg:px-20 lg:py-4 shadow-xl">
      <div className="flex items-start justify-between flex-col gap-5 lg:max-h-96 lg:h-1/2">
        <h1 className="lg:text-5xl font-bold leading-snug text-left">
          Books to freshen up your bookshelf
        </h1>
        <button className="px-6 py-3 text-white bg-green-600 rounded-lg font-semibold">
          View The List
        </button>
      </div>
      <CardBookImg book={allBooks[0]} className="lg:justify-end" />
    </div>
  );
}

export default HeroSection;
