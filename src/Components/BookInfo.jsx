// import useAuthorInfo from "../Hooks/useAuthorInfo";

function BookInfos({ book }) {
  console.log("got it");
  console.log(book);
}

export default BookInfos;

// const authorInfo = useAuthorInfo(bookDetails.authors[0].author.key);

// return (
//   <div className="bg-red-500">
//     <div>
//       <h1 className="text-3xl font-bold">{bookDetails.title}</h1>
//       <p>{authorInfo?.personal_name || "Loading..."}</p>
//     </div>
//   </div>
// );
