import HeroSection from "../Components/HeroSection";
import { useBooks } from "../Contexts/BookContext";
import BookList from "../Components/BookList";
import Loader from "../Components/Loader";

function HomePage() {
  const { isLoading } = useBooks();
  console.log(isLoading);

  return (
    <main className="w-full flex items-center flex-col max-h-full">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <HeroSection />
          <BookList />
        </>
      )}
    </main>
  );
}

export default HomePage;
