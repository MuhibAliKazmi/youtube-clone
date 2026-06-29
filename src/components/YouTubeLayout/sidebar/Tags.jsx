import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveQuery,
  setSearchQuery,
} from "../../../redux/Slices/videoSlice";

const Tags = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.videos.items);
  const activeQuery = useSelector((state) => state.videos.activeQuery);

  const uniqueTags = Array.from(new Set(videos.flatMap((video) => video.tags ?? [])));

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
  };

  const scroll = (direction) => {
    scrollRef.current?.scrollBy({
      left: direction * 200,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateScrollState();
    el.addEventListener("scroll", updateScrollState);

    return () => el.removeEventListener("scroll", updateScrollState);
  }, []);

  const clearFilters = () => {
    dispatch(setActiveQuery(""));
    dispatch(setSearchQuery(""));
  };

  const applyTag = (tag) => {
    dispatch(setActiveQuery(tag));
    dispatch(setSearchQuery(tag));
  };

  return (
    <div className="flex items-center w-full space-x-2">
      {canScrollLeft ? (
        <button
          onClick={() => scroll(-1)}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full w-7 h-7 flex items-center justify-center shadow-sm transition-all duration-200"
        >
          <span className="text-sm">&lsaquo;</span>
        </button>
      ) : (
        <button
          onClick={clearFilters}
          className="bg-gray-300 text-gray-800 rounded-full px-4 py-1 text-sm font-medium hover:bg-gray-400 transition-colors duration-200"
        >
          All
        </button>
      )}

      <div
        ref={scrollRef}
        className="overflow-x-auto whitespace-nowrap py-2 flex-1 scrollbar-hide scroll-smooth"
      >
        {uniqueTags.map((tag) => (
          <button
            key={tag}
            onClick={() => applyTag(tag)}
            className={`inline-block mr-2 rounded-full px-4 py-1 text-sm font-medium transition-colors duration-200 ${
              activeQuery === tag
                ? "bg-gray-700 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {canScrollRight && (
        <button
          onClick={() => scroll(1)}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full w-7 h-7 flex items-center justify-center shadow-sm transition-all duration-200"
        >
          <span className="text-sm">&rsaquo;</span>
        </button>
      )}
    </div>
  );
};

export default Tags;
