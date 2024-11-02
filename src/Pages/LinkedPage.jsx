import { useState } from "react";
import SortingOptions from "../Components/SortingOptions";

function LinkedPage() {
  const [sorting, setSorting] = useState("default");
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <h1 className="text-2xl font-bold w-full lg:py-6 bg-slate-500/20 rounded-lg text-center">
        Books
      </h1>
      <SortingOptions sorting={sorting} setSorting={setSorting} />
    </div>
  );
}

export default LinkedPage;
