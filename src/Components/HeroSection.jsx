import { useState } from "react";
import { useBooks } from "../Contexts/BookContext";
import Loader from "./Loader";

function HeroSection() {
  const { allBooks } = useBooks();
  const [imgLoaded, setImgLoaded] = useState(false);

  console.log(allBooks);
  if (!allBooks || allBooks.length === 0) return null;
  const cover_key = allBooks[0].cover_edition_key;

  const coverImg = `https://covers.openlibrary.org/b/olid/${cover_key}-L.jpg`;

  console.log(coverImg);
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
      <div className=" flex items-center justify-center lg:justify-end">
        {!imgLoaded && <Loader />}
        <img
          src={coverImg}
          alt={allBooks[0].title || "Book Cover"}
          className={`h-full max-w-fit rounded-xl ${
            imgLoaded ? "block" : "hidden"
          }`}
          onLoad={() => setImgLoaded(true)}
        />
      </div>
    </div>
  );
}

export default HeroSection;
