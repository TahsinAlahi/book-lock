import { createContext, useContext } from "react";

const bookContext = createContext();

function BookProvider({ children }) {
  return <bookContext.Provider>{children}</bookContext.Provider>;
}

function useBooks() {
  const context = useContext(bookContext);
  if (context === undefined) {
    throw new Error("useBooks is used outside of BookProvider");
  }

  return context;
}

export { BookProvider, useBooks };
