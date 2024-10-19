
import axios from 'axios';
import { API_KEY } from './Keys';


export const fetchMoviesByTitle = async (term, year) => {
  const response = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(term)}${year ? `&y=${encodeURIComponent(year)}` : ''}`);
  return response.data;
};

export const fetchMovieDetails = async (imdbID, plot) => {
  const response = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}${plot === 'full' ? '&plot=full' : ''}`);
  return response.data;
};
