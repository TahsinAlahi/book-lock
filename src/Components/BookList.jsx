import { useBooks } from "../Contexts/BookContext";
import BookCard from "./BookCard";

function BookList() {
  const { allBooks } = useBooks();
  return (
    <div className="lg:mt-10">
      <h1 className="text-4xl font-bold text-center lg:mb-10">Books</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {allBooks.map((book) => {
          return <BookCard book={book} key={book.key} />;
        })}
      </div>
    </div>
  );
}

export default BookList;
