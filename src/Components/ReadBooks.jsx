import LinkedBookCard from "./LinkedBookCard";
import { useBooks } from "../Contexts/BookContext";

function ReadBooks() {
  const { finishedBooks } = useBooks();
  return (
    <div className="grid grid-cols-2 gap-5">
      {finishedBooks.map((book) => (
        <LinkedBookCard key={book.key} book={book} />
      ))}
    </div>
  );
}

export default ReadBooks;
