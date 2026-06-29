import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
function VidnSide({ video, relatedVideos }) {
  const generateAvatar = (name = "") => {
    const firstLetter = name.split(" ")[0]?.[0]?.toUpperCase() || "A";
    return `https://ui-avatars.com/api/?name=${firstLetter}&background=random&color=fff`;
  };
  const toggleSub = () => setSub((prev) => !prev);
  const [sub, setSub] = useState(false);
  return (
    <div>
      <div className="bg-gray-100 min-h-screen p-4">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
          <div>
            <div className="bg-black rounded-xl overflow-hidden shadow-lg">
              <iframe
                src={video.videoUrl}
                title={video.title}
                allowFullScreen
                className="w-full aspect-video"
              />
            </div>

            <h1 className="text-xl font-semibold mt-4">{video.title}</h1>

            <div className="flex justify-between items-center mt-4 border-b border-gray-300 pb-4">
              <div className="flex items-center gap-3">
                <img
                  src={generateAvatar(video.channelName)}
                  alt={video.channelName}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-medium">{video.channelName}</p>
                  <p className="text-gray-500 text-sm">{video.views} views</p>
                </div>
              </div>

              <button
                onClick={toggleSub}
                className={`px-4 py-2 rounded-full text-sm transition ${
                  sub
                    ? "bg-gray-300 text-black hover:bg-gray-400"
                    : "bg-red-600 text-white hover:bg-red-700"
                }`}
              >
                {sub ? "Subscribed" : "Subscribe"}
              </button>
            </div>

            <div className="mt-4 bg-gray-50 p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Description</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {video.description}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 max-h-[calc(100vh-2rem)] pr-2">
            {relatedVideos.map((v) => (
              <Link
                key={v.id}
                to={`/watch/${v.id}`}
                className="flex gap-3 p-3 rounded-lg hover:bg-gray-200 transition"
              >
                <div className="w-52 h-32 rounded-lg overflow-hidden bg-black flex-shrink-0">
                  <iframe
                    src={v.videoUrl}
                    title={v.title}
                    className="w-full h-full"
                    allowFullScreen
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-base font-semibold leading-snug line-clamp-2">
                    {v.title}
                  </p>
                  <p className="text-gray-500 text-sm">{v.channelName}</p>
                  <p className="text-gray-400 text-sm">{v.views}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VidnSide;
