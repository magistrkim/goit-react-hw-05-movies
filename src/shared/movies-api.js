import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org',
  params: {
    api_key: '248116f5568d54feca6593c74cdd2b90',
    language: 'en-US',
    include_adult: false,
  },
  headers: {
    accept: 'application/json',
  },
});

export const getTrendingMovies = async () => {
    const path = '/3/trending/movie/day';
    const { data } = await instance.get(path);
  
    const moviesList = data.results.map(({ id, title, poster_path }) => {
      const movieTitle = title.length > 25 ? `${title.substring(0, 22)}...` : title;
      const src = poster_path
        ? `https://image.tmdb.org/t/p/w500/${poster_path}`
        : 'https://via.placeholder.com/200x300.png?text=No+Image';
  
      return { id, movieTitle, src };
    });
  
    return moviesList;
  };
