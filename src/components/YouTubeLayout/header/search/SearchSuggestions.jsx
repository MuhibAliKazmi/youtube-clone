import { FaSearch } from "react-icons/fa";

function SearchSuggestions({ matches, onSelect }) {
  return (
    <div>
      <ul className="absolute top-full left-0 w-full bg-slate-100 border border-gray-600 rounded-b-lg shadow-md mt-1 overflow-y-auto scrollbar-hide max-h-80 z-50">
        {matches.map((item, index) => (
          <li
            key={index}
            onMouseDown={() => {
              onSelect(item);
              console.log("The item is", item);
            }}
            className="px-4 py-2 hover:bg-gray-300 cursor-pointer"
          >
            <div className="flex text-sm gap-4 items-center">
              <FaSearch className="text-gray-600 text-lg" />
              <span>{item}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchSuggestions;
