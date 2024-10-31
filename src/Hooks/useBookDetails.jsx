import { useEffect, useState } from "react";

function useBookDetails(book_key) {
  const [bookDetails, setBookDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const BookUrl = `https://openlibrary.org/works/${book_key}.json`;

  useEffect(() => {
    async function getBookDetails() {
      setIsLoading(true);

      try {
        const res = await fetch(BookUrl);
        const data = await res.json();
        setBookDetails(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }

    getBookDetails();
  }, [book_key]);

  console.log(bookDetails);
  return { bookDetails, isLoading };
}

export default useBookDetails;
