import { createContext, useContext, useEffect, useReducer } from "react";

const bookContext = createContext();

const initState = {
  allBooks: [],
  finishedBooks: [],
  wishListBooks: [],
  isLoading: false,
  currentBook: {},
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "gettingBooks":
      return {
        ...state,
        isLoading: true,
      };
    case "finishGettingBooks":
      return { ...state, allBooks: [...action.payload], isLoading: false };
    case "gettingBookDetails":
      return { ...state, isLoading: true, currentBook: {} };
    case "finishGettingBookDetails":
      return { ...state, isLoading: false, currentBook: action.payload };
    case "error":
      return { ...state, isLoading: false, error: action.payload };
    default:
      throw new Error("unknown action type");
  }
}

function BookProvider({ children }) {
  const [
    { allBooks, finishedBooks, wishListBooks, isLoading, currentBook },
    dispatch,
  ] = useReducer(reducer, initState);

  useEffect(() => {
    async function getAllBooks() {
      dispatch({ type: "gettingBooks" });
      let cachedStorage = sessionStorage.getItem("allBooks");

      try {
        if (cachedStorage) {
          cachedStorage = JSON.parse(cachedStorage);
        } else {
          const res = await fetch(
            "https://openlibrary.org/trending/weekly.json"
          );
          const data = await res.json();
          cachedStorage = data.works.slice(0, 15);
          sessionStorage.setItem("allBooks", JSON.stringify(cachedStorage));
        }

        dispatch({ type: "finishGettingBooks", payload: cachedStorage });
        return cachedStorage;
      } catch (err) {
        console.error(err.message);
        dispatch({ type: "finishGettingBooks", payload: cachedStorage });
      }
    }

    getAllBooks();
  }, []);

  async function getBooks(book_key) {
    dispatch({ type: "gettingBooks" });
    const BookUrl = `https://openlibrary.org/works/${book_key}.json`;

    try {
      const res = await fetch(BookUrl);
      const data = await res.json();
      dispatch({ type: "finishGettingBookDetails", payload: data });
    } catch (err) {
      console.log(err);
      dispatch({ type: "error", payload: err.message });
    }
  }

  return (
    <bookContext.Provider
      value={{
        allBooks,
        finishedBooks,
        wishListBooks,
        isLoading,
        currentBook,
        getBooks,
      }}
    >
      {children}
    </bookContext.Provider>
  );
}

function useBooks() {
  const context = useContext(bookContext);
  if (context === undefined)
    throw new Error("useBooks is used outside of BookProvider");

  return context;
}

export { BookProvider, useBooks };
