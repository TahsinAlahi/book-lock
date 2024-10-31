import { useParams } from "react-router-dom";
import useBookDetails from "../Hooks/useBookDetails";

function BookDetails() {
  const { book_key } = useParams();
  const { bookDetails, isLoading } = useBookDetails(book_key);

  console.log(bookDetails);

  return <h1 className="text-4xl">{isLoading ? "Loading..." : "got it"}</h1>;
}

export default BookDetails;
