import { useParams } from "react-router-dom";

function BookDetails() {
  const { book_key } = useParams();

  return <h1 className="text-4xl">{book_key}</h1>;
}

export default BookDetails;
