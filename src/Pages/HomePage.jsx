export async function allBookLoader() {
  let cachedStorage = sessionStorage.getItem("allBooks");

  if (cachedStorage) {
    return JSON.parse(cachedStorage);
  }

  const res = await fetch("https://openlibrary.org/trending/yearly.json");
  const data = await res.json();
  cachedStorage = data.works.slice(0, 15);
  sessionStorage.setItem("allBooks", JSON.stringify(cachedStorage));

  return cachedStorage;
}

function HomePage() {
  return (
    <main>
      <div>book</div>
    </main>
  );
}

export default HomePage;
