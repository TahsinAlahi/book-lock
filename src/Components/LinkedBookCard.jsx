import { Link } from "react-router-dom";
import useBookImg from "../Hooks/useBookImg";
import publishIcon from "../assets/publishIcon.png";
import CardBookImg from "./CardBookImg";

const book = {
  author_key: ["OL33146A"],
  author_name: ["Franz Kafka"],
  cover_edition_key: "OL26965562M",
  cover_i: 12820198,
  edition_count: 948,
  first_publish_year: 1915,
  has_fulltext: true,
  key: "/works/OL498556W",

  lending_edition_s: "OL8841812M",
  lending_identifier_s: "lamtamorphosedes0000fran",
  public_scan_b: false,
  title: "Die Verwandlung",
  availability: {
    status: "borrow_available",
    available_to_browse: true,
    available_to_borrow: false,
    available_to_waitlist: false,
    is_printdisabled: true,
    is_readable: false,
    is_lendable: true,
    is_previewable: true,
    identifier: "lamtamorphosedes0000fran",
    isbn: "9782080705105",
    oclc: null,
    openlibrary_work: "OL498556W",
    openlibrary_edition: "OL8841812M",
    last_loan_date: null,
    num_waitlist: null,
    last_waitlist_date: null,
    is_restricted: true,
    is_browseable: true,
    __src__: "core.models.lending.get_availability",
  },
};

function LinkedBookCard() {
  return (
    <div className="w-full border border-black/60 p-6 grid grid-cols-2 gap-6 rounded-lg ">
      <CardBookImg className="w-2/3" book={book} />

      <div className="flex items-start justify-center w-full flex-col h-full gap-2 ">
        <h1 className="text-2xl font-bold">{book.title}</h1>
        <h2 className="font-medium text-black/50">{book.author_name[0]}</h2>
        <div className="flex items-center gap-2 mt-2">
          <img
            src={publishIcon}
            alt="Publish year"
            className="w-6 aspect-square"
          />
          <span className="text-black/50">
            Publishing Year: {book.first_publish_year}
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
