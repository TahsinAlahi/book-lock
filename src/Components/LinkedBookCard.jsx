import { Link } from "react-router-dom";
import publishIcon from "../assets/publishIcon.png";
import CardBookImg from "./CardBookImg";
import useAuthorInfo from "../Hooks/useAuthorInfo";
import { useRef } from "react";

function LinkedBookCard({ book }) {
  const authorInfo = useAuthorInfo(book.authors[0].author.key);

  return (
    <div className="w-full border border-black/60 p-6 grid grid-cols-2 gap-6 rounded-lg ">
      <CardBookImg className="w-2/3" book={book} />

      <div className="flex items-start justify-center w-full flex-col h-full gap-2 ">
        <h1 className="text-2xl font-bold">{book.title}</h1>
        <h2 className="font-medium text-black/50">{authorInfo?.name}</h2>
        <Subjects subjects={book.subjects} />
        <div className="flex items-center gap-2 mt-2">
          <img
            src={publishIcon}
            alt="Publish year"
            className="w-6 aspect-square"
          />
          <span className="text-black/50">
            Publishing Year: {book.subject_times?.[0] || "Unknown"}
          </span>
        </div>

        <Link
          className="bg-cyan-500 py-2 px-4 border-2 border-gray-300 rounded-lg text-white font-semibold"
          to={`/book/${book.key.split("/")[2]}`}
        >
          Details
        </Link>
      </div>
    </div>
  );
}

export default LinkedBookCard;

function Subjects({ subjects }) {
  const subjectClasses =
    "px-3 py-2 bg-lime-400/40 text-lime-800 font-semibold rounded-lg capitalize";

  const filteredSubjects = subjects
    .filter((subject) => subject.split(" ").length === 1)
    .splice(0, 3);

  return (
    <div className="flex items-center gap-2 flex-wrap">
      {filteredSubjects.map((subject, i) => (
        <div key={i} className={subjectClasses}>
          {subject}
        </div>
      ))}
    </div>
  );
}
