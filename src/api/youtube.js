import axios from 'axios';

const KEY = 'AIzaSyCzcIz3EP8-YozRW_e3L3lAkmq24bdsl_4';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
