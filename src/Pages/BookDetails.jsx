import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";
import CardBookImg from "../Components/CardBookImg";
import BookInfo from "../Components/BookInfo";
import { useBooks } from "../Contexts/BookContext";
import { useEffect } from "react";

function BookDetails() {
  const { book_key } = useParams();
  const { isLoading, currentBook, getBooks } = useBooks();

  useEffect(() => {
    getBooks(book_key);
  }, [book_key]);

  if (isLoading || Object.keys(currentBook).length === 0) {
    return <Loader />;
  }

  return (
    <main className="grid grid-cols-2 gap-5">
      <CardBookImg book={currentBook} />
      <BookInfo book={currentBook} />
    </main>
  );
}

export default BookDetails;
