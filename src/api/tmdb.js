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
    console.log("Config");
    console.log(config);
    return config;
  } catch (error) {
    console.log("This is from the config function");
    console.log(error);
  }
};
const getMovies = async (pageNum) => {
  const page = "&page=" + pageNum.toString();
  try {
    const data = await axios.get(baseApi + "discover/movie?" + key + page);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getMovie = async (movie_id) => {
  try {
    const data = await axios.get(baseApi + `movie/${movie_id}?` + key);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export { getMovie, getMovies, getConfig };
// export default getMovies;
