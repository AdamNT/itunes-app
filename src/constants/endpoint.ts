export const API_BASE_URL: string = "https://itunes.apple.com";

const ENDPOINT: Record<string, string> = {
  TOP_ALBUMS: "/us/rss/topalbums/limit=100/json",
};

export default ENDPOINT;
