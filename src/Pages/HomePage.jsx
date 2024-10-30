export async function allBookLoader() {
  const res = await fetch("https://openlibrary.org/trending/yearly.json");
  const data = await res.json();

  const returnData = data.works.slice(0, 15);

  return returnData;
}

function HomePage() {
  return (
    <main>
      <div>Books</div>
    </main>
  );
}

export default HomePage;
