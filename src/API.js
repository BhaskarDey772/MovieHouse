const API_KEY = "b8efab8a3b29897c459d1179acac347e";

const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_URL = "https://image.tmdb.org/t/p/";

const BACKDROP_SIZE = "w1280";
const POSTER_SIZE = "w500";
const PROFILE_SIZE = "w185";

export const fetchTrending = async (MEDIA_TYPE) => {
  const response = await fetch(
    `${BASE_URL}/trending/${MEDIA_TYPE}/day?api_key=${API_KEY}&include_adult=false`
  );
  const data = response.json();
  return data;
};

export const fetchPopular = async (MEDIA_TYPE) => {
  const response = await fetch(
    `${BASE_URL}/${MEDIA_TYPE}/popular?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`
  );
  const data = response.json();
  return data;
};

export const fetchByGenre = async (MEDIA_TYPE, GENRE) => {
  const response = await fetch(
    `${BASE_URL}/discover/${MEDIA_TYPE}?api_key=${API_KEY}&with_genres=${GENRE}&include_adult=false`
  );
  const data = response.json();
  return data;
};

export const fetchSearchResult = async (QUERY, PAGE) => {
  const response = await fetch(
    `${BASE_URL}/search/multi?api_key=${API_KEY}&language=en-US&query=${QUERY}&page=${PAGE}&include_adult=false`
  );
  const data = response.json();
  return data;
};

export const fetchDetailsById = async (MEDIA_TYPE, ID) => {
  const response = await fetch(
    `${BASE_URL}/${MEDIA_TYPE}/${ID}?api_key=${API_KEY}&language=en-US`
  );
  const data = response.json();
  return data;
};

export const fetchVideoUrl = async (MEDIA_TYPE, ID) => {
  const response = await fetch(
    `${BASE_URL}/${MEDIA_TYPE}/${ID}/videos?api_key=${API_KEY}&language=en-US`
  );
  const data = response.json();
  return data;
};
export const fetchCredits = async (MEDIA_TYPE, ID) => {
  const response = await fetch(
    `${BASE_URL}/${MEDIA_TYPE}/${ID}/credits?api_key=${API_KEY}&language=en-US`
  );
  const data = response.json();
  return data;
};

export const getGenre = (id) => {
  let i;
  const ids = [
    12, 14, 16, 18, 27, 28, 35, 36, 37, 53, 80, 99, 878, 9648, 10402, 10749,
    10751, 10752, 10770,
  ];
  const genres = [
    "Adventure",
    "Fantasy",
    "Animation",
    "Drama",
    "Horror",
    "Action",
    "Comedy",
    "History",
    "Western",
    "Thriller",
    "Crime",
    "Documentary",
    "Science Fiction",
    "Mystery",
    "Music",
    "Romance",
    "Family",
    "War",
    "TV Movie",
  ];
  for (i = 0; i < ids.length; i++) {
    if (ids[i] === id) {
      return genres[i];
    }
  }
};

export const getShowsGenre = (id) => {
  let i;
  const ids = [
    16, 18, 35, 37, 80, 99, 9648, 10751, 10759, 10762, 10763, 10764, 10765,
    10766, 10767, 10768,
  ];
  const genres = [
    "Animation",
    "Drama",
    "Comedy",
    "Western",
    "Crime",
    "Documentary",
    "Mystery",
    "Family",
    "Action & Adventure",
    "Kids",
    "News",
    "Reality",
    "Sci-Fi & Fantasy",
    "Soap",
    "Talk",
    "War & Politics",
  ];

  for (i = 0; i < ids.length; i++) {
    if (ids[i] === id) {
      return genres[i];
    }
  }
};

export { IMAGE_URL, BACKDROP_SIZE, POSTER_SIZE, PROFILE_SIZE };
