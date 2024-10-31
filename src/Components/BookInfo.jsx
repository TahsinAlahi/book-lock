import useAuthorInfo from "../Hooks/useAuthorInfo";

function BookInfos({ book }) {
  const authorInfo = useAuthorInfo(book.authors[0].author.key);
  console.log(book);

  return (
    <div className="flex flex-col items-start justify-center">
      <div className=" mb-4 w-full">
        <h1 className="text-3xl font-bold lg:mb-3">{book.title}</h1>
        <p className="text-black/70">By: {authorInfo?.name}</p>
      </div>
      <div className="flex items-start gap-2 py-4 border-y-2 border-gray-800/10 w-full mb-4">
        <p className="font-semibold">Tags:</p>
        {<Subjects subjects={book.subjects} />}
      </div>
      <p className="w-full pb-4 border-b-2 border-gray-800/10 lg:mb-8">
        <span className="font-semibold text-black">Description: </span>
        <span className="text-black/70">
          {book.description?.value || "No description"}
        </span>
      </p>

      <div className="flex items-center gap-3 font-semibold">
        <button className="border-2 border-black/30 px-4 py-2 rounded-lg">
          Read
        </button>
        <button className="border-2 bg-cyan-600 border-cyan-600 px-4 py-2 rounded-lg text-white">
          Add To Wishlist
        </button>
      </div>
    </div>
  );
}

export default BookInfos;

function Subjects({ subjects }) {
  const subjectClasses =
    "px-3 py-2 bg-lime-400/40 text-lime-800 font-semibold rounded-lg capitalize";
  return (
    <div className=" flex items-center gap-2 flex-wrap">
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
