import axios from  'axios';

const BASE_URL = "https://youtube138.p.rapidapi.com"
const options = {
    method: 'GET',
    params: {
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_APPWRITE_YOUTUBE_API_KEY,
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };
  export const fetchDataFromApi = async (url) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/${url}`, options);
      return data;
    } catch (error) {
      if (error.response && error.response.status === 429) {
        // Implement backoff and retry logic here
        const retryAfter = error.response.headers['Retry-After'] || 1;
        // Default to 1 second
        await new Promise(resolve => setTimeout(resolve, retryAfter * 1000));
        return fetchDataFromApi(url);
      }
      throw error;
    }
  }
  