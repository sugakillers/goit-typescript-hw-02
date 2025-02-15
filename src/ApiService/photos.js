import axios from 'axios';

const API_KEY = 'LHQ1nRcV_JJmFCE31MGASvgYuNFgh7QVtiOfPZ3r-s8-s8';
axios.defaults.baseURL = 'https://api.unsplash.com/';
axios.defaults.headers.common['Authorization'] = `Client-ID ${API_KEY}`;

axios.defaults.params = {
  orientation: 'landscape',
  per_page: 28,
};

export const catchPhoto = async (query, page) => {
  const { data } = await axios.get(`search/photos?query=${query}&page=${page}`);

  return data;
};