import defaultImg from "../assets/defaultImg.png";

function useBookImg(cover_edition_key) {
  const coverImg =
    cover_edition_key === undefined
      ? defaultImg
      : `https://covers.openlibrary.org/b/olid/${cover_edition_key}-L.jpg`;

  return coverImg;
}

export default useBookImg;
