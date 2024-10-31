import { useParams } from "react-router-dom";
import useBookDetails from "../Hooks/useBookDetails";
import Loader from "../Components/Loader";
import CardBookImg from "../Components/CardBookImg";

function BookDetails() {
  const { book_key } = useParams();
  const { bookDetails, isLoading } = useBookDetails(book_key);
  console.log(bookDetails);

  if (isLoading || Object.keys(bookDetails).length === 0) {
    return <Loader />;
  }

  return (
    <main>
      <CardBookImg book={bookDetails} />
    </main>
  );
}

export default BookDetails;
