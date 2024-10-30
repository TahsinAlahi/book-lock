import HeroSection from "../Components/HeroSection";
import { useBooks } from "../Contexts/BookContext";

function HomePage() {
  const { allBooks, isLoading } = useBooks();
  console.log(allBooks);

  return (
    <main className="w-full flex items-center flex-col max-h-full">
      <HeroSection />
    </main>
  );
}

export default HomePage;
