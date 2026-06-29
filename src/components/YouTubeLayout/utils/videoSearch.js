const normalizeQuery = (value = "") => value.trim().toLowerCase();

const videoMatchesQuery = (video, query) => {
  if (!query) return true;

  const title = video.title?.toLowerCase() ?? "";
  const channelName = video.channelName?.toLowerCase() ?? "";
  const tags = Array.isArray(video.tags)
    ? video.tags.map((tag) => tag.toLowerCase())
    : [];

  return (
    title.includes(query) ||
    channelName.includes(query) ||
    tags.some((tag) => tag.includes(query))
  );
};

export const filterVideosByQuery = (videos = [], query = "") => {
  const normalizedQuery = normalizeQuery(query);
  return videos.filter((video) => videoMatchesQuery(video, normalizedQuery));
};

export const getSearchSuggestions = (videos = [], query = "") => {
  const normalizedQuery = normalizeQuery(query);
  if (!normalizedQuery) return [];

  const matches = new Set();

  videos.forEach((video) => {
    const title = video.title ?? "";
    const channelName = video.channelName ?? "";
    const tags = Array.isArray(video.tags) ? video.tags : [];

    if (title.toLowerCase().includes(normalizedQuery)) {
      matches.add(title);
    }

    if (channelName.toLowerCase().includes(normalizedQuery)) {
      matches.add(channelName);
    }

    tags.forEach((tag) => {
      if (tag.toLowerCase().includes(normalizedQuery)) {
        matches.add(tag);
      }
    });
  });

  return Array.from(matches).slice(0, 10);
};

export const normalizeSearchQuery = normalizeQuery;
