import { useEffect } from "react";
import Tags from "../sidebar/Tags";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../../redux/Slices/videoSlice";
import SkeletonLoader from "./SkeletonLoader";
import NotFound from "./NotFound";
import VideoCards from "./VideoCards";

const Home = () => {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.videos.items);
  const activeQuery = useSelector((state) => state.videos.activeQuery);
  const loading = useSelector((state) => state.videos.loading);

  useEffect(() => {
    if (videos.length === 0) {
      dispatch(fetchVideos());
    }
  }, [dispatch, videos.length]);

  const filteredvideos = videos.filter((card) => {
    if (!activeQuery) return true;
    const q = activeQuery.toLowerCase().trim();
    const inTitle = card.title?.toLowerCase().includes(q);
    const inChannel = card.channelName?.toLowerCase().includes(q);
    const inTags = (card.tags || []).some((t) => t.toLowerCase().includes(q));
    return inTitle || inChannel || inTags;
  });

  return (
    <div className="bg-gray-100 min-h-screen p-0 sm:px-6 w-full">
      <div className="sticky top-0 z-10 bg-gray-100 py-2">
        <Tags />
      </div>

      {loading ? (
        <SkeletonLoader />
      ) : activeQuery || filteredvideos.length === 0 ? (
        <NotFound />
      ) : (
        <VideoCards filteredvideos={filteredvideos} />
      )}
    </div>
  );
};

export default Home;
