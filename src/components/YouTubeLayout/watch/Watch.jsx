import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../../redux/Slices/videoSlice";
import WatchSkeleton from "./WatchSkeleton";
import VidnSide from "./VidnSide";

const Watch = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { items: videos, loading } = useSelector((state) => state.videos);

  useEffect(() => {
    if (!videos.length) dispatch(fetchVideos());
  }, [dispatch, videos.length]);

  if (loading) {
    return <WatchSkeleton />;
  }

  const video = videos.find((v) => v.id === id);
  const relatedVideos = videos?.filter((v) => v.id !== id);

  return <VidnSide video={video} relatedVideos={relatedVideos} />;
};

export default Watch;
