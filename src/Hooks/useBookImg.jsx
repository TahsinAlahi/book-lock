import defaultImg from "../assets/defaultImg.png";

function useBookImg(cover) {
  const coverImg =
    cover === undefined || cover === null
      ? defaultImg
      : `https://covers.openlibrary.org/b/id/${cover}-L.jpg`;

  return coverImg;
}

export default useBookImg;
