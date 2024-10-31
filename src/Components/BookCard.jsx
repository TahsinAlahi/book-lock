import { Link } from "react-router-dom";
import CardBookImg from "./CardBookImg";

function BookCard({ book }) {
  return (
    <div className="grid lg:grid-cols-2 gap-5 p-6 border-2 border-black/10 rounded-lg shadow-lg ">
      <CardBookImg book={book} />
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
