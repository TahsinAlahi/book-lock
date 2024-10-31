import useAuthorInfo from "../Hooks/useAuthorInfo";

function BookInfos({ book }) {
  const authorInfo = useAuthorInfo(book.authors[0].author.key);
  console.log(authorInfo);

  return (
    <div className="">
      <div>
        <h1 className="text-3xl font-bold">{book.title}</h1>
        <p>By: {authorInfo?.name}</p>
      </div>
    </div>
  );
}

export default BookInfos;
