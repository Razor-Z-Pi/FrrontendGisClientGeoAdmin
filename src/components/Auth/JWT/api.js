import axios from "axios";
import router from "@/router";

const api = axios.create();

// start request
api.interceptors.request.use(config => {

  if (localStorage.getItem("access_token")) {
    config.headers.authorization = "Bearer " + localStorage.getItem("access_token");
  }

  return config;
}, error => {
  console.log(error);
})

//  end request

api.interceptors.response.use(config => {
  if (localStorage.getItem("access_token")) {
    config.headers.authorization = "Bearer " + localStorage.getItem("access_token");
  }

  return config;
}, error => {
  // eslint-disable-next-line no-empty
  if (error.response.data.message === "Token has expired") {
    return axios.post("http://127.0.0.1:8000/api/auth/refresh", {}, {
      headers: {
        "authorization" : "Bearer " + localStorage.getItem("access_token")
      }
    }).then(res => {
      localStorage.setItem("access_token", res.data.access_token);

      error.config.headers.authorization = "Bearer " + localStorage.getItem("access_token");

      return api.request(error.config);
    })

  }

  if (error.response.status === 401) {
    router.push({ name: "auth"})
  }
})

export default api;
