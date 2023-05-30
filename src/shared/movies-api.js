import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '248116f5568d54feca6593c74cdd2b90',
    language: 'en-US',
    include_adult: false,
    page: 1,
  },
  headers: {
    accept: 'application/json',
  },
});

export const getTrendingMovies = async () => {
  const path = '/trending/movie/day';
  const { data } = await instance.get(path);

  const moviesList = data.results.map(({ id, title, poster_path }) => {
    const movieTitle =
      title.length > 25 ? `${title.substring(0, 22)}...` : title;
    const src = poster_path
      ? `https://image.tmdb.org/t/p/w500/${poster_path}`
      : 'https://via.placeholder.com/200x300.png?text=No+Image';

    return { id, movieTitle, src };
  });

  return moviesList;
};

export const getMovieByName = async query => {
  const path = '/search/movie';
  const { data } = await instance.get(path, {
    params: { query: query },
  });
  const moviesList = data.results.map(({ id, name, title, poster_path }) => {
    let movieTitle = title || name;
    if (movieTitle.length > 25) {
      movieTitle = movieTitle.substring(0, 22) + '...';
    }
    let src = poster_path
      ? `https://image.tmdb.org/t/p/w500/${poster_path}`
      : 'https://via.placeholder.com/200x300.png?text=No+Image';
    return { id, movieTitle, src };
  });
  return moviesList;
};

export const getMovieInfoById = async movieId => {
  const path = `/movie/${movieId}`;
  const { data } = await instance.get(path);

  const { genres, title, poster_path, release_date, vote_average, overview } =
    data;
    console.log(data);

  const movieTitle = title;
  const posterPath = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : 'https://via.placeholder.com/200x300';

  return {
    id: movieId,
    movieTitle,
    posterPath,
    releaseYear: release_date.substr(0, 4),
    voteAverage: `${(vote_average * 10).toFixed(0)}%`,
    overview,
    genres: genres.length
      ? genres.map(item => item.name).join(', ')
      : 'Oops!! Unknown genres.',
  };
};
