import { useState } from "react";

export const useVideoFilter = (videos) => {
  const [matches, setMatches] = useState([]);

  const filteredVideos = (query) => {
    const cleanSearchTerm = query.trim().toLowerCase();
    if (!cleanSearchTerm) return setMatches([]);

    const matched = Array.from(
      new Set(
        videos.flatMap((v) => [
          ...(v.title?.toLowerCase().includes(cleanSearchTerm)
            ? [v.title]
            : []),
          ...(v.channelName?.toLowerCase().includes(cleanSearchTerm)
            ? [v.channelName]
            : []),
          ...(v.tags?.filter((tag) =>
            tag.toLowerCase().includes(cleanSearchTerm)
          ) || []),
        ])
      )
    );

    setMatches(matched.slice(0, 10));
  };

  return { matches, filteredVideos };
};
