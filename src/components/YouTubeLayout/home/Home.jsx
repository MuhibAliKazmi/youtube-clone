import { useEffect } from "react";
import Tags from "../sidebar/Tags";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../../redux/Slices/videoSlice";
import SkeletonLoader from "./SkeletonLoader";
import NotFound from "./NotFound";
import VideoCards from "./VideoCards";
import { filterVideosByQuery } from "../utils/videoSearch";

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

  const filteredVideos = filterVideosByQuery(videos, activeQuery);

  return (
    <div className="bg-gray-100 min-h-screen p-0 sm:px-6 w-full">
      <div className="sticky top-0 z-10 bg-gray-100 py-2">
        <Tags />
      </div>

      {loading ? (
        <SkeletonLoader />
      ) : activeQuery && filteredVideos.length === 0 ? (
        <NotFound />
      ) : (
        <VideoCards filteredVideos={filteredVideos} />
      )}
    </div>
  );
};

export default Home;
