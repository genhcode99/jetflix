import axios from "axios";

const api = axios.create({
  baseURL :"https://api.themoviedb.org/3/",
  params : {
    api_key : "713f43841ac1c4234f72f0a5d3cd1172",
    language : "en-US",
  },
});


api.get("tv/popular");

export default api;