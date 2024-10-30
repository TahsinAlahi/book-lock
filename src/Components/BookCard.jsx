import { useBooks } from "../Contexts/BookContext";

function BookCard() {
  const { allBooks } = useBooks();

  const book = allBooks[0];

  const isbn = book.availability.isbn;

  const coverImg = `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`;

  return <div>{/* <img src={"coverImg"} alt={book.title} /> */}</div>;
}

export default BookCard;
