import { useState } from "react";
import Loader from "./Loader";
import defaultImg from "../assets/defaultImg.png";
import { Link } from "react-router-dom";

function BookCard({ book }) {
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  const coverImg =
    book.cover_edition_key === undefined
      ? defaultImg
      : `https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-L.jpg`;

  return (
    <div className="grid lg:grid-cols-2 gap-5 p-6 border-2 border-black/10 rounded-lg shadow-lg ">
      <div className="w-full h-full flex items-center justify-center">
        {!isImgLoaded && <Loader />}
        <img
          src={coverImg}
          alt={book.title}
          className={`${
            isImgLoaded ? "block" : "hidden"
          } rounded-lg h-fit object-cover`}
          onLoad={() => setIsImgLoaded(true)}
        />
      </div>

      <div className=" flex items-start justify-around flex-col ">
        <div>
          <h2 className="lg:text-2xl font-bold text-left lg:mb-1">
            {book.title}
          </h2>
          <p className="font-medium text-black/40">By: {book.author_name[0]}</p>
        </div>
        <div className="flex flex-col w-full gap-3">
          <Link
            className="bg-lime-500 w-full py-2 border-2 border-gray-300 rounded-lg text-white font-semibold text-center"
            to={`/book/${book.key.split("/")[2]}`}
          >
            Details
          </Link>
          <button className="bg-cyan-500 w-full py-2 border-2 border-gray-300 rounded-lg text-white font-semibold">
            Add To Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookCard;