import axios from 'axios';

const API_KEY = 'AIzaSyDS67Uss-4tqpBITMnFJyaBIoUWflV1bYs';
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

export const searchVideos = async (query: string) => {
  const response = await axios.get(`${BASE_URL}/search`, {
    params: {
      part: 'snippet',
      maxResults: 10,
      q: query,
      key: API_KEY,
    },
  });

  return response.data.items;
};
