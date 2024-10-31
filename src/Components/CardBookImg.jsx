import { useState } from "react";
import useBookImg from "../Hooks/useBookImg";
import Loader from "./Loader";

function CardBookImg({ book }) {
  const [isImgLoaded, setIsImgLoaded] = useState(false);

  const coverId = book?.cover_i ?? book?.covers?.[0];

  // const coverId =
  //   book?.cover_i ??
  //   (Array.isArray(book?.covers) && book.covers.length > 0
  //     ? book.covers[0]
  //     : undefined);

  const coverImg = useBookImg(coverId);

  return (
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
  );
}

export default CardBookImg;
