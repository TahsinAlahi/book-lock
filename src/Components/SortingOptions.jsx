function SortingOptions({ sorting, setSorting }) {
  return (
    <select
      onChange={(e) => setSorting(e.target.value)}
      value={sorting}
      className="px-5 py-3  mx-auto rounded-lg text-center font-semibold text-white bg-green-600"
    >
      <option value="default" defaultValue={true} disabled hidden>
        SortBy
      </option>
      <option className="text-center" value="rating">
        Rating
      </option>
      <option value="pages">Number of pages</option>
      <option value="year">Published year</option>
    </select>
  );
}

export default SortingOptions;
