import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchInput from "./SearchInput";
import SearchSuggestions from "./SearchSuggestions";
import VoiceSearch from "../VoiceSearch";
import {
  setActiveQuery,
  setSearchQuery,
} from "../../../../redux/Slices/videoSlice";
import { FaSearch } from "react-icons/fa";
import {
  getSearchSuggestions,
  normalizeSearchQuery,
} from "../../utils/videoSearch";
const SearchBar = ({ onSearchSelect }) => {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.videos.items);
  const searchQuery = useSelector((state) => state.videos.searchQuery);
  const [isFocused, setIsFocused] = useState(false);

  const matches = getSearchSuggestions(videos, searchQuery);

  const handleSubmit = () => {
    const query = normalizeSearchQuery(searchQuery);
    if (!query) {
      dispatch(setActiveQuery(""));
      dispatch(setSearchQuery(""));
      onSearchSelect("");
      return;
    }

    onSearchSelect(query);
  };

  return (
    <div className="flex sm:w-[42rem] mx-4 items-center relative">
      <div className="flex flex-1 relative">
        <SearchInput
          value={searchQuery}
          onChange={(q) => {
            dispatch(setSearchQuery(q));
            dispatch(setActiveQuery(q));
          }}
          onSubmit={handleSubmit}
          isFocused={isFocused}
          setIsFocused={setIsFocused}
        />

        <button
          onClick={handleSubmit}
          className="h-[43px] w-10 flex items-center justify-center bg-gray-100 border border-gray-300 rounded-r-full hover:bg-gray-200"
        >
          <FaSearch className="text-gray-600" />
        </button>

        {isFocused && matches.length > 0 && (
          <SearchSuggestions
            matches={matches}
            onSelect={(query) => {
              dispatch(setSearchQuery(query));
              onSearchSelect(query);
            }}
          />
        )}
      </div>

      <div className="hidden sm:flex ml-2">
        <VoiceSearch setSearchQuery={(q) => dispatch(setSearchQuery(q))} />
      </div>
    </div>
  );
};

export default SearchBar;
