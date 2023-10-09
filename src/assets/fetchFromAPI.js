
import axios from "axios";


const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  url: BASE_URL,
  params: {
    part: 'id,snippet',
    videoId: 'M7FIvfx5J10',
    type: 'video,channel',
    maxResults: '40',
    order: 'date'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {

  try{
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
   } catch (error) {
    if (error.response) {
      // Request made but the server responded with an error
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // Request made but no response is received from the server.
      console.log(error.request);
    } else {
      // Error occured while setting up the request
      console.log('Error', error.message);
    }
  }

}


// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }