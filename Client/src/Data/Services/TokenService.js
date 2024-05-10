import axios from "axios";

const instance = axios.create();

instance.interceptors.request.use(
  (config) => {
    console.log("Request");
    console.log(config);
    return config;
  },
  (error) => {
    console.log("Error request");
    console.log(error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (config) => {
    console.log("Response");
    console.log(config);
    return config;
  },
  (error) => {
    console.log("Error response");
    console.log(error);
    return Promise.reject(error);
  }
);

export default instance;
