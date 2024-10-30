import { createContext, useContext, useEffect, useReducer } from "react";

const bookContext = createContext();

const initState = {
  allBooks: [],
  finishedBooks: [],
  wishListBooks: [],
  isLoading: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "gettingBooks":
      return {
        ...state,
        isLoading: true,
      };
    case "finishGettingBooks":
      return { ...state, allBooks: action.payload, isLoading: false };

    default:
      throw new Error("unknown action type");
  }
}

function BookProvider({ children }) {
  const [value, dispatch] = useReducer(reducer, initState);
  // const { allBooks, finishedBooks, wishListBooks, isLoading } = value;

  useEffect(() => {
    async function getAllBooks() {
      dispatch({ type: "gettingBooks" });
      let cachedStorage = sessionStorage.getItem("allBooks");
      try {
        if (cachedStorage) {
          cachedStorage = JSON.parse(cachedStorage);
        }

        const res = await fetch("https://openlibrary.org/trending/yearly.json");
        const data = await res.json();
        cachedStorage = data.works.slice(0, 15);
        sessionStorage.setItem("allBooks", JSON.stringify(cachedStorage));

        return cachedStorage;
      } catch (err) {
        console.error(err.message);
      } finally {
        dispatch({ type: "finishGettingBooks", payload: cachedStorage });
      }
    }

    getAllBooks();
  }, []);

  return <bookContext.Provider value={value}>{children}</bookContext.Provider>;
}

function useBooks() {
  const context = useContext(bookContext);
  if (context === undefined)
    throw new Error("useBooks is used outside of BookProvider");

  return context;
}

export { BookProvider, useBooks };
