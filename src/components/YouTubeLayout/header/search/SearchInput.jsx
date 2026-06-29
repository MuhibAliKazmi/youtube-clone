import { FaSearch } from "react-icons/fa";

const SearchInput = ({
  value,
  onChange,
  onSubmit,
  isFocused,
  setIsFocused,
}) => {
  return (
    <div
      className={`relative flex-1 rounded-l-full border-2 ${
        isFocused ? "border-blue-500" : "border-gray-300"
      } hidden sm:block`}
    >
      {isFocused && (
        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm" />
      )}
      <input
        type="text"
        placeholder="Search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setTimeout(() => setIsFocused(false), 100)}
        onKeyDown={(e) => {
          if (e.key === "Enter") onSubmit();
        }}
        className={`w-full bg-white rounded-l-full py-2 outline-none h-10 ${
          isFocused ? "px-10" : "px-4"
        }`}
      />
    </div>
  );
};

export default SearchInput;
