
import axios from 'axios';

const BASE_URL = "https://youtube138.p.rapidapi.com";

export const fetchDataFromApi = async (url) => {
  const options = {
    method: 'GET',
    params: {
      q: url, // assuming url contains the search query
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_APPWRITE_YOUTUBE_API_KEY,
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com',
    }
  };  
  

  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    
    if (error.response && error.response.status === 429) {
      // Implement backoff and retry logic here
      const retryAfter = error.response.headers['Retry-After'] || 1;
        alert("Error : 404")
      // Default to 1 second
      await new Promise((resolve) => setTimeout(resolve, retryAfter * 1000));
      return fetchDataFromApi(url);
    }
    throw error;
  }
};

