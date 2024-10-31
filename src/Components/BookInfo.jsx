import useAuthorInfo from "../Hooks/useAuthorInfo";

function BookInfos({ book }) {
  const authorInfo = useAuthorInfo(book.authors[0].author.key);

  return (
    <div className="flex flex-col items-start justify-between">
      <div className=" mb-4 w-full">
        <h1 className="text-3xl font-bold lg:mb-3">{book.title}</h1>
        <p className="text-black/70">By: {authorInfo?.name}</p>
      </div>
      <div className="flex items-center gap-2 py-4 border-y-2 border-gray-800/10 w-full">
        <p className="font-semibold">Tags:</p>
        <Subjects subjects={book.subjects} />
      </div>
    </div>
  );
}

export default BookInfos;

function Subjects({ subjects }) {
  console.log(subjects);
  const subjectClasses =
    "px-3 py-2 bg-lime-400/40 text-lime-800 font-semibold rounded-lg capitalize";
  return (
    <div className=" flex items-center gap-2">
      {subjects.map((subject, i) => {
        return subject.split(" ").length === 1 ? (
          <div key={i} className={subjectClasses}>
            {subject}
          </div>
        ) : null;
      })}
    </div>
  );
}
