import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="flex items-center justify-center bg-slate-300 min-h-svh flex-col gap-9">
      <h2 className="lg:text-5xl font-bold">Page Not Found</h2>
      <div className="flex items-center justify-center flex-col gap-5">
        <p className="lg:text-2xl font-semibold">This page was not found.</p>{" "}
        <Link
          to="/"
          className="lg:text-xl px-5 py-2 rounded-lg font-semibold bg-cyan-400 border-2 border-cyan-700 hover:bg-cyan-300"
        >
          Go back Home
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
