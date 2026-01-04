const SearchBar = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={[
        "w-44 sm:w-64",
        "rounded-md border bg-background px-3 py-2 text-sm",
        "outline-none",
        "focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background",
      ].join(" ")}
    />
  );
};

export default SearchBar;
