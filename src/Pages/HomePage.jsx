import { useBooks } from "../Contexts/BookContext";

function HomePage() {
  const { allBooks, isLoading } = useBooks();
  console.log(allBooks);

  return <main></main>;
}

export default HomePage;
