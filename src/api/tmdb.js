import axios from "axios";

// const runApi = () =>  {axios.get('https://baconipsum.com/api/?type=meat-and-filler&paras=1')
// .then((response) => {
//     console.log(response.data);
// })}

// export default runApi;

const baseApi = "https://api.themoviedb.org/3/";
const key = "api_key=6cd595743b14c9677099255d3a45060c";

const getConfig = async () => {
  try {
    const config = await axios.get(`${baseApi}configuration?${key}`);
    // console.log("Config");
    // console.log(config);
    return config;
  } catch (error) {
    console.log("This is from the config function");
    console.log(error);
  }
};

const getMovies = async (pageNum) => {
  let data;
  try {
    pageNum
      ? (data = await axios.get(
          `${baseApi}discover/movie?${key}&page=${pageNum}`
        ))
      : (data = await axios.get(`${baseApi}discover/movie?${key}`));
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getMoviesWithTitle = async (title, pageNum) => {
  let data;
  try {
    pageNum
      ? (data = await axios.get(
          `${baseApi}search/movie?${key}&query=${title}&page=${pageNum}`
        ))
      : (data = await axios.get(
          `${baseApi}search/movie?${key}&query=${title}`
        ));
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getMoviesWithPage = async (page) => {
  return getMovies(page);
};

const getMovie = async (movie_id) => {
  try {
    const data = await axios.get(baseApi + `movie/${movie_id}?` + key);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export {
  getMovie,
  getMovies,
  getConfig,
  getMoviesWithPage,
  getMoviesWithTitle,
};
// export default getMovies;
