import React from "react";
import { Link } from "react-router-dom";
function VideoCards({ filteredVideos }) {
  const generateAvatar = (name = "") => {
    const firstLetter = name.split(" ")[0]?.[0]?.toUpperCase() || "A";
    return `https://ui-avatars.com/api/?name=${firstLetter}&background=random&color=fff`;
  };
  return (
    <div>
      <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 3xl:grid-cols-5">
        {filteredVideos.map((card) => (
          <li key={card.id}>
            <Link to={`/watch/${card.id}`}>
              <div
                className="cursor-pointer group transition-all duration-300 
            hover:-translate-y-[4px] hover:shadow-[0_4px_12px_rgba(0,0,0,0.2)] 
            hover:bg-gray-50 rounded-2xl p-2 max-w-[480px]"
              >
                <div className="aspect-video w-full rounded-xl overflow-hidden bg-gray-200">
                  <iframe
                    src={card.videoUrl}
                    title={card.title}
                    allowFullScreen
                    className="w-full h-full rounded-xl"
                  />
                </div>

                <div className="flex mt-3">
                  <img
                    src={generateAvatar(card.channelName)}
                    alt="Channel Logo"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <h2 className="text-sm font-semibold">{card.title}</h2>
                    <p className="text-gray-600 text-xs mt-1">
                      {card.channelName}
                    </p>
                    <p className="text-gray-500 text-xs">{card.views}</p>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VideoCards;
